import classes from './tryies-list.module.scss'
import { TryRecord } from '../try-record/try-record'

export function TryiesList() {

    const tryies = [
        {
            number: 1,
            choice: 1234,
            bulls: 1,
            cows: 0
        },
        {
            number: 2,
            choice: 5687,
            bulls: 3,
            cows: 1
        },
        {
            number: 3,
            choice: 4107,
            bulls: 0,
            cows: 3
        },
    ]

    return (
        <table className={classes.table}>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Ваша попытка</th>
                    <th>Быков</th>
                    <th>Коров</th>
                </tr>
            </thead>
            <tbody>
                {
                    tryies.map((element) => <TryRecord key={element.choice} {...element} />)
                }
            </tbody>
        </table>
    )
}