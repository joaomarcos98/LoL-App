import create from "zustand";
import { Hero } from "../models/Champion";

interface FavoriteState {
    favorites: Hero[] | [];
    addFavorite: (hero: Hero) => void;
    removeFavorite: (hero: Hero) => void;
}

const useFavorite = create<FavoriteState>(set => ({
    favorites: [],
    addFavorite: (hero: Hero) => set(state => {

        const heroAlreadyExists = state.favorites.find(newHero =>
            newHero.id === hero.id
        )

        if (heroAlreadyExists) {
            return { favorites: state.favorites }
        }

        return { favorites: [...state.favorites, hero] }
    }),
    removeFavorite: (hero: Hero) => set(state => {
        const newList = state.favorites.filter(item =>
            item.id !== hero.id)

        return { favorites: newList }
    })

}))

export default useFavorite