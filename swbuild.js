const fs = require("fs/promises");

const readWriteFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath);
    await fs.writeFile(
      filePath,
      `importScripts('https://ssl.widgets.webengage.com/js/service-worker.js');\n${data.toString()}`
    );
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
};

readWriteFile("public/sw.js");
