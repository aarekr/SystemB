import { useQuery } from "@apollo/client"
import { ALL_DRINKS } from "./queries"
import { DisplayDrinkType } from "./DisplayDrinkType"

const Ciders = () => {
    const result = useQuery(ALL_DRINKS)

    if (result.loading)  {
        return <div>loading...</div>
    }

    let allCiders = []
    for(let i=0; i<result.data.allDrinks.length; i++) {
        if (result.data.allDrinks[i].type == 'Cider') {
            allCiders = allCiders.concat(result.data.allDrinks[i])
        }
    }

    return (
        <div>
            <DisplayDrinkType drinkType={'Cider'} drinks={allCiders} />
        </div>
    )
}

export default Ciders
