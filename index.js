//create a function that usese the find() method 
//takes in an array of objects 

//function is called superBowlWin()

function superbowlWin(record){
    const result = record.find(obj => obj.result === "W");
    if (result) {
        return result.year;
    } else {
        return undefined;
    }
}




    
