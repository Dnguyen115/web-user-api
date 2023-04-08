module.exports = {
	secret: process.env.SECRET || 'my-secret-key',
	jwt: {
	  secret: process.env.JWT_SECRET || 'my-jwt-secret-key',
	  expiresIn: '1d'
	}
  };