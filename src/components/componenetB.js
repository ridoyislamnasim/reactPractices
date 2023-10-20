import { useContext } from "react"
import {createContext} from '../App'

export default function ComB() {
    const countContext = useContext(createContext)
    console.log("countContext")
    console.log(countContext)
    console.log(countContext.dispatch)
    return (
        <div>
            
            <button type='button' onClick={() => countContext({
                type: 'increment',
                count: 4,
            })}>
                button
            </button>

            <button type='button' onClick={() => countContext({
                type: 'decrement',
                count: 1,
            })}>
                button
            </button>
        </div>
    )
}