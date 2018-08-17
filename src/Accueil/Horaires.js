import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Tel from '@material-ui/icons/Call';
import Adresse from '@material-ui/icons/LocationOn';
import Business from '@material-ui/icons/Business';
import Mail from '@material-ui/icons/AlternateEmail';
import Divider from '@material-ui/core/Divider';

const Horaires = () => {
    return (
        <div className="horaires">
            <List>
                <ListItem className="listeItem item_contact">                    
                    <ListItemText primary="Mardi - Vendredi: 9h-19h" />
                </ListItem>
                <Divider inset component="li" light />
                <ListItem className="listeItem" >                    
                    <ListItemText primary="Mercredi - Jeudi: 09h-18h30" />
                </ListItem>
                <Divider inset component="li" light />
                <ListItem className="listeItem item_contact">
                    <ListItemText primary="Samedi: 9h-17h" />
                </ListItem>
                <Divider inset component="li" />
                <ListItem className="listeItem">
                    <ListItemText primary="Dimanche - Lundi: Fermé"/>
                </ListItem>
                <Divider inset component="li" light />
            </List>
        </div>
    )
}

export default Horaires