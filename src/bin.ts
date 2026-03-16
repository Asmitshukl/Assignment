import cluster from "cluster"
import  os  from "os"
import { app } from "./index.js";

const numcpu=os.cpus().length;
const PORT=3000;

if(cluster.isPrimary){
    for(let i=0;i<numcpu;i++){
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
}else{
    app.listen(PORT,()=>{console.log("started")});
}