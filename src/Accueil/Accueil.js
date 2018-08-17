import React, { Component } from 'react'
import Prestation from './Prestation'
import Presentation from './Presentation'
import Produits from './Produits'
import Informations from './Informations'

class Accueil extends Component {
    render () {
        return (
            <div>
               <Presentation></Presentation> 
               <Prestation></Prestation>
               <Produits></Produits>
               <Informations></Informations>
            </div>
        )
    }
}

export default Accueil