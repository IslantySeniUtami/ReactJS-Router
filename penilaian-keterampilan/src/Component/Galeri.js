import React from 'react'
import './Galeri.css'

class Galeri extends React.Component {
    render(){
        return(
            <header class="header">
                <div class="title">
                    <h1>GALERI</h1>
                </div>

                
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="thumbnail">
                                    <img src="image/menanampohon.jpg" width="200px"></img>
                                        <div class="caption">
                                        <h3>Menanam Pohon</h3>
                                        <p class="text-justify">Menanam pohon merupakan salah satu
                                        kegiatan Adiwiyata. Karena dengan adanya pohon, lingkungan 
                                        akan menjadi asri dan terhindar dari polusi</p>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="thumbnail">
                                    <img src="image/menyiramitanaman.jpg"  width="200px"></img>
                                        <div class="caption">
                                        <h3>Menyiran Tanaman</h3>
                                        <p class="text-justify">Menyiram tanaman merupakan salah satu
                                        kegiatan Adiwiyata, dengan itu tanaman yang ada di lingkungan kita
                                        menjadi tumbuh dan subur</p>
                                        </div>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 ">
                                <div class="thumbnail">
                                    
                                    <img src="image/membersihkanselokan.jpg" width="200px" ></img>
                                        <div class="caption">
                                        <h3>Membersihkan Selokan</h3>
                                        <p class="text-justify">Membersihkan selokan merupakan salah 
                                        satu kegiatan Adwiyata. Kegiatan tersebut bertujuan agar saluran
                                        pembuangan air tidak tersumbat dan meluap kejalanan</p>
                                        </div>
                                </div>
                            </div>

                        </div>
                    </div>
            </header>
        )
    }
}

export default Galeri;