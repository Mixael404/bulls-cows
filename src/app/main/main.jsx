import classes from './main.module.scss'
import { TryiesList } from '../../components/tryies-list/tryies-list'
import { Game } from '../../components/game/game'
import { useState } from 'react'

export function Main(){

    const [value, setValue] = useState(["","","",""])

    return(
        <div className={classes.game}>
                <TryiesList />
                <Game onClick={setValue}/>
        </div>
    )
}