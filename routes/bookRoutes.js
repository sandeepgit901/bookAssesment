const express = require('express');
const router = express.Router();
const bookController = require('../src/controllers/bookController');

router.post('/addbook/', bookController.addNewBook);
router.get('/getallbooks/', bookController.getAllBooksDetails);
router.get('/getbookdetails/:id', bookController.getBookDetailsById);
router.put('/updatebook/:id', bookController.updateBookDetailsById);
router.delete('/deletebook/:id', bookController.deleteBookById);

module.exports = router;
