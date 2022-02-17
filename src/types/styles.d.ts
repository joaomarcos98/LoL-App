import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme { 
        name: string;
        colors: {
            HeaderBgColor: string,
            ContainerColor: string;
            ContentColor: string;
            textColor: string;
            scrollbarColor: string,
            scrollbarThumbColor: string
            scrollbarThumbHoverColor: string
        }
    }
}