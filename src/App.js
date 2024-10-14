import Navbar from "./components/Navbar";
import Form from "./components/Form";
import memesData from "./data/memesData";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__form--container">
        <Form />
      </div>
    </div>
  );
}
