const app = require("./app");
const ip = require("ip");

const dotenv = require("dotenv");
dotenv.config();
const ENV_VARS = process.env;
const PORT = process.env.API_PORT || 5000;
const APP_ENV = process.env.APP_ENV;
const ipAddress = ip.address();

console.log(ENV_VARS);

app.listen(PORT, () => {
  console.log(
    `Server listening on http://${ipAddress}:${PORT} http://localhost:${PORT}`
  );
  console.log(`Environment: ${APP_ENV}`);
});
