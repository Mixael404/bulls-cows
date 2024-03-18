import classes from './main.module.scss'
import { TryiesList } from '../../components/tryies-list/tryies-list'
import { Game } from '../../components/game/game'
import { useState } from 'react'
import { GameControls } from '../../components/game-controls/game-controls'

export function Main() {

    const [correct, setCorrect] = useState([1, 2, 3, 4])
    // const [value, setValue] = useState(["","","",""])
    const [tryies, setTryies] = useState([])
    const [isGame, setIsGame] = useState(true)

    function startNewGame(arr) {
        setTryies([])
        setIsGame(true)
        setCorrect(arr)
    }

    function checkValue(value) {
        if (value.join() == correct.join()) {
            alert("Win!!!")
            setIsGame(false)
            return
        }

        const newTry = {
            number: tryies.length + 1,
            choice: Number(value.join('')),
            bulls: 0,
            cows: 0
        }
        value.forEach((digit, index) => {
            console.log(typeof digit);
            if (digit == correct[index]) {
                newTry.bulls++
            } else if (correct.includes(digit)) {
                newTry.cows++
            }
        });
        setTryies((prev) => [...prev, newTry])
    }

    return (
        <div className={classes.game}>
            <TryiesList tryies={tryies} />
            {
                isGame ?
                    <Game onClick={checkValue} />
                    :
                    <GameControls startNew={startNewGame} />
            }
        </div>
    )
}