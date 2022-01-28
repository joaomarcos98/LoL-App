import { useQuery, UseQueryResult } from "react-query"
import { IChamp } from "../models/IChamp"

interface IUseGetRequest {
    isLoading: boolean;
    error: Error | null;
    data: any
}


export const useGetRequest = (url: string): IUseGetRequest => {

    const { isLoading, error, data }: UseQueryResult<IChamp, Error> = useQuery("champions", () =>
        fetch(url).then(res =>
            res.json()
        )
    )

    return { isLoading, error, data };
};