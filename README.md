# AWS-S3-Nodejs

get/put/delete object (file) with aws-s3-lambda nodejs

To create package.json npm init

To Run Install Following Dependency:- aws-sdk

To Install dependency : npm install dependencyName --save (like: npm install aws-sdk --save)

Configuring Buckets:-
// create CORS params
CORSConfiguration: {CORSRules: corsRules}
  corsRules: define rules
  
Policy: JSON.stringify(readOnlyAnonUserPolicy)
  readOnlyAnonUserPolicy:
  
  var readOnlyAnonUserPolicy = {
    Version: "2012-10-17",
    Statement: [
      {
        Sid: "AddPerm",
        Effect: "Allow",
        Principal: "*",
        Action: [
          "s3:GetObject"
        ],
        Resource: [
          ""
        ]
      }
    ]
  };
  
  
For More https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-examples.html
