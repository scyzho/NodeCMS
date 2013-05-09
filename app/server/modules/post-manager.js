
var moment = require('moment');
var db = require('./databaseconnect');

var post = db.collection('post');

/* ViewPost  methods */
exports.GetAllPost = function(callback)
{
	post.find().toArray(
		function(e, res) {
		callback(res);
	});
};

/* paginate content */
exports.paginateContent = function(plimit,pskip,callback)
{
	post.find().sort({_id:-1}).limit(plimit).skip(pskip).toArray(
		function(e, res) {
		callback(res);
	});
};

/* Post content to mongodb */
exports.AdminPostContent = function(adminposttitle,adminpostcontent,post_author,post_type,callback){
	var post_date = moment().format('LLL');
	post.insert( {
		   post_title: adminposttitle,
		   post_content: adminpostcontent,
		   post_date: post_date,
		   post_author: post_author,
		   post_type: post_type,
	},function(e,o){console.log(o)});
}
