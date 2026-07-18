import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../styles/theme";

const Card = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: ${theme.colors.bgCard};
  border: 1px solid ${theme.colors.borderCard};
  border-radius: 1rem;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  &[aria-disabled="true"] {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 0.75rem;
  background: ${theme.colors.bgPage};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${theme.colors.textPrimary};
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Title = styled.p`
  font-weight: 600;
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.paragraph};
`;

const Description = styled.p`
  font-size: ${theme.fontSizes.paragraph};
  color: ${theme.colors.textSecondary};
`;

export function LinkCard({ icon, title, description, href, disabled }) {
  return (
    <Card
      href={disabled ? undefined : href}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noopener noreferrer"}
      aria-disabled={disabled}
    >
      <IconWrapper>
        <FontAwesomeIcon icon={icon} size="lg" />
      </IconWrapper>

      <TextWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextWrapper>

      {!disabled && (
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" color={theme.colors.textMuted} />
      )}
    </Card>
  );
}