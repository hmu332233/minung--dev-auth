module.exports = {
  server: {
    port: 3000,
  },
  auth: {
    secret: '',
  },
  db: {
    mongodb: {
      url: '',
      opts: {},
      debug: true,
    },
  },
  log: {
    console: {
      level: 'trace',
    },
  },
};
