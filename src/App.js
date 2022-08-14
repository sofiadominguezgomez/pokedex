import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Searchbar from './components/Searcbar'
import Pokedex from './components/Pokedex'
import { getPokemonData, getPokemons, searchPokemon } from './api';
import { FavoriteProvider } from './context';

const { useState, useEffect } = React;
const localStorageKey = "favorite_pokemon";

export default function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true)
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(27, 27*page);
      const promises = data.results.map( async (pokemon) => {
          return await getPokemonData(pokemon.url);
      } );
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal( Math.ceil(data.count / 27) );
      setNotFound(false);
    } catch (e) {
      console.log(e)
    }
  };

  const loadFavPokemons = () => {
    const pokemons =
    JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
    setFavorites(pokemons);
  };

  useEffect( ()=> {
    loadFavPokemons();
  },  [] )

  useEffect( () => {
    if(!searching){
      fetchPokemons();
    }
  }, [page] );

  const updateFavoritePokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = favorites.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey,
      JSON.stringify(updated)
      );
  }

  const onSearch = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true)
      setLoading(false)
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    
    setLoading(false);
    setSearching(false);
  }

  return (
    <FavoriteProvider value={ {favortiePokemons:favorites,
    updateFavoritePokemons: updateFavoritePokemons
    } }>
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Searchbar onSearch={onSearch} />
        {
          notFound ? (
            <div className='not-found-message'> No hay resultados. </div>
          ) : (
            <Pokedex loading={loading} pokemons={pokemons} page={page} setPage={setPage} total={total} /> 
          )
        }
        
      </main>
    </div>
    </FavoriteProvider>

  );
}


