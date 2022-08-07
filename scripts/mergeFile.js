#!/usr/bin/env node
const fs = require("fs");
const process = require("process");

const mergeFiles = (target, folder, filename) => {
  fs.readdir(folder, (err, files) => {
    if (err) console.log(err);
    else {
      let content = "[";

      files.forEach((file, idx) => {
        if (idx) {
          content += ",";
        }

        const data = fs.readFileSync(`${folder}/${file}/${filename}`, "utf8");
        content += data;
      });

      content += "]";
      fs.writeFileSync(target, content);
    }
  });
};

const { argv } = process;

if (argv.length !== 5) {
  console.log(
    "Usage : [target] [path to plant folder] [name of files to concat]"
  );
  return 0;
}

const target = argv[2];
const folder = argv[3];
const filename = argv[4];

mergeFiles(target, folder, filename);
