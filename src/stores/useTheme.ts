import create from "zustand";

interface IUseTheme {
    theme: "dark" | "light";
    toggleTheme: () => void;
}

const useTheme = create<IUseTheme>(set => ({
    theme: "dark",
    toggleTheme: () => set(state => {

        if (state.theme === "dark") {
            return { theme: "light" }
        }

        return { theme: "dark" }
    })

}))

export default useTheme