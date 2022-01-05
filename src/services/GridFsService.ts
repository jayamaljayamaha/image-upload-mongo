import mongoose from "mongoose";
import Grid from "gridfs-stream";
const DB_HOST = process.env.DAT_HOST ? process.env.DAT_HOST : "localhost";
const DB_PORT = process.env.DAT_PORT ? process.env.DAT_PORT : 27017;

let GFS: any;

export const promise = mongoose.connect(
  `mongodb://${DB_HOST}:${DB_PORT}/images`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

export const init = () => {
  const connect = mongoose.connection;
  connect.once("open", () => {
    GFS = Grid(connect, mongoose.mongo);
    GFS.collection("uploads");
    console.log("gridFs js connection made successfully");
  });
};

export const findOneByGuid = (imageId: string) => {
  return new Promise<Array<any>>((resolve, reject) => {
    GFS.files
      .find({ filename: imageId })
      .toArray((err: Error, file: Array<any>) => {
        if (err) {
          reject(err);
        } else {
          resolve(file);
        }
      });
  });
};

export const removeOneByGuid = (imageId: string) => {
  return new Promise<string>((resolve, reject) => {
    GFS.files.deleteOne(
      { _id: new mongoose.Types.ObjectId(imageId) },
      (err: Error, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(imageId);
        }
      }
    );
  });
};
