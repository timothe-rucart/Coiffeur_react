import React, { Component } from 'react'
import Prestation from './Prestation'
import Presentation from './Presentation'

class Accueil extends Component {
    render () {
        return (
            <div>
               <Presentation></Presentation> 
               <Prestation></Prestation>
            </div>
        )
    }
}

export default Accueil