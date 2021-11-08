import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import ContactUs from './component/ContactUs/ContactUs';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Home from './component/Home/Home';
import AuthProvider from './component/Context/AuthProvider';
import ServiceEvent from './component/ServiceEvent/ServiceEvent';
import EventAdd from './component/EventAdd/EventAdd';
import ManageEvent from './component/ManageEvent/ManageEvent';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Book from './component/Book/Book';
import BookingEvent from './component/BookingEvent/BookingEvent';
import About from './component/Home/About';

function App() {
  return (
    <AuthProvider className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <PrivateRoute path="/bookingEvent">
            <BookingEvent />
          </PrivateRoute>
          <Route path="/events">
            <ServiceEvent />
          </Route>
          <PrivateRoute path="/book/:id">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/eventAdd">
            <EventAdd />
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <ManageEvent />
          </PrivateRoute>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/contact'>
            <ContactUs />
          </PrivateRoute>
          <Route exact path='/*'>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
