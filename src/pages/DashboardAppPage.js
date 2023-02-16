import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import SosIcon from '@mui/icons-material/Sos';
import AddIcon from '@mui/icons-material/Add';

// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();
  const newsData = [
    {
      newsTitle: 'Pazarcık\'ta arama-kurtarma çalışmaları sona erdi',
      text: 'Kahramanmaraşın Pazarcık ilçesinde meydana gelen 7.7 büyüklüğündeki deprem sonrası yıkılan binalarda arama kurtarma çalışmaları tamamlandı.',
    },
    {
      newsTitle: 'Türkiye Tek Yürek toplam bağış miktarı! ',
      text: 'Yaklaşık 8 saat süren programda toplanan bağış miktarı 115 milyar TL\'yi aştı. Ortak yayın boyunca 115 milyar 146 milyon 528 bin TL bağış toplandı ve 9 milyon 10 bin adet SMS gönderildi.',
    },
    {
      newsTitle: 'Hatay\'da 228. saatte bir mucize! Enkaz altından çıkarıldı',
      text: 'Kahramanmaraş\'ın Pazarcık ilçesinde meydana gelen 7.7 büyüklüğündeki deprem sonrası yıkılan binalarda arama kurtarma çalışmaları tamamlandı.',
    },
    {
      newsTitle: 'Yardım Tırları Kilometrelerce Kuyruk Oluşturdu',
      text: 'Yardım Tırları Kilometrelerce Kuyruk Oluşturdu. Türkiye\'nin birçok ilinden gönderilen yardım tırları ve araçlar, Hatay\'da uzun kuyruklar...',
    },
    {
      newsTitle: 'Adıyaman\'da 115 bin kişinin barınacağı çadır kent kuruldu',
      text: 'Kahramanmaraş merkezli depremlerin ardından büyük yıkımların yaşandığı kenti terk etmeyen vatandaşlar için Adıyaman\'da 298 bin çadır...',
    },
  ];

  return (
    <>
      <Helmet>
        <title> CoorDys </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Merhaba,
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Erzak Çıkışı (koli)" total={50000} icon={'ant-design:minus-circle-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Erzak Girişi (koli)" total={75000} color="info" icon={'ant-design:plus-circle-filled'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Sevkiyat" total={250} color="warning" icon={'ant-design:menu-unfold-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Yardım Talebi" total={234} color="error" icon={'ant-design:notification-outlined'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Erzak Giriş ve Çıkışları"
              subheader="(+43%) geçen haftadan beri"
              chartLabels={[
                '02/06/2023',
                '02/07/2023',
                '02/08/2023',
                '02/09/2023',
                '02/10/2023',
                '02/11/2023',
                '02/12/2023',
                '02/13/2023',
                '02/14/2023',
                '02/15/2023',
                '02/16/2023',
              ]}
              chartData={[
                {
                  name: 'Erzak Miktarı',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Erzak Çıkışı',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Erzak Girişi',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Kahramanmaraş Depo Doluluk Oranı"
              chartData={[
                { label: 'Dolu', value: 76 },
                { label: 'Boş', value: 24 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}> 
            <AppNewsUpdate
              title="Haber Akışı"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: newsData[index].newsTitle,
                description: newsData[index].text,
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Sevkiyat Listesi"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Pazarcık, 150 Koli Kuru Gıda Yardımı Çıktı',
                  'Nurhak, 50 Koli Konserve Yardımı Çıktı',
                  '100 Koli Su Depoya Alındı',
                  'Göksu, 50 Adet Isıtıcı Yardımı Çıktı',
                  '255 Koli Konserve Depoya Alındı',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Planlanan Yardımlar"
              list={[
                { id: '1', label: 'Afşin, 250 Koli Konserve' },
                { id: '2', label: 'Pazarcık, 150 Koli Kuru Gıda' },
                { id: '3', label: 'Göksu, 500 Ekmek' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
