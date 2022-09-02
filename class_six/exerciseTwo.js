//reversible inclusive list

function reversibleInclusiveList(start, end){
    const outputArray = [];
    if(start < end){
        for(i = start; i <=end; i++){
            outputArray.push(i);
        }
    }else{
        for(i = end; i>=start; i--){
            outputArray.push(i)
        }
    }
    console.log(outputArray);
}

reversibleInclusiveList(5,10);
reversibleInclusiveList(24,17);