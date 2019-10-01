
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

  }
}

// knex migrate:make
// knex migrate:latest
