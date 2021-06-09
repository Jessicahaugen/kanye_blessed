import React, { useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getQuotes} from '../Actions/quotesActions'
import {TwitterShareButton,TwitterIcon, FacebookShareButton,FacebookIcon} from 'react-share'

import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FaClipboard } from 'react-icons/fa';
import {Button,Alert} from 'react-bootstrap/';



export default function QuotesPage() {

    const userName = useSelector(state=>state.nameReducer)
    const quotes = useSelector(state => state.quoteReducer)
    const [copied, setCopy] = useState(false);
    const dispatch = useDispatch()
    
    function copyAlert() {
       return  <Alert > your inspo was copied</Alert> //fix alert
    }

    
   
    useEffect( () => {
       getQuotes(dispatch);
    }, []);

    return (
       
            <div className="quotesPage">

                <div className="welcome">
                    <h1>WHAT UP</h1>
                    <div className="user">
                    <h1>{userName}</h1>
                    </div>
                </div>
                <div className="quoteDisplay">
                <h1 >{quotes.quote}</h1> 
                    <div classname="clipIcon">
                    <CopyToClipboard text={quotes.quote}>
                        <Button variant="dark" onClick={copyAlert} onCopy={()=>setCopy(true)}> <FaClipboard /> </Button>
                    </CopyToClipboard>
                    </div>
                </div>
                <div className="quoteButton">
                <Button variant="dark" onClick={()=> getQuotes(dispatch)}>Drop Another Quote</Button>
                </div>
                
                <div className ="social">
                    <div className="twitter">
                        <TwitterShareButton url={"http://localhost:3000/Inspirations"} title={`Kanspiration for your day: ${quotes.quote}`} > <TwitterIcon ></TwitterIcon>
                        </TwitterShareButton>
                    </div>
                    <div>
                        <FacebookShareButton url={"http://localhost:3000/Inspirations"} title={`Kanspiration for your day: ${quotes.quote}`} ></FacebookShareButton><FacebookIcon></FacebookIcon>
                    </div>
               </div>
            </div>
        


    )
}
