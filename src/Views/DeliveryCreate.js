import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';





import { useState } from 'react';
import { SettingsApplications, SettingsInputSvideoSharp } from '@mui/icons-material';





export default function DeliveryCreate(props) {


    const [trackID, setTrackId] = useState('');
    const [startingPoint, setStartingPoint] = useState('');
    const [destinationPoint, setDestinationPoint] = useState('');
    const [loadType, setLoadType] = useState('');
    const [loadAmount, setLoadAmount] = useState('');

    const handleSubmit = (e) => {
    const reqBody = {trackID,startingPoint,destinationPoint,loadType,loadAmount}
    console.log(reqBody)

}
 

  return (
<Container>
<Stack direction="column" spacing = {2}>

        <Typography variant="h4" component="h2" color="blue">
             Sevkiyat Oluştur
        </Typography >
            <TextField id = "trackId" label="Tır Plaka" variant="outlined"  onChange={(e) => setTrackId(e.target.value)}/>
            <TextField id = "startingPoint" label="Çıkış Yeri" variant="outlined" onChange={(e) => setStartingPoint(e.target.value)}/>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Varış Yeri</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="destinationPointSelect"

                onChange={(e) => setDestinationPoint(e.target.value)}
                label="Varış Yeri"            >
                <MenuItem value={1}>Kızılay Ecza Deposu</MenuItem>
                <MenuItem value={2}>KSÜ Ana Depo</MenuItem>
                <MenuItem value={3}>AFAD Su Deposu</MenuItem>
            </Select>
            </FormControl>
            <TextField id = "loadType" label="Yük Türü" variant="outlined" onChange={(e) => setLoadType(e.target.value)}/>
            <TextField id = "loadAmount" label="Yük Miktarı" variant="outlined"  onChange={(e) => setLoadAmount(e.target.value)}/>


            <Stack direction="column"   alignItems="flex-end" >     
               <Button variant="outlined" onClick={handleSubmit}  >Sevkiyat Oluştur</Button>
            </Stack>

        </Stack>


</Container>
  );
}