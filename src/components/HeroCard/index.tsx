import { Hero } from "../../models/Champion";
import { HeroCardStyle } from "./styled";

import favoriteEmpty from "../../ui/assets/favorite_border.svg"
import favoriteFull from "../../ui/assets/favorite.svg"
import useFavorite from "../../store/useFavorite";


interface HeroCardProps {
    hero: Hero
}

let imgUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

export const HeroCard = ({ hero }: HeroCardProps) => {

    const favoritesHeroes = useFavorite(state => state.favorites);
    const addFavoriteHero = useFavorite(state => state.addFavorite);
    const removeFavoriteHero = useFavorite(state => state.removeFavorite);

    const heroIsAlreadyFavorite = !!favoritesHeroes.find(item =>
        item.id === hero.id)

    const handleFavoriteHero = () => {
        if (heroIsAlreadyFavorite) {
            removeFavoriteHero(hero);
        } else {
            addFavoriteHero(hero);
        }
    }

    const numUrl = ("0000" + hero.key).slice(-4);
    const url = `https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${numUrl}/ability_${numUrl}_Q1.webm`

    return (
        <HeroCardStyle>
            <img src={`${imgUrl}${hero.id}_0.jpg`} alt={hero.name} />
            <h2 >{hero.name}</h2>
            <div className="favorite">
                {
                    heroIsAlreadyFavorite
                        ? <img src={favoriteFull} alt="desfavoritar" onClick={handleFavoriteHero} />
                        : <img src={favoriteEmpty} alt="favoritar" onClick={handleFavoriteHero} />
                }
            </div>
            <h4>{hero.title}</h4>
        </HeroCardStyle>
    )
}

