var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
  title: 'Article One',
  heading:'First article',
  content:
            
                'This is a paragraph'
    },
    'article-two' : {
        title: 'Article Two',
  heading:'Second article',
  content:
            
                'This is a paragraph'
    },
    'article-three' : {title: 'Article three',
  heading:'First article',
  content:
            
                'This is a paragraph'
    }
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = '<html> <title>${title}</title><link href="/ui/style.css" rel="stylesheet" /><body><div class = "everything"><h1>${heading}</h1><p>${content}</p></div></html>';
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get(':/articleName',function(req,res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
