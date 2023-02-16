import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




import { Row } from 'reactstrap';





export default function DeliveryCreate(props) {
  return (
<Container>
<Stack direction="column" spacing = {2}>

        <Typography variant="h4" component="h2" color="blue">
             Sevkiyat Oluştur
        </Typography >
            <TextField id = "trackId" label="Tır Plaka" variant="outlined" />
            <TextField id = "startingPoint" label="Çıkış Yeri" variant="outlined" />
            <TextField id = "destinationPoint" label="Varış Yeri" variant="outlined" />
            <TextField id = "destinationPoint" label="Yük Türü" variant="outlined"/>

            <Stack direction="column"   alignItems="flex-end" >     
               <Button variant="outlined"  >Sevkiyat Oluştur</Button>
            </Stack>

        </Stack>


</Container>
  );
}