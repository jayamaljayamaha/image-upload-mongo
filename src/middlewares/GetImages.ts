import { Request, Response, NextFunction } from "express";
import * as GridFsService from "../services/GridFsService";
export const getImageIdByFimeName = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const imageId = req.params.imageId;
  GridFsService.findOneByGuid(imageId)
    .then((file) => {
      if (!file || file.length === 0) {
        return res.status(404).json({
          error: "No File Exists",
        });
      }
      req.params.imageId = file[0]._id;
      req.params.fileName = imageId;
      next();
    })
    .catch((err) => {
      return res.status(500).json({
        error: `Server error ${err}`,
      });
    });
};
