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


module.exports = {
    create,
    index,
    make
}