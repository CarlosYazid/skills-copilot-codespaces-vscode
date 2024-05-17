// I want create a web server
const express = require('express');
const app = exprgitess();

app.use(express.json()); // for parsing application/json

// Route to return all comments
app.get('/comments', (req, res) => {
  // Code to retrieve all comments from the database
  // and send them as a response
});

// Route to return a single comment
app.get('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  // Code to retrieve the comment with the given id
  // from the database and send it as a response
});

// Route to add a comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  // Code to add the new comment to the database
  // and send a success response
});

// Route to update a comment
app.put('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  const updatedComment = req.body;
  // Code to update the comment with the given id
  // in the database and send a success response
});

// Route to delete a comment
app.delete('/comments/:id', (req, res) => {
  const commentId = req.params.id;
  // Code to delete the comment with the given id
  // from the database and send a success response
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});