// Dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import MapContainer from "./components/MapContainer"
import ReviewForm from "./components/ReviewForm";
import HomePage from "./components/HomePage";
import CityPage from "./components/CityPage";
import RestaurantPage from "./components/RestaurantPage";
// Services
import { authenticate } from "./services/auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [img, changeImg] = useState(
    "url(" + "https://cdn.wallpapersafari.com/59/17/Mp2ga4.jpg" + ")"
  );

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage: img
        }}
        id="mainContainer"
      >
        <NavBar setAuthenticated={setAuthenticated} img={img} changeImg={changeImg} />
        <Switch>
          <Route path="/login" exact={true}>
            {}
            <LoginForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <Route path="/city/:city" exact={true}>
            <CityPage
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <Route path="/home" exact={true}>
            <HomePage />
          </Route>
          <Route path="/restaurant" exact={true}>
            <RestaurantPage />
          </Route>
          <Route path="/map" exact={true}>
            <MapContainer />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <Route path="/review" exact={true}>
            <ReviewForm />
          </Route>
          <ProtectedRoute
            path="/users"
            exact={true}
            authenticated={authenticated}
          >
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute
            path="/users/:userId"
            exact={true}
            authenticated={authenticated}
          >
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
            <h1>My Home Page</h1>
          </ProtectedRoute>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
