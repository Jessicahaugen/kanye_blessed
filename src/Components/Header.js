import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LandingPage from './LandingPage'
import QuotesPage from './QuotesPage'
import KanyeOrigins from './KanyeOrigins'
import Nav from 'react-bootstrap/Nav'





export default function Header() {

    return (
        <Router >
        <div>
          <Nav  defaultActiveKey="/" className="flex-row">
            
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
          </div>

        <Switch>
        <Route exact path ="/" component={LandingPage}></Route>

        <Route  path ="/Inspirations" component={QuotesPage}></Route>

        <Route  path ="/KanyeOrigins" component={KanyeOrigins}></Route>

      
        </Switch>

        </Router>
    )
}
