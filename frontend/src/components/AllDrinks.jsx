import { useQuery } from '@apollo/client'
import { ALL_DRINKS } from './queries'

const AllDrinks = () => {
    const result = useQuery(ALL_DRINKS)

    if (result.loading)  {
        return <div>loading...</div>
    }

    return ( 
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Producer</th>
                        <th>Established</th>
                        <th>Country</th>
                    </tr>
                </tbody>
                {result.data.allDrinks.map(d => 
                    <tbody key={d.name}>
                        <tr>
                            <td>{d.name}</td>
                            <td>{d.type}</td>
                            <td>{d.producer}</td>
                            <td align="center">{d.year}</td>
                            <td>{d.country}</td>
                        </tr>
                    </tbody>
                )}
            </table>
            <p>Drinks in sortiment: {result.data.allDrinks.length}</p>
        </div>
    )
}

export default AllDrinks
