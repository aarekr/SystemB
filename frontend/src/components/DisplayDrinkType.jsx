/* eslint-disable react/prop-types */

import { TableContainer, Table, TableBody,TableRow, Button, TableCell, Paper } from '@mui/material'
import { Link } from 'react-router-dom'

export const DisplayDrinkType = ({ drinkType, drinks }) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell><h3>Name</h3></TableCell>
                            <TableCell><h3>Type</h3></TableCell>
                            <TableCell><h3>Producer</h3></TableCell>
                            <TableCell><h3>Year</h3></TableCell>
                            <TableCell><h3>Country</h3></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        {drinks.map(drink => 
                            <TableRow key={drink.name}>
                                <TableCell><Button variant="outlined" 
                                    component={Link} to="/drinkinfopage">Info</Button></TableCell>
                                <TableCell>{drink.name}</TableCell>
                                <TableCell>{drink.type}</TableCell>
                                <TableCell>{drink.producer}</TableCell>
                                <TableCell align="center">{drink.year}</TableCell>
                                <TableCell>{drink.country}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <p>{drinkType == 'All' ? 'Drinks' : `${drinkType}s`} in sortiment: {drinks.length}</p>
        </div>
    )
}
