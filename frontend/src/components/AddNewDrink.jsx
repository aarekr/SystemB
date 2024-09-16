import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { ADD_DRINK } from './queries';
import { useMutation } from '@apollo/client';

const AddNewDrink = () => {
    const [ name, setName ] = useState('')
    const [ type, setType ] = useState('')
    const [ producer, setProducer ] = useState('')
    const [ year, setYear ] = useState('')
    const [ country, setCountry ] = useState('')

    const [ addDrink ] = useMutation(ADD_DRINK)

    const submit = async (event) => {
        event.preventDefault()
        addDrink({ variables: { name, type, producer, year, country } })
        setName('')
        setType('')
        setProducer('')
        setYear('')
        setCountry('')
    }

    return (
        <div>
            <h2>Add a new drink</h2>
            <form onSubmit={submit}>
                <div>
                name <input value={name}
                    onChange={({ target }) => setName(target.value)}
                />
                </div>
                <div>
                type <input value={type}
                    onChange={({ target }) => setType(target.value)}
                />
                </div>
                <div>
                producer <input value={producer}
                    onChange={({ target }) => setProducer(target.value)}
                />
                </div>
                <div>
                year <input value={year}
                    onChange={({ target }) => setYear(target.value)}
                />
                </div>
                <div>
                country <input value={country}
                    onChange={({ target }) => setCountry(target.value)}
                />
                </div>
                <button type='submit'>add!</button>
            </form>
            <hr />
            <form>
                <TextField
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    onChange={(e) => setName(e.target.value)}
                /><br />
                <TextField
                    label="Type"
                    variant="outlined"
                    margin="normal"
                /><br />
                <TextField
                    label="Producer"
                    variant="outlined"
                    margin="normal"
                /><br />
                <TextField
                    label="Year"
                    variant="outlined"
                    margin="normal"
                /><br />
                <TextField
                    label="Country"
                    variant="outlined"
                    margin="normal"
                /><br />
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >Add to drinks
                </Button>
            </form>
        </div>
    )
}

export default AddNewDrink
