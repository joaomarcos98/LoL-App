import { Hero } from "../../models/Champion";
import { HeroCardStyle } from "./styled";


interface HeroCardProps {
    hero: Hero
}

let imgUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

export const HeroCard = ({ hero }: HeroCardProps) => {

    const numUrl = ("0000" + hero.key).slice(-4);
    const url = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${numUrl}/ability_${numUrl}_Q1.webm`

    return (
        <HeroCardStyle>
            <img
                src={`${imgUrl}${hero.id}_0.jpg`}
                alt={hero.name}
            />
            <h2 >{hero.name}</h2>
            <div>
                <h4>{hero.title}</h4>
                <span>favorite</span>
            </div>
        </HeroCardStyle>
    )
}

