import Divider from "./Divider";
import styled from "styled-components";
import { theme } from "../styles/theme";

export function Profile() {
  return (
    <>
      <ProfileContainer>
          <img src="https://github.com/BrunoEijiMine.png" alt="Foto de perfil" />
          <h1>Bruno Eiji</h1>
          <p>Desenvolvedor Front-End</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.</p>
        </ProfileContainer>
      <Divider text="Links" />
    </>
  );
}

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: ${theme.fontSizes.heading};
    color: ${theme.colors.textPrimary};
    margin-bottom: 0.5rem;
  }

  p {
    font-size: ${theme.fontSizes.text};
    color: ${theme.colors.textSecondary};
  }
`;