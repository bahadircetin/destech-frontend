// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Sevkiyatlar',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  
  {
    title: 'Depolar',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'Kurtarma Personeli',
    path: '/dashboard/storage',
    icon: icon('ic_lock'),
  },

  {
    title: 'İş Makineleri',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'İş Araç Gereçleri',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Map',
    path: '/dashboard/map',
    icon: icon('ic_map'),
  },
];

export default navConfig;
