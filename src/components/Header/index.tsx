import { memo } from "react";
import ReactSwitch from "react-switch";
import useTheme from "../../stores/useTheme";
import { HeaderStyle } from "./style";


export const Header = memo(() => {

    const toggleTheme = useTheme(state => state.toggleTheme);
    const theme = useTheme(state => state.theme);

    const isDarkTheme = theme === "dark";

    return (
        <HeaderStyle>
            <div>

                <h1>Beras App</h1>
                <ReactSwitch
                    onChange={toggleTheme}
                    checked={isDarkTheme}
                    height={20}
                    width={40}
                    onColor="#a4a4a4"
                    offColor="#a4a4a4"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    handleDiameter={20}
                />
            </div>

        </HeaderStyle>
    )
});