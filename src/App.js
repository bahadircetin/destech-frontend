import './App.css';

import DeliveryCreate from './Views/DeliveryCreate';
import DataDisplay from './Views/DataDisplay';

const data = [
  { id: 1,statu :'Acil', depoTuru:'Kuru Gıda', depoAdi: 'Merkez Kızılay', depoAddress: 'Merkez/K.Maraş'},

];

const columnsDepo = [
  { field: 'id', headerName: 'Depo No', width: 90 },

{ field: 'statu', headerName: 'Statu', width: 80 },
{ field: 'depoTuru', headerName: 'Depo Türü', width: 120 },
{ field: 'depoAdi', headerName: 'Depo Adı', width: 130 },
{ field: 'depoAddress', headerName: 'Depo Adres', width: 140 },

];

const columnsSevkiyat = [
{ field: 'id', headerName: 'Sevkiyat No', width: 90 },
{ field: 'trackID', headerName: 'Plaka No', width: 90 },
{ field: 'statu', headerName: 'Statu', width: 80 },
{ field: 'depoTuru', headerName: 'Çıkış Yeri', width: 120 },
{ field: 'depoAdi', headerName: 'Varış Yeri', width: 130 },
{ field: 'depoAddress', headerName: 'Yük Türü', width: 140 },

];
function App() {
  return (
    <div>
    
      <DeliveryCreate ></DeliveryCreate>
      <DataDisplay data={data} columns ={columnsDepo}></DataDisplay>
      <DataDisplay data={data} columns ={columnsSevkiyat}></DataDisplay>

    </div>
  );
}

export default App;
