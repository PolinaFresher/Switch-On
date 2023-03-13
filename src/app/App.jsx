import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import Router from "./Router";
import { React} from "react";
import { observer } from 'mobx-react-lite'

import "./App.css";
import { Theme } from "models";

function App() {
  function ChangeTheme(color) {
    if (document.getElementById("Error") != null) {
      let doc = document.getElementsByTagName("html");
      doc[0].style.backgroundColor = "white"
    } else {
      let doc = document.getElementsByTagName("html");
      doc[0].style.backgroundColor = color
    }
  }

  return (
    <div >
      {ChangeTheme(Theme.getColor())}
      <BrowserRouter>
        <Layout />
        <Router />
      </BrowserRouter>
    </div>

  );
}

export default observer(App)
