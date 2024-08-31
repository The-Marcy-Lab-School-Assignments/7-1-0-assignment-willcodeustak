// TODO: This component should render a single pokemon's stats and image.
import { useState } from "react";

const PokemonCard = ({ name, hp, frontImage, backImage }) => {

    const [spriteToggle, setSpriteToggle] = useState(true)
    const onClickToggle = () => {
        if (spriteToggle) {
            setSpriteToggle(false)
        } else {
            setSpriteToggle(true)
        }
    }


    return (
        <div className="ui card">
            <div>
                <div className="image">
                    {/* remove "" from given src = "" code inserted {frontImage} */}
                    <img alt="pokemon name" onClick={onClickToggle} src={spriteToggle ? frontImage : backImage} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard