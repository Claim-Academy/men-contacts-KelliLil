import dotenv from "dotenv";

dotenv.config();

export default {
  getDbConnectionString(db) {
    return `${process.env.DB_CONN}/${db}?retryWrites=true&w=majority`;
  },
};
