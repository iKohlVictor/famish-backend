import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'famish',
  password: 'GWWnhwnZHJ',
  database: 'famish',
  synchronize: false,
  logging: true,
  entities: ['src/modules/**/entities/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});

dataSource
  .initialize()
  .then(() => {
    console.log('Connected');
  })
  .catch((err) => console.log(err));
export default dataSource;
