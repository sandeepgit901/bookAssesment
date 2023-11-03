const Book = require('../models/bookModel');

// Create a new book
exports.addNewBook = async (req, res) => {
  const { title, author } = req.body;
  const existingBook = await Book.findOne({ title, author });

  if (existingBook) {
    return res.status(400).send({ message: 'Book with the same title and author already exists' });
  }
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).send({ message: 'Book details successfully added', book: newBook });
  } catch (err) {
    res.status(400).send({ err: 'Incorrect id' });
  }
};

// Get a list of all books
exports.getAllBooksDetails = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send({ message: 'List of all books details fetched successfully', books });
  } catch (err) {
    res.status(500).send({ err: 'Incorrect id' });
  }
};

// Get details of a specific book by ID
exports.getBookDetailsById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send({ error: 'Book not found' });
    }
    res.status(200).send({ message: 'Book details fetched successfully', book });
  } catch (err) {
    res.status(500).send({ err: 'Incorrect id' });
  }
};

// Update a book's details
exports.updateBookDetailsById = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).send({ error: 'Book not found' });
    }
    res.status(200).send({ message: 'Book details successfully updated', book });
  } catch (err) {
    res.status(400).send({ err: 'Incorrect id' });
  }
};

// Delete a book
exports.deleteBookById = async (req, res) => {
  try {
    const book = await Book.findByIdAndRemove(req.params.id);
    if (!book) {
      return res.status(404).send({ error: 'Book not found' });
    }
    res.status(200).send({ message: 'Book is deleted successfully' });
  } catch (err) {
    res.status(500).send({ err: 'Incorrect id' });
  }
};
