import {User} from "../../Models";
import { comparePassword,generateToken } from "../../utils";

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    let isPasswordCorrect = await comparePassword(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Wrong password",
      });
    }

    let token = generateToken({
      _id: user._id,
    });

    res.status(200).json({
      message: "User logged in successfully",
      access_token: token,
      user: {
        email: user.email,
        location: user.location,
        fullNames: user.fullNames
      },
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};