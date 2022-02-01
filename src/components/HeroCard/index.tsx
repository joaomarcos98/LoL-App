import { Hero } from "../../models/Champion";
import { HeroCardStyle } from "./styled";

let imgUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

interface HeroCardProps {
    hero: Hero
}

export const HeroCard = ({ hero }: HeroCardProps) => {
    return (
        <HeroCardStyle>
            <img
                src={`${imgUrl}${hero.id}_0.jpg`}
                alt={hero.name}
            />
            <p >{hero.name}</p>
        </HeroCardStyle>
    )
}

