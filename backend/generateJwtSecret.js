const crypto = require('crypto');
console.log(crypto.randomBytes(64).toString('hex')); // Generates a 64-byte JWT secret
