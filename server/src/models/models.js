import { DataBase } from "../db/db.js";
import { DataTypes } from "sequelize";

const User = DataBase.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: "ADMIN" },
  },
  {
    freezeTableName: true,
    tableName: "Users",
  },
);

const Announcement = DataBase.define(
  "announcement",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    body_year: {
      type: DataTypes.INTEGER,
    },
    volume: {
      type: DataTypes.FLOAT,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    advertisementArticle: {
      type: DataTypes.STRING,
    },
    detailNumber: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    discount: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    partCondition: {
      type: DataTypes.BOOLEAN,
    },
    VIN: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    tableName: "Announcements",
  },
);

const TypeDetail = DataBase.define(
  "typeDetail",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    tableName: "TypeDetails",
  },
);

const Car = DataBase.define(
  "car",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    tableName: "Cars",
  },
);

const Fuel = DataBase.define(
  "fuel",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    tableName: "Fuels",
  },
);

const Transmission = DataBase.define(
  "transmission",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    tableName: "Transmissions",
  },
);

const Body = DataBase.define(
  "body",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    tableName: "Bodys",
  },
);

Body.hasMany(Announcement);
Announcement.belongsTo(Body);

Transmission.hasMany(Announcement);
Announcement.belongsTo(Transmission);

Fuel.hasMany(Announcement);
Announcement.belongsTo(Fuel);

TypeDetail.hasMany(Announcement);
Announcement.belongsTo(TypeDetail);

export { User, Announcement, TypeDetail, Car, Transmission, Body, Fuel };
