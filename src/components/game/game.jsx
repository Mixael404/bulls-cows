import { useRef } from 'react'
import classes from './game.module.scss'

export function Game({onClick}) {
    const firstDigit = useRef(null)
    const secondDigit = useRef(null)
    const thirdDigit = useRef(null)
    const fourthDigit = useRef(null)

    function onClear(){
        const digits = [firstDigit, secondDigit,thirdDigit,fourthDigit]
        digits.forEach((digit) => {
            digit.current.value = ""
        })
    }

    function onSubmit(){
        const digits = [firstDigit, secondDigit,thirdDigit,fourthDigit]
        const values = digits.map(digit => +(digit.current.value))
        onClick(values)
        onClear()
    }

    function onChange(e){
        if(isNaN(+(e.target.value)) || e.target.value === " "){
            e.target.value = ''
            return
        }
    }

    return (
        <div className={classes.game}>
            <div className={classes.card}>
                <div className={classes.inputs}>
                    <input type="text"
                    id='0'
                    maxLength={1}
                    ref={firstDigit}
                    onChange={onChange}
                    />
                    <input type="text"
                    id='1'
                    maxLength={1}
                    ref={secondDigit}
                    onChange={onChange}
                    />
                    <input type="text" 
                    id='2'
                    maxLength={1}
                    ref={thirdDigit}
                    onChange={onChange}
                    />
                    <input type="text"
                    id='3'
                    maxLength={1}
                    ref={fourthDigit}
                    onChange={onChange}
                    />
                </div>
                <div className={classes.controls}>
                    <button
                    onClick={onSubmit}
                    >Check</button>
                    
                    <button
                    onClick={onClear}
                    >Clear</button>
                </div>
            </div>
        </div>
    )
}