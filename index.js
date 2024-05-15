const { server } = require("./src/app");

const { PORT = 5000 } = process.env;

start();

async function start() {
  try {
    server.listen(PORT, () => {
      console.log(`Use port ${PORT}`);
    });
  } catch (error) {
    console.log(error.massage);
    process.exit(1);
  }
}
