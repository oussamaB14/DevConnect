import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export default (): MysqlConnectionOptions => ({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User, Post],
  synchronize: false, // Set to false in production
  logging: ['error'], // Log only errors in production
  ssl: {
    rejectUnauthorized: false, // You might need this if using a service like Heroku
  },
});
