const BookModel = require("./../database/models/book_model");

async function create(req, res) {
    let { bookId } = req.params;
    let { body } = req.body;

    let book = await BookModel.findById(bookId);
    book.comments.push({ body });

    await book.save();

    res.redirect(`/books/${bookId}`);
}

module.exports = {
    create
}