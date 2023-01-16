
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Modal, Typography} from "@mui/material";

function createData(
    name: string,
    price: number,
) {
    return { name, price };
}

const rows = [
    createData('Karnet miesięczny', 100),
    createData('Uczeń do 20 lat / Senior 65+', 90),
    createData('Karnet trzytygodniowy', 90),
    createData('Karnet dwutygodniowy', 70),
    createData('Karnet tygodniowy', 50),
    createData('Wejście jednorazowe', 15),
];

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '57%',
    padding: 10,
    transform: 'translate(-50%, -50%)',
    width: 900,
    backgroundColor: '#ecf0f1',
    border: '1px solid #0A1929',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
};

export default function CustomTable({open, onClose}: any) {
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
        <TableContainer sx={style} style={{width: 500}} component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell><Typography style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Rodzaj karnetu</Typography></TableCell>
                        <TableCell align="right"><Typography style={{fontWeight: 'bold', fontSize: '1.3rem'}}>Cena</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <Typography style={{fontSize: '1.1rem'}}>{row.name}</Typography>
                            </TableCell>
                            <TableCell align="right"><Typography style={{fontSize: '1.1rem'}}>{row.price} zł</Typography></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Modal>
    </div>
    );
}