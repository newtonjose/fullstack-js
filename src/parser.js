import fs from "fs";
import csv from "csv-parser";
import path from "path";

const parserCsv = async (fileName) => {
  return new Promise(function (resolve, reject) {
    const rows = [];
    const data = [];

    fs.createReadStream(path.resolve(`./data/${fileName}.csv`))
      .pipe(csv())
      .on("data", (row) => {
        rows.push(row);
      })
      .on("end", () => {
        for (let i = 0; i < rows.length; i++) {
          const [[keys, values]] = Object.entries(rows[i]);

          const headers = keys.split(";");
          const row = values.split(";");

          const obj = {};
          for (let j = 0; j < row.length; j++) {
            obj[headers[j]] = row[j];
          }

          data.push(obj);
        }

        console.log({ data });
        resolve(data);
      })
      .on("error", reject);
  });
};

export { parserCsv };
