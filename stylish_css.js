var express	 = require('express'),
    app    	 = express(),
    dir 	 = process.argv[3],
    port 	 = process.argv[2];

app.use(require('stylus').middleware(dir));
app.use(express.static(dir));

app.listen(port);


