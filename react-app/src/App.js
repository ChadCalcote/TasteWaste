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
import SignUpDrawer from "./components/auth/SignUpDrawer";
import ReviewCard from "./components/ReviewCard";
// Services
import { authenticate } from "./services/auth";


function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [img, changeImg] = useState(
    "url(https://img.pngio.com/fresh-background-gradients-webgradientscom-purple-and-orange-png-2400_2000.png)"
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
          background: img,
        }}
        id="mainContainer"
      >
        <NavBar
          setAuthenticated={setAuthenticated}
          changeImg={changeImg}
        />
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <Route path="/city/:city" exact={true}>
            <CityPage
              changeImg={changeImg}
            />
          </Route>
          <Route path="/home" exact={true}>
            <HomePage />
          </Route>
          <Route path="/review-card" exact={true}>
            <ReviewCard />
          </Route>
          <Route path="/restaurants/:restaurantId" exact={true}>
            <RestaurantPage changeImg={changeImg}/>
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
