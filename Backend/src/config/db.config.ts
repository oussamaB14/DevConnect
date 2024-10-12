//import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { registerAs } from '@nestjs/config';
import { User } from '../user/entities/user.schema';
import { Post } from '../post/entities/post.schema';
import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

// export default registerAs(
//   'dbconfig.dev',
//   (): MysqlConnectionOptions => ({
//     type: 'mysql',
//     host: process.env.DB_HOST,
//     port: parseInt(process.env.DB_PORT),
//     username: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     synchronize: true,
//     entities: [User, Post],
//   }),
// );
export default registerAs(
  'dbconfig.dev',
  (): MongoConnectionOptions => ({
    type: 'mongodb',
    url: process.env.MANGO_DB_URL,
    database: process.env.MANGO_DB_NAME,
    synchronize: true,
    entities: [User, Post],
  }),
);
