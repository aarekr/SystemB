import { useQuery } from '@apollo/client'
import { ALL_DRINKS } from './queries'
import { DisplayDrinkType } from "./DisplayDrinkType"

const AllDrinks = () => {
    const result = useQuery(ALL_DRINKS)

    if (result.loading)  {
        return <div>loading...</div>
    }

    return (
        <div>
            <DisplayDrinkType drinkType={'All'} drinks={result.data.allDrinks} />
        </div>
    )
}

export default AllDrinks
