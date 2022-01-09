import app from "./app";
import os from "os";

const PORT = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3000;
const HOST = process.env.APP_HOST
  ? process.env.APP_HOST === "localhost"
    ? os.hostname()
    : process.env.APP_HOST
  : os.hostname();

app.listen(PORT, () => {
  console.log(`Code service is listning on  ${HOST}:${PORT}`);
});
