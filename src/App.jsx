import { Container } from "./components/Container";
import { LinkList } from "./components/LinkList";
import { Profile } from "./components/Profile";
import { links } from "./components/links";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <ThemeToggle />
      <Container>
        <Profile />
        <LinkList links={links} />
      </Container>

      <Footer />
      <Analytics />
    </>
  );
}

export default App;