Service Information
service: notes-app-2-api
stage: dev
region: us-east-1
stack: notes-app-2-api-dev
api keys:
  None
endpoints:
  POST - https://yckniowp52.execute-api.us-east-1.amazonaws.com/dev/notes
  GET - https://yckniowp52.execute-api.us-east-1.amazonaws.com/dev/notes/{id}
  GET - https://yckniowp52.execute-api.us-east-1.amazonaws.com/dev/notes
  PUT - https://yckniowp52.execute-api.us-east-1.amazonaws.com/dev/notes/{id}
  DELETE - https://yckniowp52.execute-api.us-east-1.amazonaws.com/dev/notes/{id}
  POST - https://yckniowp52.execute-api.us-east-1.amazonaws.com/dev/billing
functions:
  create: notes-app-2-api-dev-create
  get: notes-app-2-api-dev-get
  list: notes-app-2-api-dev-list
  update: notes-app-2-api-dev-update
  delete: notes-app-2-api-dev-delete
  billing: notes-app-2-api-dev-billing
layers:
  None

Stack Outputs
AttachmentsBucketName: notes-app-2-api-dev-attachmentsbucket-citqkeljv53h
UserPoolClientId: 1hm44744t6o6gp8ldaq7m5uamf
UserPoolId: us-east-1_WTwXYRfDO
DeleteLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:054894922385:function:notes-app-2-api-dev-delete:3
CreateLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:054894922385:function:notes-app-2-api-dev-create:3
GetLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:054894922385:function:notes-app-2-api-dev-get:3
UpdateLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:054894922385:function:notes-app-2-api-dev-update:3
IdentityPoolId: us-east-1:d9e70760-b2f8-4b81-8ede-e81802de3076
BillingLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:054894922385:function:notes-app-2-api-dev-billing:3
ListLambdaFunctionQualifiedArn: arn:aws:lambda:us-east-1:054894922385:function:notes-app-2-api-dev-list:3
ServiceEndpoint: https://yckniowp52.execute-api.us-east-1.amazonaws.com/dev
ServerlessDeploymentBucketName: notes-app-2-api-dev-serverlessdeploymentbucket-kbcf7rhnb99

const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-citqkeljv53h"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://yckniowp52.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_WTwXYRfDO",
    APP_CLIENT_ID: "1hm44744t6o6gp8ldaq7m5uamf",
    IDENTITY_POOL_ID: "d9e70760-b2f8-4b81-8ede-e81802de3076"
  }
};

const prod = {
  s3: {
    REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "YOUR_PROD_API_GATEWAY_REGION",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "YOUR_PROD_COGNITO_REGION",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};