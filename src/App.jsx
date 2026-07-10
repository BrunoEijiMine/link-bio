import { Container } from "./components/Container";
import { LinkList } from "./components/LinkList";
import { links } from "./components/links";

function App() {
  return (
      <Container>
        <LinkList links={links} />
      </Container>
  );
}

export default App;