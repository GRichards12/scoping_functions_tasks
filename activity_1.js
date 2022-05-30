const log = () => {
    console.log("Hello Codenation");
}

const repeat = (log, rpt) => {
    for(i = 0; i < rpt; i++){
        log();
    }
}
repeat(log,5);