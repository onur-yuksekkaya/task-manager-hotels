import { Sequelize } from "sequelize";
import { BgGreen, FgBlack, Reset } from "./logColors";

import User from "../models/User";
import Task from "../models/Task";

const sequelize = new Sequelize(process.env.DB_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: (...msg) => {
    console.log("-------------");
    console.log(BgGreen + FgBlack, msg[0], Reset);
    console.log("-------------");
  },
});

export const sync = () => {
  sequelize.sync().then(() => {
    console.log("Database initialized.");
  });
};

const db = {
  Sequelize,
  sequelize,
  user: User(sequelize),
  task: Task(sequelize),
  sync,
};

export default db;
