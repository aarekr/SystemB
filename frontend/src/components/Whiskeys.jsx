import { useQuery } from "@apollo/client"
import { ALL_DRINKS } from "./queries"

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
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Producer</th>
                        <th>Established</th>
                        <th>Country</th>
                    </tr>
                </tbody>
                {allWhiskeys.map(d => 
                    <tbody key={d.name}>
                        <tr>
                            <td>{d.name}</td>
                            <td>{d.producer}</td>
                            <td align="center">{d.year}</td>
                            <td>{d.country}</td>
                        </tr>
                    </tbody>
                )}
            </table>
            <p>Whiskeys in sortiment: {allWhiskeys.length}</p>
        </div>
    )
}

export default Whiskeys
