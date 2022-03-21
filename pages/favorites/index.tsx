import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon';
import NoFavorites from '../../components/ui/NoFavorites';
import { localFavorites } from '../../utils';

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Favoritos | PokeApi">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
