module.exports = {
  server: {
    port: 3000,
  },
  auth: {
    secret: '',
  },
  db: {
    mongodb: {
      url: process.env.MONGO_URL,
      opts: {},
      debug: false,
    },
  },
  log: {
    console: {
      level: 'silent',
    },
  },
};
