import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------
const plaka = ['06 AB 2290','06 AB 2291','06 AB 2292','06 AB 2293','06 AB 2294']

const users = [...Array(5)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: plaka[index],
  company: sample([
    'Havelsan Ankara',
    'Havelsan İstabul',
    'AFAD Ankara',

  ]),
  isVerified: sample(['Su 400Lt', 'Kuru Gıda 100Koli','Giyecek 150 koli']),
  status: sample(['Yolda', 'Geldi']),
  role: sample([
    'Maraş AFAD Depo',
    'Maraş Kızılay Depo',
    'ASKİ Erzak Depo',

  ]),
}));

export default users;
