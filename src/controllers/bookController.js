 const Book = require('../models/bookModel.js');

// Create a new book
exports.createBook = async (req, res) => {
  try {
    // Check if a book with the same title and author already exists
    const existingBook = await Book.findOne({
      title: req.body.title,
      author: req.body.author,
    });

    if (existingBook) {
      // If a book with the same title and author exists, return a message
      return res.status(400).json({ error: 'Book already exists' });
    }

    // If no book with the same title and author exists, create and save the new book
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a list of all books
exports.getAllBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).json(books);
};

// Get details of a specific book by ID
exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  res.status(200).json(book);
};

// Update a book's details by id api
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a book api
exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndRemove(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    // If the book was successfully deleted, provide a success message
    res.status(200).json({ message: 'Book is deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

