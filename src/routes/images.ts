import express from "express";
import { Request, Response, NextFunction } from "express";
import upload from "../storage/MulterStorage";
import * as GridFsService from "../services/GridFsService";
import * as GetImages from "../middlewares/GetImages";

const router = express.Router();

router.post(
  "/create",
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    delete req.file?.id;
    const file = {
      ...req.file,
      guid: req.file?.filename,
    };
    res.json({ file: file });
  }
);
router.get(
  "/read/:imageId",
  (req: Request, res: Response, next: NextFunction) => {
    const imageId = req.params.imageId;
    GridFsService.findOneByGuid(imageId)
      .then((file) => {
        if (!file || file.length === 0) {
          return res.status(404).json({
            error: "No File Exists",
          });
        }
        delete file[0]?._id;
        file[0].guid = imageId;
        return res.json(file);
      })
      .catch((err) => {
        return res.status(500).json({
          error: `Server error ${err}`,
        });
      });
  }
);
router.patch(
  "/update/:imageId",
  GetImages.getImageIdByFimeName,
  (req: Request, res: Response, next: NextFunction) => {
    const imageId = req.params.imageId;
    GridFsService.removeOneByGuid(imageId)
      .then((guid) => {
        next();
      })
      .catch((err) => {
        return res.status(500).json({
          error: `Error when updating image ${err}`,
        });
      });
  },
  upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    delete req.file?.id;
    const file = {
      ...req.file,
      guid: req.file?.filename,
    };
    res.json({ file: file });
  }
);
router.delete(
  "/delete/:imageId",
  GetImages.getImageIdByFimeName,
  (req: Request, res: Response, next: NextFunction) => {
    const imageId = req.params.imageId;
    GridFsService.removeOneByGuid(imageId)
      .then((guid) => {
        return res.json({ guid: req.params.fileName });
      })
      .catch((err) => {
        return res.status(500).json({
          error: `Error when deleting image ${err}`,
        });
      });
  }
);

export default router;
