import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Carga las variables de entorno desde el archivo .env
dotenv.config();

// Configuración de Sequelize para PostgreSQL
const sequelize = new Sequelize("postgres://postgres:Eldopeeldope_1@localhost:5432/franco", {
  dialect: 'postgres', // Especifica el dialecto de la base de datos
  logging: false, // Puedes activar o desactivar los registros de las consultas SQL
});

export { sequelize };
