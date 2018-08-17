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

const Contact = () => {
    return (
        <div>            
            <List >
                <ListItem className="listeItem item_contact">
                    <Avatar>
                        <Business />
                    </Avatar>
                    <ListItemText primary="Salon de coiffure" />
                </ListItem>
                <Divider inset component="li" light />
                <ListItem className="listeItem" >
                    <Avatar>
                        <Adresse />
                    </Avatar>
                    <ListItemText primary="100 rue Solphe, Lille 59800" />
                </ListItem>
                <Divider inset component="li" light />
                <ListItem className="listeItem item_contact">
                    <Avatar>
                        <Tel />
                    </Avatar>
                    <ListItemText primary="06.06.06.06.06" />
                </ListItem>
                <Divider inset component="li" />
                <ListItem className="listeItem">
                    <Avatar>
                        <Mail />
                    </Avatar>
                    <ListItemText primary="mail@mail.com"/>
                </ListItem>
                <Divider inset component="li" light />
            </List>
        </div>
    )
}

export default Contact
