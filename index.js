let bodyParser = require('body-parser');
let mong = require('mongoose');
let ex = require('express');
let app = ex();
//route
app.use(bodyParser.json());
app.use('/', function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

let surattugasRoute = require('./surattugas/surattugasRoute.js');
app.use('/api',surattugasRoute);

let tipepegawaiRoute = require('./tipepegawai/tipepegawaiRoute.js');
app.use('/api',tipepegawaiRoute);

let pegawaiRoute = require('./pegawai/pegawaiRoute.js');
app.use('/api',pegawaiRoute);

let surattugasrinciRoute = require('./surattugasrinci/surattugasrinciRoute.js');
app.use('/api',surattugasrinciRoute);

let gedungRoute = require ('./gedung/gedungRoute.js');
app.use('/api', gedungRoute);

let gedungRinciRoute = require ('./gedungRinci/gedungRinciRoute.js');
app.use('/api', gedungRinciRoute);

let aplikasiDetailRoute = require('./aplikasiDetail/aplikasiDetailRoute.js');
app.use('/api', aplikasiDetailRoute);

mong.connect('mongodb://localhost:27017/DBPelatihan');
app.listen(8820);