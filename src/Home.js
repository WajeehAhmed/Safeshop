import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <div className = 'home'>
            <img className = 'home__image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>
           <div className="home__row">
           <Product 
                id = '1'
                key = '1'
                title = 'Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-Year Rescue Service (STGX2000400)'
                price = {59.99}
                rating = {4}
                image = 'https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL.jpg'
            />
            <Product 
                id = '2'
                key = '2'
                title = 'Beelink T34-M Mini Pc Windows 10 Pro,6GB DDR3 128GB SSD Intel Celeron N3450,18W Mini Desktop Computer HD Graphics 4K Dual Output Gigabit Ethernet 2.4/5G Wi-Fi BT-4.2'
                price = {168.60}
                rating = {5}
                image = 'https://m.media-amazon.com/images/I/51wKa3FBw-L._AC_UL320_.jpg'
            />
            
           </div>


           <div className="home__row">
           <Product 
                id = '3'
                key = '3'
                title = 'Logitech B100 Corded Mouse – Wired USB Mouse for Computers and laptops, for Right or Left Hand Use, Black'
                price = {9.99}
                rating = {4}
                image = 'https://images-na.ssl-images-amazon.com/images/I/81Ro52MSyxL._AC_UL160_SR160,160_.jpg'
            />
            <Product 
                id = '4'
                key = '4'
                title = 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver'
                price = {110.60}
                rating = {5}
                image = 'https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg'
            />
            <Product 
                id = '5'
                key = '5'
                title = 'AMBOLOVE Mini Wireless Keyboard,Gaming Keyboard with Rocker Cap Backlit USB Keyboard with Touchpad,Rechargeable Handheld Remote Control for Laptop/PC/Windows/Mac/Smart TV/Xbox/PS3'
                price = {11.99}
                rating = {4}
                image = 'https://m.media-amazon.com/images/I/81fiDxKrsVL._AC_UY218_.jpg'
            />
            </div>

            <div className="home__row">
           <Product 
                id = '6'
                key = '6'
                title = 'Sceptre Curved 27" 75Hz LED Monitor HDMI VGA Build-In Speakers, EDGE-LESS Metal Black 2019 (C275W-1920RN)'
                price = {166.99}
                rating = {5}
                image = 'https://images-na.ssl-images-amazon.com/images/I/914W%2BOtJQ-L._AC_SX679_.jpg'
            />
            </div>            
           
        </div>
    )
}

export default Home
