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
                    <p>WHAT UP</p>
                    <div className="user">
                    <h3>{userName}</h3>
                    </div>
                </div>
                
                <div className="quoteDisplay">
                    <h1 className="quote">{quotes.quote}</h1> 
                    <div className="clip" >
                        <CopyToClipboard text={quotes.quote}>
                            <Button className="clipIcon" variant="dark" onClick={copyAlert} onCopy={()=>setCopy(true)}> <FaClipboard /> </Button>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className ="social">
                    <div className="bouncingKanye2"></div>
                    <div className="twitter">
                        <TwitterShareButton url={"http://localhost:3000/Inspirations"} title={`Kanspiration for your day: ${quotes.quote}`} > <TwitterIcon className="twit"></TwitterIcon>
                        </TwitterShareButton>
                    
                        <FacebookShareButton url={"http://localhost:3000/Inspirations"} title={`Kanspiration for your day: ${quotes.quote}`} ></FacebookShareButton><FacebookIcon  className="fb"></FacebookIcon>
                        
                        
                    </div>
                    <div className="quoteButtonC">
                        <Button className="bootButtonQ" variant="dark" onClick={()=> getQuotes(dispatch)}>Drop Another</Button>
                
                    </div>
               </div>
               
                    
               
            </div>
        


    )
}
