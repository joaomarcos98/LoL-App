import { useQuery, UseQueryResult } from "react-query"

interface IUseGetRequest {
    isLoading: boolean;
    error: Error | null;
    data: any | undefined
}


export const useHeroes = (url: string): IUseGetRequest => {

    const { isLoading, error, data }: UseQueryResult<Object, Error> = useQuery("champions", () =>
        fetch(url).then(res =>
            res.json()
        ),
        {
            refetchOnWindowFocus: false,
            retry: false
        }
    )

    return { isLoading, error, data };
};