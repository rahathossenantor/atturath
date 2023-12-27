import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";

const App = () => {
  return (
    <div className="app">
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;
