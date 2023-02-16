import './App.css';
import { useEffect, useState } from "react";


import DeliveryCreate from './Views/DeliveryCreate';
import DataDisplay from './Views/DataDisplay';

const dataDepo = [
  { id: 1,statu :'Acil', depoTuru:'Kuru Gıda', depoAdi: 'Merkez Kızılay', depoAddress: 'Merkez/K.Maraş'},

];


const columnsDepo = [
  { field: 'id', headerName: 'Depo No', width: 90 },
{ field: 'capacity', headerName: 'Kapasite', width: 80 },
{ field: 'stock_status', headerName: 'Doluluk %', width: 80 },
{ field: 'type', headerName: 'Depo Türü', width: 120 },
{ field: 'name', headerName: 'Depo Adı', width: 180 },
{ field: 'city', headerName: 'Şehir', width: 130 },
{ field: 'address', headerName: 'Depo Adres', width: 320 },

];

const columnsSevkiyat = [
{ field: 'id', headerName: 'Sevkiyat No', width: 90 },
{ field: 'trackID', headerName: 'Tır Plaka', width: 90 },
{ field: 'statu', headerName: 'Statu', width: 80 },
{ field: 'startingPoint', headerName: 'Çıkış Yeri', width: 120 },
{ field: 'destinationPoint', headerName: 'Varış Yeri', width: 130 },
{ field: 'loadType', headerName: 'Yük Türü', width: 140 },
{ field: 'loadAmount', headerName: 'Yük Miktarı', width: 140 },


];
const dataSevkiyat = [
  { id: 1,statu :'Yolda', trackID:'Kuru Gıda', startingPoint: 'Merkez Kızılay', destinationPoint: 'Merkez/K.Maraş',loadType:'Kuru Gıda'},

];
function App() {

  const [ storages, setStorages ] = useState([]);
 
 useEffect(() => {
   const fetchata = async () => {
       const response = await fetch(
         'http://10.185.0.79:8080/api/v1/storage');
          const data = await response.json();
          setStorages( data )
   }
    fetchata();
}, []);
  return (
    <div>
    
      <DeliveryCreate ></DeliveryCreate>
      <DataDisplay data={storages} columns ={columnsDepo}></DataDisplay>
      <DataDisplay data={dataSevkiyat} columns ={columnsSevkiyat}></DataDisplay>


    </div>
  );
}

export default App;
