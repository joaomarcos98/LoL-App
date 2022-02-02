import { memo, useEffect, useState } from "react";
import { HeroCard, HeroList } from "../components";
import { Loading } from "../components/Loading";
import { LoadingCard } from "../components/LoadingCard";
import { useHeroes } from "../hooks/useHeroes";
import { Hero } from "../models/Champion";

import useFavorite from "../store/useFavorite";

import { Container, Content } from "./styles";


const url = `http://ddragon.leagueoflegends.com/cdn/12.2.1/data/pt_BR/champion.json`;

export const Example = memo(() => {

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
                                // <LoadingCard key={hero.id} />
                            ))}
                        </HeroList>
                }
            </Content>
        </Container>
    );
})
