import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import Searchbar from '../../components/Searchbar/Searchbar';
import View from '../View/View';


class App extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
    return (
    <div className="">
        <Nav />
        <Searchbar />
        <View />
    </div>
    )
}
}




export default App;