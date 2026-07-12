import styled from "styled-components";
import { theme } from "../styles/theme";

export function Footer() {
    return (
        <FooterContainer>
            <p>© 2026 Bruno Eiji</p>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    text-align: center;
    padding: 1rem;
    background-color: ${theme.colors.backgroundSecondary};
    color: ${theme.colors.textSecondary};
`;