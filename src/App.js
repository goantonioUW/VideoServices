import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "./components/CarouselComponent";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <CarouselComponent />
      <p>starting</p>
    </div>
  );
}

export default App;
