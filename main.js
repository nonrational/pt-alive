#!/usr/bin/env node

const os = require('os');
const winston = require('winston');
require('winston-syslog');

require('dotenv').config();

const papertrail = new winston.transports.Syslog({
  host: process.env.PT_HOST,
  port: process.env.PT_PORT,
  protocol: 'tls4',
  localhost: os.hostname(),
  eol: '\n',
});

const logger = winston.createLogger({
  format: winston.format.simple(),
  levels: winston.config.syslog.levels,
  transports: [papertrail],
});

console.log("ok, i'm ready")
logger.info("ok, i'm ready");

const ping = setInterval(() => {
  console.log("yup, still here")
  logger.info("yup, still here");
}, 60000);


