import Divider from "./Divider";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons";
import profilePhoto from "../assets/profile.jpeg";

export function Profile() {
  return (
    <>
      <ProfileContainer>
          <img src={profilePhoto} alt="Foto de perfil" />
          <h1>Bruno Eiji</h1>

          <OnlineStatus>
            <p>
              <StatusDot />
              Disponível
            </p>
          </OnlineStatus>

          <p className="career"><FontAwesomeIcon className="icon" icon={faCode} /> Desenvolvedor Front-End · UI/UX </p>
          <p className="about-me">Crio experiências web rápidas, acessíveis e com um design impecável. Sou apaixonado por código limpo, sistemas de design e por tornar a web um lugar melhor — um componente de cada vez. 🚀</p>
        </ProfileContainer>

        <ContainerInfo>
          <Info>
            <p className="info-title">
              <FontAwesomeIcon className="icon" icon={faMapPin} /> Barretos - SP
            </p>
          </Info>

          <Info>
            <p className="info-title">
              <FontAwesomeIcon className="icon" icon={faBriefcase} /> Mais de 4 anos de experiência
            </p>
          </Info>
        </ContainerInfo>
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
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: ${theme.fontSizes.subtitle};
    color: ${theme.colors.textPrimary};
    margin-bottom: 0.5rem;
  }

  .icon {
    color: ${theme.colors.textRole};
  }

  .career {
    font-size: ${theme.fontSizes.paragraph};
    color: ${theme.colors.textSecondary};
    margin-bottom: 1rem;
  }

  .about-me {
    font-size: ${theme.fontSizes.paragraph};
    color: ${theme.colors.textSecondary};
    text-align: center;
  }
`;

const OnlineStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.bgBadgeAvailable};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  margin-bottom: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 13px;
    color: ${theme.colors.textBadgeAvailable};
  }
`;

const StatusDot = styled.span`
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${theme.colors.textBadgeAvailable};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-color: ${theme.colors.textBadgeAvailable};
    animation: pulse 1.5s ease-out infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.7;
    }
    100% {
      transform: scale(2.5);
      opacity: 0;
    }
  }
`;

const ContainerInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${theme.colors.bgCard};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  white-space: nowrap;

  .info-title {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 13px;
    color: ${theme.colors.textSecondary};
    white-space: nowrap;
  }

  .icon {
    color: ${theme.colors.textSecondary};
    font-size: 14px;
  }
`;