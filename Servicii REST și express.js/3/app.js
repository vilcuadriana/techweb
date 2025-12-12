const express = require('express')
const Book = require('./Book')
const app = express()
const port = 3000

const bookRouter = express.Router()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', bookRouter)

let books = [
    new Book(1, "Dune", "sf", "Frank Herbert"),
    new Book(2, "Robinson Crusoe", "adventure", "Daniel Defoe"),
    new Book(3, "Foundation", "sf", "Asimov")
]


bookRouter.route('/books')
    .get((req, res) => {
        let filteredBooks = [];
        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre === req.query.genre)
        } else {
            filteredBooks = books;
        }
        res.json(filteredBooks);
    })

    .post((req, res) => {
        let newBook = new Book(req.body.id, req.body.name, req.body.genre, req.body.author);

        books.push(newBook);
        console.log(books);
        return res.json(newBook);
    })


bookRouter.route('/books/:bookId')
    .put((req, res) => {
        let bookModif = books.find(e => e.id === Number(req.params.bookId));

        if (!bookModif) {
            return res.status(404).json({ error: "Book not found" });
        }

       
        if (req.body.name)      bookModif.name = req.body.name;
        if (req.body.genre)     bookModif.genre = req.body.genre;
        if (req.body.author)    bookModif.author = req.body.author;

        return res.json(bookModif);
    })

  
    .delete((req, res) => {
        const id = Number(req.params.bookId);

        const index = books.findIndex(b => b.id === id);

        if (index === -1) {
            return res.status(404).json({ error: "Book not found" });
        }

        const removed = books.splice(index, 1)[0];

        return res.json({
            message: "Book deleted successfully",
            deletedBook: removed
        });
    });

app.get('/', (req, res) => {
    res.send('Welcome to my API')
})

app.listen(port, () => {
    console.log('Running on the port ' + port)
})
