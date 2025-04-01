import { Home } from "./pages/home";
import { Header } from "./widgets/header";
import "@fontsource/roboto/400.css"; // Weight 400
import "@fontsource/roboto/700.css"; // Weight 700

function App() {
  return (
    <div className="flex flex-col gap-4 md:gap-[3rem]">
      <Header />
      <Home />
    </div>
  );
}

export default App;
