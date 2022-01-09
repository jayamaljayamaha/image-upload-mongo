import request from "supertest";
import app from "../app";

describe("DELETE /delete/:imageId", () => {
  it("returns 200 on a succesfull deletion of pic1", (done) => {
    request(app)
      .post("/api/create")
      .set("Content-Type", "multipart/form-data")
      .attach("file", "./src/test/images/pic1.jpg")
      .then((res) => {
        return request(app)
          .delete(`/api/delete/${res.body.file.guid}`)
          .set("Accept", "application/json")
          .expect(200);
      })
      .then((res) => {
        expect(res.body.guid).not.toBeNull();
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  it("returns 200 on a succesfull deletion of pic1", (done) => {
    request(app)
      .post("/api/create")
      .set("Content-Type", "multipart/form-data")
      .attach("file", "./src/test/images/pic2.jpg")
      .then((res) => {
        return request(app)
          .delete(`/api/delete/${res.body.file.guid}`)
          .set("Accept", "application/json")
          .expect(200);
      })
      .then((res) => {
        expect(res.body.guid).not.toBeNull();
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
  it("returns 200 on a succesfull deletion of pic3", (done) => {
    request(app)
      .post("/api/create")
      .set("Content-Type", "multipart/form-data")
      .attach("file", "./src/test/images/pic3.jpg")
      .then((res) => {
        return request(app)
          .delete(`/api/delete/${res.body.file.guid}`)
          .set("Accept", "application/json")
          .expect(200);
      })
      .then((res) => {
        expect(res.body.guid).not.toBeNull();
        done();
      })
      .catch((err) => {
        done(err);
      });
  });
});
