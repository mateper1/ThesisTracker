const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require ('cors');
const knex = require('knex');

const db= knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '1234',
    database : 'baza'
  }
});

/*db.select('*').from('users').then(data => {
	console.log(data);
});
*/
const app= express();
app.use(bodyParser.json());
app.use(cors());

const database = {
	users: [
		{
			id:'123',
			name:'Mate',
			password: '1234',
			email:'mate@gmail.com',
			joined: new Date()
		},
		{
			id:'1234',
			name:'Ante',
			password:'12345',
			email:'ante@gmail.com',
			joined: new Date()
		}
	],
	login : [
		{
			id:'987',
			hash: '',
			email: 'john@gmail.com'
		}
	]
}
 
app.get('/', (req,res) => {
	res.send(database.users);
})

app.post('/signin', (req, res)=> {
	db.select('email', 'hash').from('login')
	.where('email', '=', req.body.email)
	.then(data => {
		const isValid  = bcrypt.compareSync(req.body.password, data[0].hash);
		if (isValid) {
			return db.select('*').from('users')
			.where('email', '=' , req.body.email)
			.then(user => {
				console.log(user);
				res.json(user[0]);
			})
			.catch(err => res.status(400).json('Korisnik nije dohvaćen'))
		}else {
		res.status(400).json('Krivi podaci');
	}
	})
	.catch(err => res.status(400).json('Krivi podaci'))
})

app.post('/register', (req,res) => {
	const {email ,name , password, faculty, mentor, nameofthesis} = req.body;
	const hash = bcrypt.hashSync(password);
	db.transaction(trx => {
		trx.insert({
			hash : hash,
			email: email
		})
		.into('login')
		.returning('email')
		.then(loginEmail => {
			return trx('users')
			.returning('*')
			.insert({
				email: loginEmail[0],
				name: name,
				joined: new Date(),
				faculty: faculty,
				mentor: mentor,
				nameofthesis: nameofthesis
					})
			.then(user => {
				res.json(user[0]);
			})
		})
		.then(trx.commit)
		.catch(trx.rollback)
})
	.catch(err => res.status(400).json('unable to register'));
})
app.get('/profile/:id', (req ,res) => {
	const {id} = req.params;
	db.select('*').from('users').where({
		id: id
	}).then(user => {
		console.log(user);
		if(user.length) {
			res.json(user[0])
		} else {
			res.status(400).json('Nije pronađen')
		}
	}).catch(err => res.status(400).json('Greška prilikom dohvaćanja'));
})

app.put('/profile/:id', async (req ,res) => {
	const {id} = req.params;
	const subjectData = req.body
	const {
        analitics,
        consult,
        programming,
        projecting,
        projectplan,
        reading,
        rest,
        testing,
        writingaction,
        writingdocumentation,
    } = subjectData
    const result = analitics+consult+programming+projecting+projectplan+reading+rest+testing+writingaction+writingdocumentation
	const users = await db('users').where('id', '=' , id)
	.update({
		...subjectData,
		result:result
	})
	.catch(err => res.status(400).json('cannot get values'))
	return res.json(users);
})

app.listen(3006, ()=> {
	console.log('all good,working on 3006');
})

