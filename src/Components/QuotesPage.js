import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getQuotes} from '../Actions/quotesActions'
import {TwitterShareButton,TwitterIcon} from 'react-share'
import {CopyToClipboard} from 'react-copy-to-clipboard';


export default function QuotesPage() {
    const userName = useSelector(state=>state.nameReducer)
    const quotes = useSelector(state => state.quoteReducer)
    
    const dispatch = useDispatch()
    
    const doGetQuotes = async () => {
        const response = await fetch( "https://api.kanye.rest");
        const jsonQuote = await response.json();
        getQuotes(dispatch, jsonQuote);
    } 
   
    // useEffect( () => {
    //    doGetQuotes();
    // }, []);

    return (
       
            <div>
                <h1>WHAT UP</h1>
                <h1>{userName}</h1>

                <button onClick={()=> doGetQuotes()}></button>
                <CopyToClipboard>
                    <button> copy </button>
                </CopyToClipboard>
                
               <h1>{quotes.quote}</h1> 

               <TwitterShareButton url={"http://localhost:3000/Inspirations"} title={"Kanspiration"} > <TwitterIcon ></TwitterIcon>
               </TwitterShareButton>

            </div>
        


    )
}
