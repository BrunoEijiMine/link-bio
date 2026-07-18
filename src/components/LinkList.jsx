import styled from "styled-components";
import { LinkCard } from "./LinkCard";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function LinkList({ links }) {
  return (
    <List>
      {links.map((link) => (
        <LinkCard
          key={link.id}
          icon={link.icon}
          title={link.title}
          description={link.description}
          href={link.href}
          disabled={link.disabled}
        />
      ))}
    </List>
  );
}