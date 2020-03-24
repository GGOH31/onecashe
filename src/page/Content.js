import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom' 
import Darshop from './Darshop'
import Widjet from './Widjet'

export default class Content extends Component {



    render() {
        return (
    <Switch>
        <Route exact path="/" component={Darshop}/>
        <Route  path="/Darshop" component={Darshop}/>
        <Route  path="/Widjet" component={Widjet}/>

    </Switch>

        )
    }
}
