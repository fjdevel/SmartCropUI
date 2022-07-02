import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Navbar from '../components/Navbar';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css'
import GrassIcon from '@mui/icons-material/Grass';
import ForestIcon from '@mui/icons-material/Forest';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TablaMaterial';

const useStyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    iconos:{
        color: 'white'
    },
    container:{
        paddingTop: '40px',
        alignItems: 'center'
    },
    containerGrafica:{
        marginTop: '40px'
    },
    containerTabla:{
        marginTop: '40px'
    }
}));

const data = [
    {
        id: 1,
        pagina:
        "Smart Crop",
        cultivos: "Conico",
        pedidos: 10,
        imagen: require("../assets/img/smartCropLogo.png"),
    },
    {
        id: 2,
        pagina:
        "Smart Crop",
        cultivos: "Dulce",
        pedidos: 22,
        imagen: require("../assets/img/cultivos.png"),
    },
    {
        id: 3,
        pagina:
        "Smart Crop",
        cultivos: "Mixteco",
        pedidos: 12,
        imagen: require("../assets/img/pedidos.png"),
    },
];

function Dashboard(props){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Grid container spacing = {3}>
                <Grid item xs = {12}>
                    <Navbar/>
                </Grid>
                <Grid item xs = {12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<GrassIcon className={classes.iconos}/>} titulo="PAGINA" texto="SmartCrop" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs = {12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<ForestIcon className={classes.iconos}/>} titulo="CULTIVOS" texto="Cantidad de Cultivos" color="rgba(248,80,50,1)" font="white"/>
                </Grid>
                <Grid item xs = {12} sm={4} md={4} lg={4} xl={4}>
                    <CardsHeader icono={<LocalShippingIcon className={classes.iconos}/>} titulo="PEDIDOS" texto="Pedidos Realizados" color="rgba(248,80,50,1)" font="white"/>
                </Grid>

                <Grid container spacing = {1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Grid item xs = {12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="Cultivos Generados" texto="1000"/>
                    </Grid>
                    <Grid item xs = {12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="Usuarios Registrados" texto="1000"/>
                    </Grid>
                    <Grid item xs = {12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="Numeros De Cultivos Ultimo Año" texto="1000"/>
                    </Grid>
                    <Grid item xs = {12} sm={6} md={6} lg={6} xl={6}>
                        <Cards titulo="Cultivo Popular" texto="1000"/>
                    </Grid>
                </Grid>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerGrafica}>
                    <Graphics/>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className={classes.containerTabla}>
                    <TableMaterial data ={data}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dashboard;