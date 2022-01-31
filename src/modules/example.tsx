import { useGetRequest } from "../hooks/useGetRequest";


export const Example = () => {

    const url = `http://ddragon.leagueoflegends.com/cdn/12.2.1/data/pt_BR/champion.json`;

    const { data, isLoading, error } = useGetRequest(url);

    console.log(data, "data");
    console.log(isLoading, "isLoading");
    console.log(error, "error");
    
    return (
        <h1>hi</h1>
    )
}
