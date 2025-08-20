const sql = require('mssql');

const config = {
  user: process.env.AZURE_SQL_USER || '',
  password: process.env.AZURE_SQL_PASSWORD || '',
  server: process.env.AZURE_SQL_SERVER || '',
  database: process.env.AZURE_SQL_DATABASE || '',
  options: {
    encrypt: true
  }
};

async function insertScore(submissionId, judgeId, total) {
  if(!config.server) throw new Error('Azure SQL not configured');
  const pool = await sql.connect(config);
  const req = pool.request();
  await req.input('submissionId', sql.VarChar, submissionId)
           .input('judgeId', sql.VarChar, judgeId)
           .input('total', sql.Int, total)
           .query(`INSERT INTO Leaderboard(submissionId, judgeId, totalScore, createdAt) VALUES(@submissionId,@judgeId,@total, GETUTCDATE())`);
  await pool.close();
}

module.exports = { insertScore };
