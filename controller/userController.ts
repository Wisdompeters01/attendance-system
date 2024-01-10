import { Request, Response } from "express";

import userModel from "../model/userModel";
import { Types } from "mongoose";

export const createAttendance = async (req: Request, res: Response) => {
  try {
    const { name, role } = req.body;

    const staff = await userModel.create({
      name,
      role,
    });
    return res.status(201).json({
      msg: "create attendance",
      data: staff,
    });
  } catch (error) {
    console.log(error);
  }
};

// export const getAttendance = async (req: Request, res: Response) => {
//   try {
//     const { name, role } = req.body;

//     const staff = await userModel.get({
//       name,
//       role,
//     });
//     return res.status(201).json({
//       msg: "create attendance",
//       data: staff,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
