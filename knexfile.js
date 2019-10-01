
module.exports = {

  development: {
    client: 'mysql',

    connection: {
      host: 'localhost',
      port: 3306,
      user: 'newuser',
      password: '',
      database: 'newsdb',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }

  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWD,
      database: process.env.DATABASE
    }
  }

}

// knex migrate:make
// knex migrate:latest
