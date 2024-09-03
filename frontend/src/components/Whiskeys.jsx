import { useQuery } from "@apollo/client"
import { ALL_DRINKS } from "./queries"
import { DisplayDrinkType } from "./DisplayDrinkType"

const Whiskeys = (props) => {
    const result = useQuery(ALL_DRINKS)

    if (!props.show) {
        return null
    }

    if (result.loading)  {
        return <div>loading...</div>
    }

    let allWhiskeys = []
    for(let i=0; i<result.data.allDrinks.length; i++) {
        if (result.data.allDrinks[i].type == 'Whiskey') {
            allWhiskeys = allWhiskeys.concat(result.data.allDrinks[i])
        }
    }

    return (
        <div>
            <DisplayDrinkType drinkType={'Whiskey'} drinks={allWhiskeys} />
        </div>
    )
}

export default Whiskeys
