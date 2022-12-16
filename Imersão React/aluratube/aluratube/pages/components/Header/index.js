import config from "../../../config.json";
import styled from "styled-components";

const StyledHeader = styled.div` 
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
`;
const Header = () => {
    return (
        <StyledHeader>
            <img src={`https://github.com/${config.github}.png`} alt="Banner" />
            <img src="" alt="Foto do perfil" />
            {config.name}
            {config.job}

        </StyledHeader>
    )
}

export default Header