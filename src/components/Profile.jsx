import styled from "styled-components";
import { theme } from "../styles/theme";

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${theme.colors.textMuted};
  font-size: ${theme.fontSizes.caption};
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

export function Profile() {
  return (
    <Divider>Links</Divider>
  );
}