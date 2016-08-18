const express = require('express');
const app = express();
app.use(express.static(__dirname));
app.listen(8080, '0.0.0.0', function () {
    console.log('dev server listening on http://localhost:8080');
});
