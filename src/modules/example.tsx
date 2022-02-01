import { useEffect, useState } from "react";
import { useHeroes } from "../hooks/useHeroes";
import { Champion } from "../models/Champion";


const url = `http://ddragon.leagueoflegends.com/cdn/12.2.1/data/pt_BR/champion.json`;
let imgUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";

export const Example = () => {

    const [heroes, setHeroes] = useState<Champion[]>([]);

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

    console.log(heroes);

    return (
        <div>
            {heroes?.map(hero => (
                <div key={hero.key}>
                    <img
                        src={`${imgUrl}${hero.id}_0.jpg`}
                        alt={hero.name}
                    />
                    <p >{hero.name}</p>
                </div>

            ))}
        </div>
    );
}
