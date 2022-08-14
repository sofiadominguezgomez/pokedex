import './styles.css'
import Pokemon from '../Pokemon';
import Pagination from '../Pagination';
import Loading from '../Loading';


const Pokedex = (props) => {
    const {pokemons, page, setPage, total, loading} = props;

    const lastPage = () => {
        const nextPage = Math.max(page -1, 0);
        setPage(nextPage)
    }

    const nextPage = () => {
        const nextPage = Math.min(page +1, total);
        setPage(nextPage)
    }
    return(
        <div className='pokedex'>
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <Pagination page={page+1} totalPages={total} onLeftClick={lastPage} onRightClick={nextPage} />
            </div>
            {loading ?
                <Loading />
                :
            <div className='pokedex-cards'>
                {pokemons.map( (pokemon, idx) => {
                    return <Pokemon pokemon={pokemon} key={pokemon.name} />;
                } )}
            </div>

            }
                        
        </div>
    )
}
export default Pokedex;