import { Model, BuildOptions, DataTypes } from "sequelize";
import db from "../config/db";

// Interface Of the GigModel to use define.
interface GigModel extends Model {
  readonly id: number;
  title: string;
  technologies: string;
  description: string;
  budget: string;
  contact_email: string;
}
// StaticModel in order to use findOne, and all methods
type GigModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): GigModel;
};

const Gig = <GigModelStatic>db.define("gig", {
  title: {
    type: DataTypes.STRING,
  },
  technologies: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  budget: {
    type: DataTypes.STRING,
  },
  contact_email: {
    type: DataTypes.STRING,
  },
});

export default Gig;
