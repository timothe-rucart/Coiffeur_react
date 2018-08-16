import React from 'react'
import Photo from './../photos/photo1.jpg'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './../css/Prestation.css'

const Prestation = () => {
    return (
        <div className="prestation container">
            <Grid container spacing={0}>
                <Grid item xs={12} sm={16}>
                    <h1>Nos prestations</h1>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img alt="photo d'un modèle coiffure" src={Photo}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <p>
                        Lorem ipsum dolor sit amet, nullam in donec eleifend rutrum at quam, et nullam lectus massa. Turpis convallis quis molestie, etiam urna cursus praesent, a libero, cursus erat turpis, neque morbi at fusce venenatis eget erat. Faucibus justo cursus neque id est, consectetur in mi elit ac etiam, porttitor donec elit odio dictumst lectus, massa in, lacus ac proin.
                    </p>
                    <Button variant="outlined" href="#" >
                        En savoir plus...
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Prestation