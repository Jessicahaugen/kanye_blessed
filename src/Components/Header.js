import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LandingPage from './LandingPage'
import QuotesPage from './QuotesPage'
import KanyeOrigins from './KanyeOrigins'
import {Nav, Navbar} from 'react-bootstrap'
import Error from './Error'





export default function Header() {

    return (
        <Router >
        <div>
        {/* <Navbar collapseOnSelect expand="lg" >
          <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
              <Nav defaultActiveKey="/" className="flex-row">
                  <div>
                    <Nav.Link variant="dark" href="/" className="linkNav">Home of Ye</Nav.Link>
                  </div>
                  <div>
                    <Nav.Link href="/Inspirations" className="linkNav">Kanspiration</Nav.Link>
                  </div>
                  <div>
                    <Nav.Link href="/KanyeOrigins" className="linkNav">Kanye Origins</Nav.Link>
                  </div>
              </Nav> 
            {/* </Navbar.Collapse >
          </Navbar> */}
          </div>

        <Switch>
        <Route exact path ="/" component={LandingPage}></Route>

        <Route  path ="/Inspirations" component={QuotesPage}></Route>

        <Route  path ="/KanyeOrigins" component={KanyeOrigins}></Route>
       
        <Route path="/" component={Error}></Route>
      
        </Switch>

        </Router>
    )
}
