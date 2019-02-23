const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1pdjmbb94c0cg"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://65pez0tk3e.execute-api.us-east-1.amazonaws.com/dev/notes"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_kamo6m2F8",
    APP_CLIENT_ID: "6p44ll2fohvk1glffeeg7338lj",
    IDENTITY_POOL_ID: "us-east-1:93e2bf88-e528-438b-816c-5ad9864c8ab4"
  }
};

const prod = dev

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};