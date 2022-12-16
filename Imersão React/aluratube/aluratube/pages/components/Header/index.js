import config from "../../../config.json";
import styled from "styled-components";

const StyledHeader = styled.div` 
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const Header = () => {
    return (
        <StyledHeader>
            <img src="" alt="Banner" />

            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="Foto do perfil" />

                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                    
                </div>
            </section>
        </StyledHeader>
    )
}

export default Header