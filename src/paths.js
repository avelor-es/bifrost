'use strict';

const path = require('path');
const os   = require('os');
const fs   = require('fs');

const CONFIG_DIR  = process.env.BIFROST_CONFIG_DIR || path.join(os.homedir(), '.config', 'bifrost');
const CONFIG_FILE = path.join(CONFIG_DIR, 'config.json');
const TOKENS_FILE = path.join(CONFIG_DIR, 'tokens.json');
const PID_FILE    = path.join(CONFIG_DIR, 'bifrost.pid');
const LOG_FILE    = path.join(CONFIG_DIR, 'bifrost.log');

function ensureDir() {
  fs.mkdirSync(CONFIG_DIR, { recursive: true });
}

module.exports = { CONFIG_DIR, CONFIG_FILE, TOKENS_FILE, PID_FILE, LOG_FILE, ensureDir };
