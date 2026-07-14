import { Container } from "./components/Container";
import { LinkList } from "./components/LinkList";
import { Profile } from "./components/Profile";
import { links } from "./components/links";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <>
      <Container>
        <Profile />
        <LinkList links={links} />
      </Container>

      <Footer />
    </>
  );
}

export default App;