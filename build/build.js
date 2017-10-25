var markdown = require( "markdown" ).markdown;
var fs = require('fs');
var stream = fs.createWriteStream("index.html");
stream.once('open', function(fd) {
    fs.readFile('build/head', 'utf8', function (err,data) {
        stream.write(data);
        fs.readFile('src/index.md', 'utf8', function (err,data) {
            var content1 = markdown.toHTML(data);
            stream.write(content1);
            fs.readFile('build/foot', 'utf8', function (err,data) {
                stream.write(data);
                stream.end();
            });
        });
    });
    
});