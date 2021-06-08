import React from 'react'
import {user} from '../Actions/userAction'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {Button, Col, Container} from 'react-bootstrap/';


    

export default function LandingPage() {
    const dispatch = useDispatch();
    
    return (
        <div className="landingPage">
            <Container className="landingContainer"fluid="xl">
                <div className="kanyeBlessed">
                       
                            <h1>Kanye Rest.</h1>
                            <h1> Kanye Ble$$ed.</h1>
                            <h1>Kanye Obsessed.</h1>
                        
                    

                        <div className="inputDiv">
                             <input onChange={(e) => user(dispatch,e.target.value)} type="text" className="userName" placeholder="DROP UR NAME"></input>
                        </div>
                        
                        <Link to="/Inspirations" className="button">
                            <Button  variant="dark">
                                YE ENTRY
                            </Button>
                        </Link>
                    </div>
               
                
                <div className="bouncingKanye">

                </div>
            
            </Container>

        </div>
    )
}

