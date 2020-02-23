const config = {
  dbUrl: process.env.DB_URL || 'mongodb+srv://db_user_trades:Wpk63rUUzEo6@cluster0-zinxd.mongodb.net/trades_db?retryWrites=true&w=majority',
  host: process.env.HOST || 'http://localhost',
  port: process.env.PORT || 3000,
  publicRoute: process.env.PUBLIC_ROUTE || '/app',
  filesRoute: process.env.FILES_ROUTE || 'files',
};

module.exports = config;
