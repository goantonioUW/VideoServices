import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "./components/CarouselComponent";
import Nav from "./components/Nav";
import CardComponent from "./components/CardComponent";
import StarsComponent from "./components/StarsComponent";

function App() {
  return (
    <div>
      <Nav />
      <StarsComponent />
      <CarouselComponent />
      <CardComponent />
      <p>starting</p>
    </div>
  );
}

export default App;
