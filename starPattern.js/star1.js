// * 
// * * 
// * * *
let n=3;
// for(let r=1;r<=n;r++){
//     for(let c=1;c<=r;c++){
//         process.stdout.write("* ")
//     }
//     console.log("");
// }

// * * *  
// * * * 
// * * *
// for(let r=1;r<=n;r++){
//     for(let c=1;c<=n;c++){
//         process.stdout.write("* ")
//     }
//     console.log("");
// }

//* * *
//* *
//*
// for(let r=1;r<=n;r++){
//     for(let c=n;c>=r;c--){
//         process.stdout.write("* ")
//     }
//     console.log("")
// }

//     * 
//   * * 
// * * *
// for(let r=1;r<=n;r++){
//     //space
//     for(let s=1;s<=n-r;s++){
//         process.stdout.write("_ ")
//     }
//     //star
//     for(let c=1;c<=r;c++){
//         process.stdout.write(c+" ")
//     }
//     console.log("");  
// }

//* * *
//  * *
//    *
// for(let r=1;r<=n;r++){
//     //space
//     for(let s=1;s<r;s++){
//         process.stdout.write("_ ")
//     }
//     //star
//     for(let c=3;c>=r;c--){
//         process.stdout.write("* ")
//     }
//     console.log("");
// }


//   *
//  ***
// *****
//*******
n=4;
for (let r=1;r<=n;r++){
    //dot
    for(let d=n-1;d>=r;d--){
        // process.stdout.write(".")
        process.stdout.write(" ")
    }
    //star
    for(let s=1;s<=r*2-1;s++){
        process.stdout.write("*")
    }
    console.log()
}

//    *
//   * *
//  * * *
// * * * *
n=4
for(let r=1;r<=n;r++){
    //space
    for(let s=n-1;s>=r;s--){
        process.stdout.write(" ")
    }
    //star
    for(let c=1;c<=r*2-1;c++){
        if(c%2==0){
            // process.stdout.write("_")
            process.stdout.write(" ")
        }
        else{
            process.stdout.write("*")
        }
    }
    console.log();
    
}