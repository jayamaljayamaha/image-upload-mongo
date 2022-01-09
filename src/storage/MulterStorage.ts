const { randomBytes } = require("crypto");
import path from "path";
import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import { Request } from "express";
import { promise } from "../services/GridFsService";

const getStorage = () => {
  var storage = new GridFsStorage({
    db: promise,
    file: (req: Request, file: any) => {
      const fileName = req.params.fileName;
      return new Promise((resolve, reject) => {
        randomBytes(16, (err: Error, buf: Buffer) => {
          if (err) {
            return reject(err);
          }
          const filename = fileName
            ? fileName
            : buf.toString("hex") +
              path.extname(file.originalname.split(".")[0]);

          const fileInfo = {
            filename: filename,
            bucketName: "uploads",
          };
          resolve(fileInfo);
        });
      });
    },
  });
  return multer({ storage });
};

export default getStorage;
