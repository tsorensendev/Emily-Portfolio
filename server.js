const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(`${__dirname}/public`));
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/', (req, res) =>{
  res.sendFile('index.html');
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
