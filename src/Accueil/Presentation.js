import React from 'react'
import Photo from './../photos/photo1.jpg'
import Grid from '@material-ui/core/Grid';
import './../css/Presentation.css';

const Presentation = (props) => {
    
    const {post} = props

    return (
        <div className="presentation container">            
            <Grid container spacing={0}>
                <Grid className="container1" item sm={12} md={6}>
                <h1 className="h1_presentation">Présentation</h1>
                    <p>
                        Lorem ipsum dolor sit amet, nullam in donec eleifend rutrum at quam, et nullam lectus massa. Turpis convallis quis molestie, etiam urna cursus praesent, a libero, cursus erat turpis, neque morbi at fusce venenatis eget erat. Faucibus justo cursus neque id est, consectetur in mi elit ac etiam, porttitor donec elit odio dictumst lectus, massa in, lacus ac proin.
                    </p>
                </Grid>
                <Grid className="griid" item sm={12} md={6}>
                    <img className="image" alt="photo d'un modèle coiffure" src={Photo}/>
                </Grid>
            </Grid>            
        </div>
    )

}

export default Presentation