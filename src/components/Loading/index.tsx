import { LoadingStyle } from "./style";
import LoadingIcon from "../../ui/assets/loading.svg";

export const Loading = () =>
    <LoadingStyle>
        <img src={LoadingIcon} alt="Carregando" />
    </LoadingStyle>