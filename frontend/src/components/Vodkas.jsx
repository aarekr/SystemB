import { useQuery } from "@apollo/client"
import { ALL_DRINKS } from "./queries"
import { DisplayDrinkType } from "./DisplayDrinkType"

const Vodkas = () => {
    const result = useQuery(ALL_DRINKS)

    if (result.loading)  {
        return <div>loading...</div>
    }

    let allVodkas = []
    for(let i=0; i<result.data.allDrinks.length; i++) {
        if (result.data.allDrinks[i].type == 'Vodka') {
            allVodkas = allVodkas.concat(result.data.allDrinks[i])
        }
    }

    return (
        <div>
            <DisplayDrinkType drinkType={'Vodka'} drinks={allVodkas} />
        </div>
    )
}

export default Vodkas
