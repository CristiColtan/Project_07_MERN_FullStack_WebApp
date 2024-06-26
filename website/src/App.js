import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Header.css";
import "./styles/Home.css";
import "./styles/Body.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import Header from "./components/Header";

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
import Listing from "./pages/Listing";
import AdminPrivateRoute from "./components/AdminPrivateRoute";
import AdminListings from "./pages/AdminListings";
import AdminRentals from "./pages/AdminRentals";
import AdminUsers from "./pages/AdminUsers";
import AdminBookings from "./pages/AdminBookings";
import CarRentals from "./pages/CarRentals";
import CreateRental from "./pages/CreateRental";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeaderLow />
                <Body />
                <Footer />
              </>
            }
          />
          <Route path="/rentals" element={<CarRentals />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/property" element={<Property />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<StaysSearch />} />
          <Route path="/listing/:listingID" element={<Listing />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/my-listings" element={<MyListings />} />
            <Route path="/edit-listing/:listingID" element={<EditListing />} />
          </Route>
          <Route element={<AdminPrivateRoute />}>
            <Route path="/admin-users" element={<AdminUsers />} />
            <Route path="/admin-properties" element={<AdminListings />} />
            <Route path="/admin-rentals" element={<AdminRentals />} />
            <Route path="/admin-bookings" element={<AdminBookings />} />
            <Route path="/create-rental" element={<CreateRental />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <FooterLow />
    </div>
  );
}

export default App;
