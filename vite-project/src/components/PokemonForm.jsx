import { useState, useContext } from "react";
import PokemonContext from '../context/PokemonContext'


const PokemonForm = () => {
    const { setAllPokemon } = useContext(PokemonContext)
    const [hp, setHp] = useState('');
    const [name, setName] = useState('');
    const [frontImage, setFrontImage] = useState('');
    const [backImage, setBackImage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault()
        //if front and back was named the same we would not need to front : frontImage,back:backImage
        const inputNamePokemon = { hp, name, front: frontImage, back: backImage }
        const response = await fetch('http://localhost:4000/pokemon', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputNamePokemon),
        });


        //waits for data
        const data = await response.json()
        //previousPokemon initialized to be elements of setAllPokemon which is a context so we make global  ...previousPokemon,data through context
        setAllPokemon(previousPokemon => [...previousPokemon, data])
    }


    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value) } />
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={hp} onChange={(e) => setHp(e.target.value)} />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={frontImage} onChange={(e) => setFrontImage(e.target.value)} />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={backImage} onChange={(e) => setBackImage(e.target.value)} />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
