import React from 'react';
import './index.css'
import logo from '../../assets/pokeapi_256.png'
import FavoriteContext from '../../context';

const {useContext} = React;


const Navbar = () => {
    const {favortiePokemons} = useContext(FavoriteContext); 

    return (
        <nav>
            <picture>
                <a href='index.html'> <img src={logo} alt="logo pokeapi" className='logo'/> </a>
            </picture>
            <div className='favoritos'> 🤍 {favortiePokemons.length} </div>
        </nav>
    )
}
export default Navbar;