module.exports = ({ env }) => ({
  proxy: true,
  url: env("MY_HEROKU_URL"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "73ac2a4d26d3a89c46858d7af7aea698"),
    },
  },
});
