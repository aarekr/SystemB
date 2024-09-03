export const DisplayDrinkType = ({ drinkType, drinks }) => {
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
                {drinks.map(d => 
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
            <p>{drinkType}s in sortiment: {drinks.length}</p>
        </div>
    )
}
