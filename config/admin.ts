export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bsXhrLhAJCRxA5cWvS6utk9IBOdW+W60sjJDSXOHcms='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'FCM19jFouKgwneVSz58Qo3hWGXRrE5dAwPZ6WiK+ho4='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'Coo/OiUIN5VwVRx8+lkg9Y4e4EHxfJLYRhIN7jyEXBA='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
