import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './../css/Navbar.css'

class NavBar extends Component {

    state = {
        value: 2,
    };
    
    handleChange = (event, value) => {
        this.setState({ value });
    };
    
    render() {
        return (
            <Paper className="navBar">
                <Tabs
                    fullWidth
                    centered
                    value={this.state.value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                    
                >
                <Tab label="Accueil"  />
                <Tab label="Photos" />
                <Tab label="Tarifs" />
                <Tab label="Contact" />
            </Tabs>
          </Paper>
        );
      }
}

export default NavBar