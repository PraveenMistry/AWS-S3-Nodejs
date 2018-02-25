var AWS = require('aws-sdk');

exports.handler = (event, context, callback) => {
    // TODO implement

    var s3 = new AWS.S3();
    var params = {
    Bucket: "test-bucket", 
    Key: "hello.txt"
    };
    s3.getObject(params, function(err, data) {
       if (err) console.log(err, err.stack); // an error occurred
       else     console.log(data.Body.toString('utf-8'));           // successful response
       
    //   byte to string below
    // data.Body.toString('utf-8')
    });

	console.log(event);

	console.log('done..')
    callback(null, 'Hello from Lambda');
};