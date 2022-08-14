import React, {useContext} from 'react';
import FavoriteContext, { FavoriteProvider } from '../../context';
import './styles.css'

const Pokemon = (props) => {
    const {pokemon} = props;
    const {favortiePokemons, updateFavoritePokemons} = useContext(FavoriteContext); 

    const redHeart = "❤️";
    const blackHeart = "🖤";
    const fav = favortiePokemons.includes(pokemon.name) ? redHeart : blackHeart

    const clickFav = (e) => {
        e.preventDefault();
        updateFavoritePokemons(pokemon.name);
    } 
    return(
        <div className='poke-card'>
            <picture >
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-img' />
            </picture>
            <div className='poke-card-body'>
                <div className='poke-card-top'> 
                    <h3> {pokemon.name} </h3> 
                    <div> #{pokemon.id} </div>
                </div>
                <div className='poke-card-bottom'>
                    <div className='pokemon-type'>
                        {pokemon.types.map( (type, idx) => {
                           return <div key={idx} className='pokemon-type-text' id={type.type.name} > {type.type.name} </div>
                        } ) }
                        
                    </div>
                    <button className='corazon-btn' onClick={clickFav}>
                        <div className='corazon'> {fav} </div>
                    </button>
                    
                   
                </div>
            </div>
        </div>
    )
}
export default Pokemon;