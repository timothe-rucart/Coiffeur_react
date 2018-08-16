import React from 'react'
import Photo from './../photos/photo1.jpg'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './../css/Prestation.css'

const Prestation = () => {
    return (
        <div className="container">        
            <Grid container spacing={0}>
                <Grid className="container1" item sm={12} md={6}>                    
                    <img className="image" alt="photo d'un modèle coiffure" src={Photo}/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <h1 className="h1_prestation">Nos prestations</h1>
                    <p>
                        Lorem ipsum dolor sit amet, nullam in donec eleifend rutrum at quam, et nullam lectus massa. Turpis convallis quis molestie, etiam urna cursus praesent, a libero, cursus erat turpis, neque morbi at fusce venenatis eget erat. Faucibus justo cursus neque id est, consectetur in mi elit ac etiam, porttitor donec elit odio dictumst lectus, massa in, lacus ac proin.
                    </p>
                    <Button className="button_prestation" href="#" >
                        En savoir plus...
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Prestation