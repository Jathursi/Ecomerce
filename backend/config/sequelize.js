import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('ecommerce', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    connectTimeout: 60000 
  }
});

// Set max_allowed_packet after connection is established
sequelize.authenticate().then(async () => {
  try {
    await sequelize.query("SET GLOBAL max_allowed_packet=104857600"); // Set to 100 MB, adjust as needed
    console.log("Connection established and max_allowed_packet set.");
  } catch (error) {
    console.error("Error setting max_allowed_packet:", error);
  }
}).catch((error) => {
  console.error("Unable to connect to the database:", error);
});

export default sequelize;
