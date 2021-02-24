import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './Beranda'
import TentangSaya from './TentangSaya'
import Karya from './Karya'
import Kontak from './Kontak'

const Utama = () => (
    <switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/TentangSaya" component={TentangSaya} />
        <Route path="/Karya" component={Karya} />
        <Route path="/Kontak" component={Kontak} />
    </switch>

)

export default Utama;