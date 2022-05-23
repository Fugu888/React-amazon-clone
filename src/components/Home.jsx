import React from 'react';
import banner from '../img/banner.jpg';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <>
        
        <div className="home">
            <img className="home__image" src={banner} alt="home-banner" />
            
            
            <div style={{"margin-top": "-280px"}} className="home__row">
                <Product id={1} image="https://images-na.ssl-images-amazon.com/images/I/41PQ-nw2kzL._AC_SR400,600_.jpg" title="OPPO A94 Smartphone 5G, 173g, Display 6.43 AMOLED" price={259.00} rating={4}/>
                <Product id={2} image="https://m.media-amazon.com/images/I/91FRrXaqoeL._AC_SY230_.png" title="Oral-B iO9 Spazzola per denti elettrico con manico ricaricabile, tecnologia magnetica" price={237.00} rating={4}/>
                <Product id={3} image="https://images-eu.ssl-images-amazon.com/images/I/718oe9Av9lL._AC_UL450_SR450,320_.jpg" title="Lavazza A Modo Mio 128 Capsule Caffè Crema e Gusto, 8 Confezioni da 16 Capsule, Miscela Selezionata, Gusto Intenso" price={39} rating={4}/>
            </div>

            <div className="home__row">
                <Product id={4} image="https://images-eu.ssl-images-amazon.com/images/I/81LMGMT7OQL._AC_UL450_SR450,320_.jpg" title="HP 305 Nero 3YM61AE Cartuccia Originale HP, Nero" price={12.95} rating={3}/>
                <Product id={5} image="https://images-eu.ssl-images-amazon.com/images/I/71YP+ui15FL._AC_UL450_SR450,320_.jpg" title="Crucial MX500 500GB CT500MX500SSD1 SSD Interno-fino a 560 MB/s, 3D NAND, SATA, 2.5 Pollici, Metallico" price={57.44} rating={5}/>
                <Product id={6} image="https://images-eu.ssl-images-amazon.com/images/I/616J-uvcdMS._AC_UL604_SR604,400_.jpg" title="INIU Cavo USB C, [0,5+2+2m] 3,1A QC3,0 Cavo USB C Ricarica Rapida, Lega Intrecciato in Nylon Cavo Type C" price={6.99} rating={2}/>
                <Product id={7} image="https://m.media-amazon.com/images/I/81w-WKNqqqL._AC_UL320_.jpg" title="Corsair CX650F RGB Alimentatore ATX Interamente Modulare 80 Plus Bronze, 650 W" price={256} rating={3}/>
            </div>
        
        </div>
        </>
    );
}

export default Home;