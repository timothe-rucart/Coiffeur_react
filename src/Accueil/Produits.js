import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Shampoing from './../photos/shampooing.jpg';
import Shampoing3 from './../photos/shampooing3.jpg';
import Shampoing2 from './../photos/shampoing2.jpg';
const componentName = () => {
    return (
        <div className="produits container">
            <h1>Nos produits, shampoings et soins</h1>
            <Grid container spacing={16}>
                <Grid item sm={12} md={4}>
                    <Card>
                        <CardMedia                
                        image={Shampoing}
                        style={{ height: 0,
                            paddingTop: '100%' }}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Card>
                        <CardMedia                
                        image={Shampoing2}
                        style={{ height: 0,
                            paddingTop: '100%' }}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={12} md={4}>
                    <Card>
                        <CardMedia                
                        image={Shampoing3}
                        style={{ height: 0,
                            paddingTop: '100%' }}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Lizard
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>            
        </div>
    )
}

export default componentName