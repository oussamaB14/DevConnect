import { Post } from 'src/post/entities/post.schema';
import { User } from 'src/user/entities/user.schema';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';
//import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

// export default (): MysqlConnectionOptions => ({
//   type: 'mysql',
//   host: process.env.DB_HOST,
//   port: parseInt(process.env.DB_PORT),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE,
//   entities: [User, Post],
//   synchronize: false, // Set to false in production
//   logging: ['error'], // Log only errors in production
//   ssl: {
//     rejectUnauthorized: false, // You might need this if using a service like Heroku
//   },
// });
export default (): MongoConnectionOptions => ({
  type: 'mongodb',
  url: process.env.MANGO_DB_URL,
  database: process.env.MANGO_DB_NAME,
  synchronize: false,
  entities: [User, Post],
});
