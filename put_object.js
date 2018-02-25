var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    // TODO implement
    var s3 = new AWS.S3();
    var params = {Bucket: 'test-bucket', Key: 'hello.txt', Body: 'Hello!'};
    s3.putObject(params, function(err, res) {
        if (err) {
            console.log("Error uploading data: ", err);
        } else {
            console.log('Successfully');
            console.log(res)
        }
    });
    
	console.log(event);
	console.log('done..')
    callback(null, 'Hello from Lambda');
};