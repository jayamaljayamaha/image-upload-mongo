import request from "supertest";
import app from "../app";

describe("POST /api/create", () => {
  it("returns 200 on a succesfull db record create for pic1", (done) => {
    request(app)
      .post("/api/create")
      .set("Content-Type", "multipart/form-data")
      .attach("file", "./src/test/images/pic1.jpg")
      .expect(200)
      .then((res) => {
        expect(res.body.file.guid).not.toBeNull();
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("returns 200 on a succesfull db record create for pic2", (done) => {
    request(app)
      .post("/api/create")
      .set("Content-Type", "multipart/form-data")
      .attach("file", "./src/test/images/pic2.jpg")
      .expect(200)
      .then((res) => {
        expect(res.body.file.guid).not.toBeNull();
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("returns 200 on a succesfull db record create for pic3", (done) => {
    request(app)
      .post("/api/create")
      .set("Content-Type", "multipart/form-data")
      .attach("file", "./src/test/images/pic3.jpg")
      .expect(200)
      .then((res) => {
        expect(res.body.file.guid).not.toBeNull();
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
