import * as crypto from 'crypto';

const generateSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

export const jwtSecrets = {
  secret: generateSecret(),
};