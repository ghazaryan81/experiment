import { Navbar } from "./components";
import { Banner } from "./components";
import { Section } from "./components";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar
        items={[
          "FAQ",
          "Оплата и доставка",
          "Возврат",
          "Исследования",
          "Личный кабинет",
          "8 8 (800) 600-09-90",
        ]}
      />
      <Banner />
      <Section />
    </div>
  );
}

export default App;
