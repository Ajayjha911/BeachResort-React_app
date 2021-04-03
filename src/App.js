import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingelRoom";
import Eroor from "./pages/Eroor";

import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Eroor} />
      </Switch>
    </>
  );
}

export default App;
