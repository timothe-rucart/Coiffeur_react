import React from 'react'
import Grid from '@material-ui/core/Grid';
import Linkedin from './photos/linkedin.png'
import Instagram from './photos/Instagram.png'
import Facebook from './photos/facebook.png'
import Twitter from './photos/twitter.png'

const Footer = () => {
    return (
        <div className="footer" >
            <Grid container spacing={24}>
                <Grid item md={12}>
                    <h3 className="h3_footer">Rejoignez-nous !</h3>
                </Grid>
            </Grid>
            <div className="container_reseaux">
                <Grid container spacing={24}>
                    <Grid item xs={12} md={3}>
                        <a href="#" target="_blank" title="Lien vers la page Linkedin"><img class="reseaux" alt="lien vers la page Linkedin" src ={Linkedin} /></a>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <a href="#" target="_blank" title="Lien vers la page Instagram"><img class="reseaux" alt="lien vers la page Instagram" src ={Instagram} /></a>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <a href="#" target="_blank" title="Lien vers la page Facebook"><img class="reseaux" alt="lien vers la page Facebook" src ={Facebook} /></a>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <a href="#" target="_blank" title="Lien vers la page Twitter"><img class="reseaux" alt="lien vers la page Twitter" src ={Twitter} /></a>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
