const express = require('express');
const app = express();

//const port = process.event.PORT || 3000


app.use('/', require('./routes'));


//app.listen(port, () => {
  //      console.log(`Server is running on port ${port}`)
//});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
}); 