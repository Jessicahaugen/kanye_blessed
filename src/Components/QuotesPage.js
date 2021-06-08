import React, { useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getQuotes} from '../Actions/quotesActions'
import {TwitterShareButton,TwitterIcon} from 'react-share'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {FaClipboard } from 'react-icons/fa';
import {Button,Alert} from 'react-bootstrap/';



export default function QuotesPage() {
    const userName = useSelector(state=>state.nameReducer)
    const quotes = useSelector(state => state.quoteReducer)
    const [copied, setCopy] = useState(false);
    
    function copyAlert() {
       return  <Alert > your inspo was copied</Alert> //fix alert
    }

    const dispatch = useDispatch()
    
   
    useEffect( () => {
       getQuotes(dispatch);
    }, []);

    return (
       
            <div className="quotesPage">
                <h1>WHAT UP</h1>
                <h1>{userName}</h1>

                <Button variant="dark" onClick={()=> getQuotes(dispatch)}>Drop Another Quote</Button>
                
               <h1 className="quote">{quotes.quote}</h1> 
                <CopyToClipboard text={quotes.quote}>
                    <Button variant="dark" onClick={copyAlert} onCopy={()=>setCopy(true)}> <FaClipboard /> </Button>
                </CopyToClipboard>
                <div className="twitter">
               <TwitterShareButton url={"http://localhost:3000/Inspirations"} title={`Kanspiration for your day: ${quotes.quote}`} > <TwitterIcon ></TwitterIcon>
               </TwitterShareButton>
               </div>
            </div>
        


    )
}
