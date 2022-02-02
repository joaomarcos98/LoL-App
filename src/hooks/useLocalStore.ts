import { Hero } from "../models/Champion";


type Favorites = Hero[] | []

interface useStorage {
    getFavorites: () => Favorites | []; 
    setFavorites: (list: Hero[]) => void
}

export const useStorage = (): useStorage => {

    let getFavorites = () => {
        const res = localStorage.getItem("favorites");
        if (res) {
            const favorites: Hero[] = JSON.parse(res)
            return favorites;
        }
        return [];
    }

    const setFavorites = (list: Hero[]) => {

        localStorage.setItem("favorites", JSON.stringify(list))
    }

    return { getFavorites, setFavorites };
}