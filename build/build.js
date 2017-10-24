var markdown = require( "markdown" ).markdown;
var fs = require('fs');
var stream = fs.createWriteStream("index.html");
stream.once('open', function(fd) {
    fs.readFile('src/index.md', 'utf8', function (err,data) {
        var content = markdown.toHTML(data);
        stream.write(content);
        stream.end();
    });
});