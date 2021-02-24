import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Beranda from './Beranda'
import Galeri from './Galeri'
import Agenda from './Agenda'

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/Galeri" component={Galeri} />
        <Route path="/Agenda" component={Agenda} />
    </Switch>
)
export default Utama;