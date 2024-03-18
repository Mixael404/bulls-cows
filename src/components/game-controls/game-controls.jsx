import { useRef } from 'react'
import classes from './game-controls.module.scss'

export function GameControls({startNew}){
    const inputRef = useRef(null)

    function startNewGame(){
        const number = inputRef.current.value
        const array = number.split("")
        const digits = array.map(digit => +(digit))
        console.log(array);
        startNew(digits)
    }

    return(
        <div className={classes.controls}>
            <input
            ref={inputRef}
            placeholder='Enter new number'
            type="text" />
            <button
            onClick={startNewGame}
            >Start new game</button>
        </div>
    )
}