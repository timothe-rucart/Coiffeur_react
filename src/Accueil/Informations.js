import React from 'react'
import Contact from './Contact'
import Grid from '@material-ui/core/Grid';
import Horaires from './Horaires';
import './../css/Informations.css'

const Informations = () => {
    return (
        <div className="container">
            <Grid container spacing={24}>
                <Grid  item md={12}>
                    <h1 className='h1_informations'>Contact et horaires</h1>
                </Grid>
                <Grid  item sm={12} md={6}>
                    <Contact></Contact>
                </Grid>
                <Grid  item sm={12} md={6}>
                    <Horaires></Horaires>
                </Grid>
            </Grid>
        </div>
    )
}

export default Informations