import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import AuthProvider from './components/context/AuthProvider';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ServiceDetails from './components/Services/ServiceDetails';
import Profile from './components/Profile/Profile';
import MyService from './components/MyService/MyService';
import NotFound from './components/NotFound/NotFound';
import { useState, useEffect } from 'react';

function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('../../services_api.JSON')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home all_service={services}></Home>
            </Route>
            <Route path="/home">
              <Home all_service={services}></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/about">
              <About all_service={services}></About>
            </Route>
            <PrivetRoute exact path="/service/:service_id">
              <ServiceDetails all_service={services} ></ServiceDetails>
            </PrivetRoute>
            <PrivetRoute path="/profile">
              <Profile></Profile>
            </PrivetRoute>
            <PrivetRoute path="/myService">
              <MyService></MyService>
            </PrivetRoute>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
