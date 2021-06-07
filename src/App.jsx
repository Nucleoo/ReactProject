import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import {Switch, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Navbar from './Navbar';
import Footer from './Footer';


const App = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component = {Home} />
                <Route exact path="/about" component = {About} />
                <Route exact path="/services" component = {Services} />
                <Route exact path="/contact" component = {Contact} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;
