import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'Depo No', width: 90 },

  { field: 'statu', headerName: 'Statu', width: 80 },
  { field: 'depoTuru', headerName: 'Depo Türü', width: 120 },
  { field: 'depoAdi', headerName: 'Depo Adı', width: 130 },
  { field: 'depoAddress', headerName: 'Depo Adres', width: 140 },

];



export default function DataTable(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}