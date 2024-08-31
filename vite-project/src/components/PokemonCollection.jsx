import PokemonCard from './PokemonCard';
import { useContext } from 'react'
import PokemonContext from '../context/PokemonContext'
// TODO: import the PokemonContext and useContext
const PokemonCollection = () => {

    // TODO: Replace this to get the pokemon from PokemonContext
    // const allPokemon = []; original
    const {allPokemon, pokeFiltered} = useContext(PokemonContext);

    console.log({pokeFiltered, allPokemon})

    const list = pokeFiltered?.length > 0 ? pokeFiltered : allPokemon;

    return (
        <div className="ui six cards">
            {/* destructure allPokemon .map'ing it into a new array consisting of "pokemon/elements" of allPokemon */}
            {list?.map(pokemon => <PokemonCard key={pokemon.id} name={pokemon.name} hp={pokemon.hp} frontImage={pokemon.front} backImage={pokemon.back} />)}
            {/* filter ? */}
        </div>
    )
}

export default PokemonCollection