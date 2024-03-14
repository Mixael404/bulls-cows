import classes from "./try-record.module.scss"

export function TryRecord(props) {

    const {number, choice, bulls, cows} = props

    return (
        <tr>
            <td className={classes.spell}> {number} </td>
            <td className={classes.spell}> {choice} </td>
            <td className={classes.spell}> {bulls} </td>
            <td className={classes.spell}> {cows} </td>
        </tr>
    )
}