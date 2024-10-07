/* eslint-disable react/prop-types */

import { TableContainer, Table, TableBody,TableRow, Button, TableCell, Paper } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const DisplayDrinkType = ({ drinkType, drinks }) => {
    const [ searchName, setSearchName ] = useState('')
    const [ searchType, setSearchType ] = useState('')
    const [ searchProducer, setSearchProducer ] = useState('')
    const [ searchYear, setSearchYear ] = useState('')
    const [ searchCountry, setSearchCountry ] = useState('')

    const handleSearchName = (event) => setSearchName(event.target.value)
    const handleSearchType = (event) => setSearchType(event.target.value)
    const handleSearchProducer = (event) => setSearchProducer(event.target.value)
    const handleSearchYear = (event) => setSearchYear(event.target.value)
    const handleSearchCountry = (event) => setSearchCountry(event.target.value)

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell><h3>Name</h3> <input value={searchName} onChange={handleSearchName} /></TableCell>
                            <TableCell><h3>Type</h3> <input value={searchType} onChange={handleSearchType} /></TableCell>
                            <TableCell><h3>Producer</h3> <input value={searchProducer} onChange={handleSearchProducer} /></TableCell>
                            <TableCell><h3>Year</h3> <input value={searchYear} onChange={handleSearchYear} /></TableCell>
                            <TableCell><h3>Country</h3> <input value={searchCountry} onChange={handleSearchCountry} /></TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        {drinks
                            .filter(drink => drink.name.toLowerCase().includes(searchName.toLowerCase()))
                            .filter(drink => drink.type.toLowerCase().includes(searchType.toLowerCase()))
                            .filter(drink => drink.producer.toLowerCase().includes(searchProducer.toLowerCase()))
                            .filter(drink => searchYear == ''
                                ? drink
                                : drink.year.toString().includes(searchYear.toString())
                                    ? drink.year
                                    : null)
                            .filter(drink => drink.country.toLowerCase().includes(searchCountry.toLowerCase()))
                            .map(drink => 
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
