import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getQuotes} from '../Actions/quotesActions'

export default function QuotesPage() {
    const userName = useSelector(state=>state.nameReducer)
    const quotes = useSelector(state => state.quoteReducer)
    
    const dispatch = useDispatch()
    
    const doGetQuotes = async () => {
        const response = await fetch( "https://api.kanye.rest");
        const jsonQuote = await response.json();
        getQuotes(dispatch, jsonQuote);
    } 
   
    useEffect( () => {
       doGetQuotes();
    }, []);

    return (
       
            <div>
                <h1>WHAT UP</h1>
                <h1>{userName}</h1>

                <button onClick={()=> doGetQuotes()}></button>
                
               <h1>{quotes.quote}</h1> 

            </div>
        


    )
}
