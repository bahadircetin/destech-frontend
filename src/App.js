import './App.css';

import DeliveryCreate from './Views/DeliveryCreate';
const data = [
  { id: 1,statu :'Acil', depoTuru:'Kuru Gıda', depoAdi: 'Merkez Kızılay', depoAddress: 'Merkez/K.Maraş'},

];
function App() {
  return (
    <div>
    
      <DeliveryCreate ></DeliveryCreate>
    </div>
  );
}

export default App;
