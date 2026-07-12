import styled from "styled-components";
import { theme } from "../styles/theme";

const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${theme.colors.textMuted};
  font-size: 13px;
  margin: 16px 0;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid ${theme.colors.borderCard};
  }

  &::before {
    margin-right: 12px;
  }

  &::after {
    margin-left: 12px;
  }
`;

export default function Divider({ text }) {
  return (
    <DividerContainer>
      {text}
    </DividerContainer>
  );
}