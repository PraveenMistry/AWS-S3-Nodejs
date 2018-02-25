var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    // TODO implement

    var s3 = new AWS.S3();
    
    var params = {
        Bucket: "test-bucket"
    };
    s3.deleteBucket(params, function(err, data) {
       if (err) console.log(err, err.stack); // an error occurred
       else     console.log(data);           // successful response
    });

	console.log(event);

	console.log('done..')
    callback(null, 'Hello from Lambda');
};