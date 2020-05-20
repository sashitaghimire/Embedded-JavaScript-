//jshint ejsversion:6

console.log(module);

function getDate(){
    
let today = new Date();

    let options = {

        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    let day = today.toLocaleDateString("eng-US", options);

    return day;

}