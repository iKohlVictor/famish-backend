module.exports = {
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'migrations',
    entitiesDir: 'src/modules/**/entities',
  },
  entities: ['src/modules/**/entities/*.entity.ts'],
};
