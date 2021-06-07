import React from 'react'
import {user} from '../Actions/userAction'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'

export default function LandingPage() {
    const dispatch = useDispatch();
    
    return (
        <div>
            <form>
            <input onChange={(e) => user(dispatch,e.target.value)} type="text" className="userName" placeholder="Enter Name Here for a Yeezzzy nickname on Entry"></input>
            </form>
            <Link to="/Inspirations">
                <button>
                    YE ENTRY
                </button>
            </Link>

        </div>
    )
}

