import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const StyledTableCell = withStyles(()=>({
    head:{
        color: 'white',
        background: 'black',
        textAlign: 'center'
    }, 
    body:{
        fontsize: 14,
    },
}))(TableCell);

function TablaMaterial(props){
    return(
        <TableContainer>
            <Table>
            <TableHead>
                <TableRow>
                    <StyledTableCell>Pagina</StyledTableCell>
                    <StyledTableCell>Cultivos</StyledTableCell>
                    <StyledTableCell>Pedidos</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.data.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell><img src={elemento.imagen} width="35px" height="25px"/>{"  "}{elemento.pagina}</TableCell>
                        <TableCell align="center">{elemento.cultivos}</TableCell>
                        <TableCell align="center">{elemento.pedidos}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TablaMaterial;