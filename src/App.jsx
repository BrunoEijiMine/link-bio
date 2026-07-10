import { LinkList } from "./components/LinkList";
import { links } from "./components/links";

function App() {
  return (
    <div className="profile-page">
      <LinkList links={links} />
    </div>
  );
}

export default App;