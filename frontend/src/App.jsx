import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
