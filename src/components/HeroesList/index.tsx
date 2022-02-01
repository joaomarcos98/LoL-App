import { ReactNode } from "react"
import { HeroListStyle } from "./styled"

interface HeroListProps {
    children: ReactNode
}

export const HeroList = ({ children }: HeroListProps) => {
    return (
        <HeroListStyle>
            {children}
        </HeroListStyle>
    )
}

