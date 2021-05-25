const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express()
const port = 5000

// fix cors issue
app.use(cors())

// for body parser access
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/get-data', async (req, res) => {
    const query = `{
                     allTypes {
                                id
                                name
                                Movies {
                                         id
                                         name
                                         director
                                         length
                                         series
                                         banner
                                        }
                                }
                     }`
    const response = await fetch('http://localhost:3000', {
        method: 'POST',
        body: {query: query}
    })

    const data = await response.json();

    if (response.status === 200) {
        res.status(200).send(JSON.stringify(data));
    } else {
        res.sendStatus(500)
    }
})

app.post('/add-movie', async(req, res) => {
    const data = req.body;
    const typeName = '"' + data.typeName + '"';
    const typeIdQuery = `{
                            allTypes(filter: {name: ${typeName}}) {
                                id
                            }
                          }`

    const typeIdResponse = await fetch('http://localhost:3000', {
        method: 'POST',
        body: {query: typeIdQuery}
    })

    const typeResponse = await typeIdResponse.json();

    if (typeIdResponse.status === 200) {
        const typeId = Number(typeResponse.allTypes[0].id);
        const name = '"' + data.name + '"';
        const director = '"' + data.director + '"';
        const banner = '"images/no.jpg"';
        const addMovieMutation = `
                            mutation {
                                        createMovie(name: ${name}, director: ${director}, length: ${data.length},
                                         series: ${data.series}, banner: ${banner}, 
                                         type_id: ${typeId}) {
                                                                name
                                                                director
                                                             }
                                     }`
        const response = await fetch('http://localhost:3000', {
            method: 'POST',
            body: {query: addMovieMutation}
        })

        const data = await response.json();

        if (response.status === 200) {
            res.status(200).send(JSON.stringify(data));
        } else {
            res.sendStatus(500)
        }
    } else {
        res.sendStatus(500)
    }
})

app.delete('/remove-movie', async(req, res) => {
    const movieIdToRemove = Number(req.body.movieId);
    const removeMovieMutation = `mutation {
                            removeMovie(id:${movieIdToRemove}) {
                                name
                            }
                        }`
    const response = await fetch('http://localhost:3000', {
        method: 'POST',
        body: {query: removeMovieMutation}
    });

    const data = await response.json();

    if (response.status === 200) {
        res.status(200).send(JSON.stringify(data));
    } else {
        res.sendStatus(500)
    }
})

app.listen(port, () => {
    console.log(`Movies playing on http://localhost:${port}`)
})
