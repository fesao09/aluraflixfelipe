const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// ...existing code...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
