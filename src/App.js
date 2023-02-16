import './App.css';

import DepoDisplay from './Views/DepoDisplay';
import CircleIcon from '@mui/icons-material/Circle';
const data = [
  { id: 1,statu :'Acil', depoTuru:'Kuru Gıda', depoAdi: 'Merkez Kızılay', depoAddress: 'Merkez/K.Maraş'},

];
function App() {
  return (
    <div>
    
      <DepoDisplay data={data}></DepoDisplay>
    </div>
  );
}

export default App;
