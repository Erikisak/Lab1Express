const express = require ('express');
const app = express();

const names= [
    { id: 1, name: 'Erik'},
    { id: 2, name: 'Tilda'},
    { id: 3, name: 'Max'},
];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/names', (req, res) => {
    res.send(names);
});

app.listen(3000, () => console.log('Listening on port 3000...') )