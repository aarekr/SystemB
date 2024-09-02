import { useQuery } from "@apollo/client"
import { ALL_DRINKS } from "./queries"

const Vodkas = (props) => {
    const result = useQuery(ALL_DRINKS)

    if (!props.show) {
        return null
    }

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
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Producer</th>
                        <th>Established</th>
                        <th>Country</th>
                    </tr>
                </tbody>
                {allVodkas.map(d => 
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
            <p>Vodkas in sortiment: {allVodkas.length}</p>
        </div>
    )
}

export default Vodkas
