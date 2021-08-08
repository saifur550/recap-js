function friendsName(names){
    let largeName =names[0];
    // for (const i of names){
    //     if (i.length > largeName.length){
    //         largeName = i;
    //     }
        
    // }
    for (let i =0; i < names.length; i++){
        if (names[i].length > largeName.length){
            largeName=names[i];
        }
    }
    return largeName;
}


const name =["said", "shohel","Sabbir","hakim"];
let bigName = friendsName(name);
console.log(bigName)
