module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Render expects 0.0.0.0 for hosting
  port: env.int('PORT', 1337),  // Default port
  app: {
    keys: env.array('APP_KEYS', ['gqRWPizWrCB/sbBVlp690xl+HIPQ1UWAxrsttwjbn+I=', 'rAFHN7dFMOyCO9TbflAbMDaXYf5dqcIg1OVAXWVfy8o=']), // Replace with secure keys
  },
});
