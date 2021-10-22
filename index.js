const express = require('express')
const cors = require('cors');
const { json } = require('express');
const app = express()

app.use(cors());
app.use(express.json());

const port = 5000;  

app.get('/', (req, res) => {
	res.send('nodemon lpo lppo achen kire bhai restart hoccishna ken')
})


const users = [
	{
		id: 0,
		name: 'Shabana',
		email: 'shaba@gmail.com',
		phone: '034234239483'
	},
	{
		id: 1,
		name: 'sonia',
		email: 'sonia@gmail.com',
		phone: '034234239483'
	},
	{
		id: 2,
		name: 'Sabnam',
		email: 'sabnam@gmail.com',
		phone: '034234239483'
	},
	{
		id: 3,
		name: 'shakira',
		email: 'shaba@gmail.com',
		phone: '034234239483'
	},


]


app.get('/users', (req, res) => {
	const search = req.query.search;
	// console.log(req.query.search)

	if (search) {
		const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
		res.send(searchResult);
	} else {
		res.send(users)
	}

	// res.send(users)
});

//app.METHOD
app.post('/users',(req,res)=>{
	const newUser = req.body;
	newUser.id = users.length;
	users.push(newUser);
	console.log('hitting the post',req.body);
	// res.send('inside post');
	// res.send(JSON.stringify(newUser))
	res.json(newUser);

})


//dynamic api
app.get('/users/:id', (req, res) => {
	const id = req.params.id;
	const user = users[id];
	res.send(user);
	// console.log(req.params.id);
})

app.get('/fruits', (req, res) => {
	res.send(['mango', 'oranges', 'banana', 'apple'])
})


app.get('/fruits/mangoes/fazli', (req, res) => {
	res.send('Yummy Yummy tok marka fazli');
})







app.listen(port, () => {
	console.log('listeing to port ', port);
})