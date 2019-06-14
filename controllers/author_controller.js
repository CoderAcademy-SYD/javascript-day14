const AuthorModel = require("./../database/models/author_model");

async function create(req, res) {
    //logic for creating a resource
    let {name, bio, gender} = req.body;
    let author = await AuthorModel.create({ name, bio, gender })
        .catch(err => res.status(500).send(err));

    res.redirect("/authors");
}

async function index(req, res) {
    //showed a list of all the resources
    let authors = await AuthorModel.find();
    res.render("author/index", {authors});
}

function make(req, res) {
    //shows the form to create the resource
    res.render("author/new");
}

async function show(req, res) {
    let { id } = req.params;
    let author = await AuthorModel.findById(id);
    res.render("author/show", { author });
}

async function destroy(req, res) {
    let { id } = req.params;
    await AuthorModel.findByIdAndRemove(id);
    res.redirect("/authors");
}

async function update(req, res) {
    let { id } = req.params;
    let { name, bio, gender } = req.body;

    await AuthorModel.findByIdAndUpdate(id, {name, bio, gender});
    res.redirect(`/authors/${id}`);
}

async function edit(req, res) {
    let { id } = req.params;
    const author = await AuthorModel.findById(id);
    res.render("author/edit", { author });
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