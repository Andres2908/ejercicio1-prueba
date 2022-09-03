import React, {Fragment ,useEffect ,useState} from 'react'
import {Lista} from './components/Lista'
export function App() {
    const [array, setArray] = useState([])
    
    useEffect(() => {
        handleStart(100)
    },[])
    const handleStart = (number) => {
        for(let i = 1; i < number ; i++) {
            setArray(currentArray => currentArray.concat(i))
        }
    }
    return(
    <Fragment>
        <Lista array={array}/>
    </Fragment>
    )
}