var express = require('express');
//var posts = require('../posts')
var router = express.Router();

const GetPostSQL = 'select posts.title, post_content.content_url from posts inner join post_content ON posts.id=post_content.id'

/* GET home page. */
router.get('/', function(req, res, next) {
  var sqlite3 = require('sqlite3')
  var db = new sqlite3.Database('./blog.db')
  db.all(GetPostSQL, (err, rows) => {
    var postsFromDB = [];
    console.log(err);
    console.log(rows);
    rows.forEach(row => {
      var post = {title: row.title, url: row.content_url};
      postsFromDB.push(post);
    });
    res.render('index', { title: 'SudarshanChoubey.com', static_posts: postsFromDB });
  });
});

module.exports = router;
