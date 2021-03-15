import React from 'react'
import logo from './cover.png'
import "./Header.css"
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBacketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from './StateProvider'
import { auth } from './firebase';

const Header = () => {
    const login = () => {
        if (user) {
            auth.signOut()
        }
    }
    const [{ basket,user }] = useStateValue();
    return (
        <nav className = "header">
           <Link to="/">
            <img className = "header__logo" src={logo} alt="logo"/>
           </Link> 
           <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className = "header__searchIcon"/>
           </div>
           <div className = "header__nav">
                <Link className="header__link" to={!user && "/login"}>
                    <div onClick = {login} className="header__option">
                        <span className = "header__optionLineOne">Hello {user?.email}</span>
                        <span className = "header__optionLineTwo">{user ? "Sign Out":"Sign In"}</span>
                    </div>
                </Link>
            
            
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className = "header__optionLineOne">Returns</span>
                        <span className = "header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
            
           
                <Link className="header__link" to="/">
                    <div className="header__option">
                        <span className = "header__optionLineOne">Your</span>
                        <span className = "header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link className="header__link" to = "/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBacketIcon />
                        <span className = "header__optionLineTwo header__backetCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>    
        </nav>
        
    )
}

export default Header
