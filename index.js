const express = require ('express');
const app = express();

app.use(express.json());

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

app.get('/api/names/:id', (req, res) => {
   const name = names.find(c => c.id === parseInt(req.params.id));
   if (!name) res.status(404).send('No name was found');
   res.send(name)
});

app.post('/api/names', (req, res) => {
    const name = {
        id: names.length + 1,
        name: req.body.name
    };
    names.push(name);
    res.send(name);
});




const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));