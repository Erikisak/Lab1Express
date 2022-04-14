const express = require ('express');
const app = express();

app.use(express.json());

const persons= [
    { id: 1, name: 'Erik'},
    { id: 2, name: 'Tilda'},
    { id: 3, name: 'Max'},
];

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/persons', (req, res) => {
    res.send(persons);
});

app.post('/api/persons', (req, res) => {

    const name = {
        id: persons.length + 1,
        name: req.body.name
    };
    persons.push(name);
    res.send(name);
});

app.put('/api/persons/:id', (req, res) => {
    const name = persons.find(c => c.id === parseInt(req.params.id));
   if (!name) res.status(404).send('No name was found');

   name.name = req.body.name;
   res.send(name);
});

app.delete('/api/persons/:id', (req,res) => {
    const name = persons.find(c => c.id === parseInt(req.params.id));
    if (!name) return res.status(404).send('the course with the given ID was not found');

    const index = persons.indexOf(name);
    persons.splice(index, 1);

    res.send(name);
});




app.get('/api/persons/:id', (req, res) => {
   const name = persons.find(c => c.id === parseInt(req.params.id));
   if (!name) res.status(404).send('No name was found');
   res.send(name);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));