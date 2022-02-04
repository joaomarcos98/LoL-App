import { Hero } from "../types/Champion";


type Favorites = Hero[] | []

interface useStorage {
    getFavorites: () => Favorites;
    setFavorites: (list: Hero[]) => void;
    removeFavorites: (list: Hero[], hero: Hero) => void
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

    const removeFavorites = (list: Hero[], hero: Hero) => {
        const favorites = list.filter(item =>
            item.id !== hero.id)

            setFavorites(favorites)
    }

    return { getFavorites, setFavorites, removeFavorites };
}