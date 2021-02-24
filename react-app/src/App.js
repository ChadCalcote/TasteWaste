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
import Homepage from "./components/Homepage";
import CityPage from "./components/CityPage";
import RestaurantPage from "./components/RestaurantPage";
import Footer from "./components/Footer";
// Services
import { authenticate } from "./services/auth";
import RestaurantCard from "./components/RestaurantCard";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [img, changeImg] = useState(
    "url(https://img.pngio.com/fresh-background-gradients-webgradientscom-purple-and-orange-png-2400_2000.png)"
  );
  const [user, setUser] = useState();

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

  const testRestaurant = {
    id: 1,
    name: "Joann's Fine Foods",
    description:
      "Joann’s Fine Foods is a South Congress neighborhood spot, a new take on the American diner, and a vacation for locals and tourists alike. Open early and late at the Austin Motel, Joann’s is a welcome respite for early birds and night owls, outlaws and in-laws, all ways always.",
    photo:
      "https://joannsaustin.com/wp-content/uploads/2018/10/MH_MMG_JOANNS_1568_FINAL-e1540241567159.jpg",
    address: "1224 S Congress Ave",
    city: "Austin",
    state: "TX",
    zip_code: "78704"
  };

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
          <Route path="/restaurantCard/" exact={true}>
            <RestaurantCard restaurant={testRestaurant} />
          </Route>
          <Route path="/city/:city" exact={true}>
            <CityPage changeImg={changeImg} user={user} />
          </Route>
          <Route path="/" exact={true}>
            <Homepage setUser={setUser} changeImg={changeImg} />
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
          {/* <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
            <h1>My Home Page</h1>
          </ProtectedRoute> */}
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
