let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')

let app = express()
let router = express.Router()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)

const array = [
    { id: 1, name: "Ionuț", age: 25 },
    { id: 2, name: "Alex", age: 18 },
    { id: 3, name: "Mihai", age: 13 },
    { id: 4, name: "Marcel", age: 12 },
    { id: 5, name: "Marius", age: 22 }
]

// ✅ Endpoint existent — returnează lista întreagă
router.route('/getList').get((req, res) => {
    res.json(array)
})

// ✅ Endpoint existent — adaugă un element nou
router.route('/postList').post((req, res) => {
    let el = req.body
    el.id = array.length + 1
    array.push(el)
    res.json(el)
})

// 🆕 Nou endpoint — returnează un element după ID
router.route('/getById/:id').get((req, res) => {
    let id = parseInt(req.params.id)
    let item = array.find(el => el.id === id)

    if (item) {
        res.json(item)
    } else {
        res.status(404).json({ message: `Resursa cu id=${id} nu a fost găsită` })
    }
})

let port = 8000
app.listen(port)
console.log(`API is running on port ${port}`)
