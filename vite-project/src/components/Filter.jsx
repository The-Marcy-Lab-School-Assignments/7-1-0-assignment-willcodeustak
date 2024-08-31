// TODO: Make this a controlled component. On each stroke of the key, it should filter the displayed pokemon
import { useContext, useState, useEffect } from 'react'
import PokemonContext from '../context/PokemonContext'
import PokemonCollection from './PokemonCollection'

//useEffect on filter , every  input  given  //dependencies 
//create states where you feel more comfortable 


const Filter = () => {
    const [filter, setFilter] = useState('');
    const {setPokeFiltered, allPokemon} = useContext(PokemonContext)

    useEffect(() => {
        setPokeFiltered(allPokemon?.filter((pokemon) => 
                pokemon?.name?.toLowerCase().startsWith(filter.toLowerCase())))

    }, [filter]);

  
    return (
        <div className="ui search">
            <div className="ui icon input">
                <input type="text"  onChange={(e) => setFilter(e.target.value)} value={filter} className="prompt" placeholder="Search by Name..." />
                <i className="search icon" />
            </div>
        </div>
    )
}

export default Filter
