const path = require("path")
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const cluster = require('cluster')
const CronJob = require('cron').CronJob
const cronConfig = require('./config/cron.json')

if (cluster.isMaster) {
      console.log(`Master ${process.pid} is running`);
  
      for (const job of cronConfig.jobs) {
          const worker = cluster.fork();
          worker.send(job);
      }
  
      cluster.on('exit', (worker, code, signal) => {
          console.log(`worker ${worker.process.pid} died`);
        });
  } else if (cluster.isWorker) {
      process.on('message', (msg) => {
          startJob(msg)
      });
  }
  
  const startJob = (jobConfig) => {
      console.log(`Starting job ${jobConfig.name} with process id ${process.pid}`);
      const job = new CronJob(jobConfig.cron, () => {
            console.log("Hello")
        }, null, true);
  }
  
  process.on('uncaughtException', (err, origin) => {
      console.log(err, origin)
  });