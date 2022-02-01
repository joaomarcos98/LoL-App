import { useEffect, useState } from "react";
import { HeroCard, HeroList } from "../components";
import { useHeroes } from "../hooks/useHeroes";
import { Hero } from "../models/Champion";

import useFavorite from "../store/useFavorite";

import { Container, Content } from "./styles";


const url = `http://ddragon.leagueoflegends.com/cdn/12.2.1/data/pt_BR/champion.json`;

export const Example = () => {

    const favHeroes = useFavorite(state => state.favorites);
    const addFavHeroes = useFavorite(state => state.addFavorite);
    const RemoveFavHeroes = useFavorite(state => state.removeFavorite);

    console.log(favHeroes);

    const [heroes, setHeroes] = useState<Hero[]>([]);

    const { data, isLoading, error } = useHeroes(url);

    useEffect(() => {
        const res = data?.data;
        let array = [];
        if (res) {
            for (let i in res) {
                array.push(res[i]);
                addFavHeroes(res[i])
            }
            setHeroes(array);
        }
        RemoveFavHeroes(array[1])
    }, [data]);

    return (
        <Container>
            <Content>
                <HeroList>
                    {heroes?.map(hero => (
                        <HeroCard hero={hero} key={hero.id} />
                    ))}
                </HeroList>
            </Content>
        </Container>
    );
}
