import { useQuery } from '@apollo/client'
import { ALL_DRINKS, FIND_DRINK } from './queries'
import { useState } from 'react'

const DrinkInfoPage = () => {
    const [ drinkToSearch, setDrinkToSearch ] = useState(null)
    const resultAllDrinks = useQuery(ALL_DRINKS)
    const drinks = resultAllDrinks.data.allDrinks
    const result = useQuery(FIND_DRINK, {
        variables: { drinkToSearch },
        skip: !drinkToSearch,
    })
    if (drinkToSearch && result.data)  {
        console.log("drink found: ", result.data)
        return <div>{result.data}</div>
    }

    return (
        <div>
            <h2>Drinks</h2>
            {drinks.map((drink) => (
                <div key={drink.name}>
                    {drink.name}
                    <button onClick={() => setDrinkToSearch(drink.name)}>
                        show drink
                    </button>
                </div>
            ))}
        </div>
    )
}

export default DrinkInfoPage
