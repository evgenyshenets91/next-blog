const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const nextConfig = phase => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'dbUser',
        mongodb_password: 'EDQV5MHGEQUjbRZW',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'contact-form-development',
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'dbUser',
      mongodb_password: 'EDQV5MHGEQUjbRZW',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'contact-form',
    },
  };
};

module.exports = nextConfig;
