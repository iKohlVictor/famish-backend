export default () => {
  return {
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    database: {
      type: process.env.DATABASE_TYPE || 'mysql',
      user: process.env.DATABASE_USER,
      name: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT as string, 10) || 3306,
      password: process.env.DATABASE_PASSWORD,
      sync: false,
      autoLoadEntities: true,
    },
  };
};
