import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LandingPage from './LandingPage'
import QuotesPage from './QuotesPage'
// import NameInput from './NameInput'
import KanyeOrigins from './KanyeOrigins'
import Social from './Social'




export default function Nav() {

    return (
        <Router >
        <div>
            <nav className="nav" color="transparent" >
              <div>
                <Link to="/" className="LandingPage">Home of Ye</Link>
             </div>
             <div>
             <Link to="/Inspirations" className="linkDecor">Kanspiration</Link>
             </div>
             <div>
             <Link to="/AboutUs" className="linkDecor">Kanye Origins</Link>
             </div>
            </nav>
          </div>

        <Switch>
        <Route exact path ="/" component={LandingPage}></Route>

        <Route path ="/Inspirations" component={QuotesPage}></Route>

        <Route path ="/KanyeOrigins" component={KanyeOrigins}></Route>

        <Route path="/post" component={Social} ></Route>

        </Switch>

        </Router>
    )
}
