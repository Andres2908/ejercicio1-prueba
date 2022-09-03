import React, {Fragment ,useRef ,useState} from 'react'
import {Lista} from './components/Lista'
export function App() {
    const [array, setArray] = useState([])
    let startArrayRef = useRef()
    const handleStart = (value) => {
        const number = parseInt(value) + 100
        if(array.length > 1) setArray([])
        for(let i = number - 100; i < number ; i++) {
            setArray(currentArray => currentArray.concat(i))
        }
    }
    return(
    <Fragment>
        <input ref={startArrayRef} type="number" placeholder='Start' onChange={ev => handleStart(ev.target.value)}/>
        <Lista array={array}/>
    </Fragment>
    )
}