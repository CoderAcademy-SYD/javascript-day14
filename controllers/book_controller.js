const BookModel = require("../database/models/book_model");

async function create(req, res) {
    //logic for creating a resource
    let {name, author} = req.body;
    let book = await BookModel.create({ name, author })
        .catch(err => res.status(500).send(err));

    res.redirect("/books");
}

async function index(req, res) {
    //showed a list of all the resources
    let books = await BookModel.find();
    res.render("book/index", {books});
}

function make(req, res) {
    //shows the form to create the resource
    res.render("book/new");
}

async function show(req, res) {
    let { id } = req.params;
    let book = await BookModel.findById(id).populate("author");
    console.log(book);
    res.render("book/show", { book });
}

async function destroy(req, res) {
    let { id } = req.params;
    await BookModel.findByIdAndRemove(id);
    res.redirect("/books");
}

async function update(req, res) {
    let { id } = req.params;
    let { name } = req.body;

    await BookModel.findByIdAndUpdate(id, {name});
    res.redirect(`/books/${id}`);
}

async function edit(req, res) {
    let { id } = req.params;
    const book = await BookModel.findById(id);
    res.render("book/edit", { book });
}

module.exports = {
    create,
    index,
    make,
    show,
    destroy,
    update,
    edit
}