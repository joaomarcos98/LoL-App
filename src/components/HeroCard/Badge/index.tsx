import allIcon from "../../../ui/assets/all_icon.png";
import assassinIcon from "../../../ui/assets/assassin_icon.png";
import fighterIcon from "../../..//ui/assets/fighter_icon.png";
import mageIcon from "../../../ui/assets/mage_icon.png";
import marksmanIcon from "../../../ui/assets/marksman_icon.png";
import supportIcon from "../../../ui/assets/support_icon.png";
import tankIcon from "../../../ui/assets/tank_icon.png";

type Categorys = {
    Assassin: string,
    Fighter: string,
    Mage: string,
    Marksman: string,
    Support: string,
    Tank: string,
}

interface BadgeProps {
    category: string
}

export const Badge = ({ category }: BadgeProps) => {
    const image = (category: string) => {

        const options = {
            Assassin: assassinIcon,
            Fighter: fighterIcon,
            Mage: mageIcon,
            Marksman: marksmanIcon,
            Support: supportIcon,
            Tank: tankIcon,
        }

        return options[category as keyof Categorys] || allIcon
    }

    return <img src={image(category)} alt={category} />
}