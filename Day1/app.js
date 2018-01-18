/*console.log("console print");
var result = 2+2;

var work = function(){
    console.log("working hard");
};
var dowork = function(f){
    console.log("starting");
    try{
    f();
}
catch(ex){
    console.log(ex); 
}
    console.log("ending")
};
dowork(work());
dowork(work);*/
/*var program = function() {*/
  (function(){                /* to avoid global varable iffy immediate invoke function invoked */
var createworker = function(){
    var workcount = 0;

    var task1 = function(){
        workcount += 1;
        console.log("task 1" + workcount);
    };

    var task2 = function(){
        workcount += 1;
        console.log("task2" + workcount);
    };

    return{
        job1: task1,
        job2: task2
    };

};

var worker = createworker();

worker.job1();
worker.job2();
worker.job2();
worker.job2();
worker.job2();

}());
/*program(); */ 








































