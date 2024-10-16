import * as jwt from "jsonwebtoken";

interface IJwtData {
  uuid: string;
  isEmpresa: boolean;
}

const sign = (data: IJwtData) => {
  console.log(data);
  if (!process.env.JWT_SECRET) {
    return "JWT_SECRET_NOT_FOUND";
  }
  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: "2h" });
};

const verify = (data: string) => {
  if (!process.env.JWT_SECRET) {
    return "JWT_SECRET_NOT_FOUND";
  }

  try {
    const decoded = jwt.verify(data, process.env.JWT_SECRET);
    if (typeof decoded === "string") {
      return "INVALID_TOKEN";
    }

    return decoded as IJwtData;
  } catch (error) {
    return "INVALID_TOKEN";
  }
};

export const JWTService = {
  sign,
  verify,
};
