//jshint ejsversion:6
exports.getDate = function(){
    
const today = new Date();

    const options = {

        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return day = today.toLocaleDateString("eng-US", options);

};

exports.getDay = function (){
    
    const today = new Date();
    
        const options = {
    
            weekday: "long",
        };
        
        return day = today.toLocaleDateString("eng-US", options);
    }