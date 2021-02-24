import React from 'react';
import Utama from './Component/Utama';
import { Link } from "react-router-dom";

class App extends React.Component {
  render(){
    return(
      <div>
        <div>
          <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
            <div class="container">
              <a class="navbar-brand" href="#"> NAVBAR </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                      <Link to="/" class="nav-link">Beranda</Link>
                    </li>
                    
                    <li class="nav-item active">
                      <Link to="/TentangSaya" class="nav-link">About</Link>
                    </li>
                    
                    <li class="nav-item active">
                      <Link to="/Karya" class="nav-link">Karya</Link>
                    </li>
                    
                    <li class="nav-item active">
                      <Link to="/Kontak" class="nav-link">Kontak</Link>
                    </li>
                  </ul>
                </div>
            </div>
          </nav>
          <Utama />
        </div>
      </div>
    );
  }
}

export default App;