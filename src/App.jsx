import { Container } from "./components/Container";
import { LinkList } from "./components/LinkList";
import { Profile } from "./components/Profile";
import { links } from "./components/links";

function App() {
  return (
      <Container>
        <Profile />
        <LinkList links={links} />
      </Container>
  );
}

export default App;