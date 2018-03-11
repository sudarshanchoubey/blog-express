var fs = require('fs');
var sqlite3 = require('sqlite3')
var db = new sqlite3.Database('./blog.db')

const GetPostSQL = 'select posts.title, post_content.content_url from posts inner join post_content ON posts.id=post_content.id'

var posts = {};
posts.getAllPosts = function() {
  var postsFromDb = []
  db.each(GetPostSQL, (err, row) => {
    if (err !== undefined) {
      console.log(err);
    }
    var post = {title: row.title, url: row.content_url};
    postsFromDb.push(post);
  });
  console.log(postsFromDb);
  return postsFromDb;
};

module.exports = posts;