import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'


export default function QuotesPage() {
    const userName = useSelector(state=>state.nameReducer)
    const quotesState = useSelector(state => state.quoteReducer)
    
    console.log(userName)
    
    const dispatch = useDispatch()
    const getQuotes = async () => {
        const response = await fetch( "https://api.kanye.rest");
        const jsonData = await response.json();
        console.log(jsonData)
    } 
    getQuotes();

    useEffect(() => (
        getQuotes,[]
    ))
    console.log(userName.username)
    return (
       
            <div>
                <h1>hey</h1>
                <h1>{userName}</h1>
                
            </div>
        


    )
}
