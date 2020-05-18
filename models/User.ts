import { Model, BuildOptions, DataTypes } from "sequelize";
import db from "../config/db";

//Interfaxe for the User Model

interface UserModel extends Model {
  readonly id: number;
  username: string;
  password: string;
}

type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
};

const User = <UserModelStatic>db.define("user", {
  username: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

export default User;
