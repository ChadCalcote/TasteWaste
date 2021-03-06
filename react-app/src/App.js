// React Dependencies
import React, { useState, useEffect } from "react";
// React Router Dependencies
import { BrowserRouter, Route, Switch } from "react-router-dom";
// Components
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import Homepage from "./components/Homepage";
import CityPage from "./components/CityPage";
import RestaurantPage from "./components/RestaurantPage";
import Footer from "./components/Footer";
// Services
import { authenticate } from "./services/auth";
// App Component
function App() {
  // React Hooks
  // Handle Authentication throughout app
  const [authenticated, setAuthenticated] = useState(false);
  // Handle loaded state throughout app
  const [loaded, setLoaded] = useState(false);
  // Handle background state throughout apo
  const [img, changeImg] = useState(
    "linear-gradient(0deg, rgba(252,197,228,1) 0%, rgba(255,125,124,1) 40%, rgba(54,41,142,1) 89%, rgba(3,16,118,1) 100%)"
  );
  // Handle user state throughout app
  const [user, setUser] = useState();

  // As app is loaded up, try and authenticate the user, if there are no errors set authenticated to true
  useEffect(() => {
    (async () => {
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
          backgroundImage: img,
        }}
        id="mainContainer"
      >
        <NavBar
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
          changeImg={changeImg}
          setUser={setUser}
        />
        <Switch>
          <Route path="/login" exact={true}>
            <LoginForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              setUser={setUser}
            />
          </Route>
          <Route path="/city/:city" exact={true}>
            <CityPage changeImg={changeImg} user={user} />
          </Route>
          <Route path="/" exact={true}>
            <Homepage
              setUser={setUser}
              changeImg={changeImg}
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
          </Route>
          <Route path="/restaurants/:restaurantId" exact={true}>
            <RestaurantPage changeImg={changeImg} user={user} />
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
            />
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
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
