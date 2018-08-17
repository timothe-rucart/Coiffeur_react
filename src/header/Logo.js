import React, { Component } from 'react'
import LogoCoiffeur from './../logo.png'
import './../css/Logo.css'
import Grid from '@material-ui/core/Grid';

class Logo extends Component {
    render () {
        return (
            <div className="header">
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={3}>
                        <p className="contact_header">
                            100 rue Solphe, <br/>
                            Lille 59800
                        </p>
                    </Grid>
                    <Grid className="logo_site" item xs={6}>
                        <img src={LogoCoiffeur} />
                    </Grid>
                    <Grid className="contact_header" item xs={12} sm={3}>
                        <p>
                            06.06.06.06.06
                        </p>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default (Logo)