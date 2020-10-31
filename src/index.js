import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import firebase from "firebase";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import Routes from "routes/routes";
import history from "state/history";
import store from "state/store";
import "styles/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

let firebaseConfig = {
  apiKey: "AIzaSyB4gngEoIkWnnqCyc7i6xu-v_fj_G6U1Ts",
  authDomain: "automated-resume-screeni-b6254.firebaseapp.com",
  databaseURL: "https://automated-resume-screeni-b6254.firebaseio.com",
  projectId: "automated-resume-screeni-b6254",
  storageBucket: "automated-resume-screeni-b6254.appspot.com",
  messagingSenderId: "934049368221",
  appId: "1:934049368221:web:e18d63bb8535d6f44f6c74",
  measurementId: "G-321Q382W61"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App>
          <Switch>
            <Route path="/" component={Routes} />
          </Switch>
        </App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
