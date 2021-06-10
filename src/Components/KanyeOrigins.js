import React from 'react'
import {useSelector} from 'react-redux'


export default function KanyeOrigins() {
    const userName = useSelector(state=>state.nameReducer)
    return (
        <div className="originsPage">
            <div className="learn">
                <p>The life of Pablo</p>
            </div>
            
            <div className="flipCard">
                <div className="flipCardInside">
                        <div className="front">
                        </div>
                        <div className="back">
                            <p className="Kanye">Kanye Omari West</p>
                            <p>Entrepeneur,Artist,Family man.</p>
                            <p>  West is among the most critically acclaimed musicians of the 21st century and one of the best-selling music artists of all time with over 135 million records sold worldwide. He has won a total of 21 Grammy Awards, making him one of the most awarded artists of all time and the most Grammy-awarded artist of his generation. Three of his albums have been included and ranked on Rolling Stone's 2012 update of the "500 Greatest Albums of All Time" list and he ties with Bob Dylan for having topped the annual Pazz & Jop critic poll the most number of times ever, with four number-one albums each. Time magazine named him one of the 100 most influential people in the world in 2005 and 2015.</p>


                        </div>
                </div>
            </div>

        </div>
    )
}
