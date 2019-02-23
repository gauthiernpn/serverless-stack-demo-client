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
    IDENTITY_POOL_ID: "us-east-1:d9e70760-b2f8-4b81-8ede-e81802de3076"
  }
};

const prod = {
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
    IDENTITY_POOL_ID: "us-east-1:d9e70760-b2f8-4b81-8ede-e81802de3076"
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