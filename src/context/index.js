import React from 'react';

const FavoriteContext = React.createContext({
    favortiePokemons: [],
    updateFavoritePokemons: (id) => null
})
export const FavoriteProvider = FavoriteContext.Provider;
export default FavoriteContext;