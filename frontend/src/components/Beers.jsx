import { useQuery } from "@apollo/client"
import { ALL_DRINKS } from "./queries"
import { DisplayDrinkType } from "./DisplayDrinkType"

const Beers = (props) => {
    const result = useQuery(ALL_DRINKS)

    if (!props.show) {
        return null
    }

    if (result.loading)  {
        return <div>loading...</div>
    }

    let allBeers = []
    for(let i=0; i<result.data.allDrinks.length; i++) {
        if (result.data.allDrinks[i].type == 'Beer') {
            allBeers = allBeers.concat(result.data.allDrinks[i])
        }
    }

    return (
        <div>
            <DisplayDrinkType drinkType={'Beer'} drinks={allBeers} />
        </div>
    )
}

export default Beers
