const getSecretKeyJWT = () => {
  return process.env.SECRET_KEY_JWT;
};

module.exports = { getSecretKeyJWT };
