import React, { Component } from 'react'
import Prestation from './Prestation'
import Presentation from './Presentation'
import Produits from './Produits'

class Accueil extends Component {
    render () {
        return (
            <div>
               <Presentation></Presentation> 
               <Prestation></Prestation>
               <Produits></Produits>
            </div>
        )
    }
}

export default Accueil