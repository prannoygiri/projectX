
const Redis = require("ioredis");
const {IOREDIS_CONFIG} = require('../constants');

let client = new Redis({
  host: process.env.REDIS_HOST || "redis",
  port: process.env.REDIS_PORT || 6379,
});


module.exports = {
  client,
}
