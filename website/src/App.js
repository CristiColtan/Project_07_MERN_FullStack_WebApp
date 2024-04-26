import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/Body.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header";
import Home from "./pages/Home";

import Body from "./pages/Body";
import Footer from "./components/Footer";
import RegisterPage from "./pages/Register";
import HeaderLow from "./components/HeaderLow";
import LoginPage from "./pages/Login";
import Property from "./pages/Property";
import FooterLow from "./components/FooterLow";
import Contact from "./pages/Contact";
import StaysSearch from "./pages/StaysSearch";
import ProfilePage from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing";
import MyListings from "./pages/MyListings";
import EditListing from "./pages/EditListing";

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderLow />
                <Home />
                <Body />
                <Footer />
              </>
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/property" element={<Property />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stays-search" element={<StaysSearch />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/my-listings" element={<MyListings />} />
            <Route path="/edit-listing/:listingID" element={<EditListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <FooterLow />
    </div>
  );
}

export default App;