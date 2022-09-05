//reversible inclusive list
function reversibleInclusiveList(a, b){
    const outputArray = [];
    if(a < b){
        for(i = a; i <=b; i++){
            outputArray.push(i);
        }
    }else{
        for(i = a; i>=b; i--){
            outputArray.push(i)
        }
    }
    console.log(outputArray);
}

reversibleInclusiveList(2,8);
reversibleInclusiveList(24,17);