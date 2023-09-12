import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';


// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Configuración de Sequelize para PostgreSQL
export const db = new Sequelize("postgres://postgres:Eldopeeldope_1@localhost:5432/franco", {
  dialect: 'postgres', // Especifica el dialecto de la base de datos
  logging: false, // Puedes activar o desactivar los registros de las consultas SQL
});


export const User = db.define('user', {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }})
  
db.sync()



