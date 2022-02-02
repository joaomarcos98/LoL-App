import { memo, useEffect, useState } from "react";
import { HeroCard, HeroList } from "../components";
import { Loading } from "../components/Loading";
import { useHeroes } from "../hooks/useHeroes";
import { useStorage } from "../hooks/useLocalStore";
import { Hero } from "../models/Champion";

import useFavorite from "../store/useFavorite";

import { Container, Content } from "./styles";


const url = `http://ddragon.leagueoflegends.com/cdn/12.2.1/data/pt_BR/champion.json`;

export const Example = memo(() => {

    const addFavoriteHero = useFavorite(state => state.addFavorite);

    const { getFavorites } = useStorage();
    const favorites = getFavorites();

    const [heroes, setHeroes] = useState<Hero[]>([]);

    const { data, isLoading, error } = useHeroes(url);

    useEffect(() => {
        const res = data?.data;
        let array = [];
        if (res) {
            for (let i in res) {
                array.push(res[i]);
            }
            setHeroes(array);
        }
        favorites.map(favorite =>
            addFavoriteHero(favorite))
    }, [data]);

    return (
        <Container>
            <Content>
                {
                    isLoading
                        ? <Loading />
                        : <HeroList>
                            {heroes?.map(hero => (
                                <HeroCard hero={hero} key={hero.id} />
                            ))}
                        </HeroList>
                }
            </Content>
        </Container>
    );
})
