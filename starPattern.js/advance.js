//    *
//   * *
//  *   *
// *******
n=4;
// for(let r=1;r<=n;r++){
//     //space
//     for(let s=1;s<=n-r;s++){
//         process.stdout.write(".")
//     }
//     //star
//     for(let c=1;c<=r*2-1;c++){
//         if(c===1 || c===r*2-1){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write("-")
//         }
//     }
//     console.log();
// }

//    *
//   * *
//  *   *
// *     *
//  *   *
//   * *
//    *

function p2(){
    n=4
    //top
    for(let r=1;r<=n;r++){
        let line=""
        //space
        for(let s=1;s<=n-r;s++){
            line+="."
        }
        //star
        for(let c=1;c<=2*r-1;c++){
            if(c===1 || c===2*r-1){
                line+="*"
            }
            else{
                line+=" "
            }
        }
        console.log(line);
    }
    //bottom
    for(let r=1;r<n;r++){
        let line=""
        //space
        for(let s=1;s<=r;s++){
            line+="."
        }
        //star
        for(let c=1;c<=((n-r)*2-1);c++){
            if(c===1||c==((n-r)*2-1)){
                line+="*"
            }
            else{
                line+=" "
            }
        }
        console.log(line);
        
    }
}
// p2()

//    1
//   1 2
//  1 2 3
// 1 2 3 4
function p3(){
    n=4;
    for(let r=1;r<=n;r++){
        let line=""
        //space
        for(let s=1;s<=n-r;s++){
            line+="."
        }
        //numbers
        for(let n=1;n<=r;n++){
            line += n + "-";
        }
        console.log(line);
    }
}
// p3()

//       1
//      1 1
//     1 2 1
//    1 3 3 1
//   1 4 6 4 1
function p4(){
    let n=5
    for(let r=1;r<=n;r++){
        let line=""
        //space
        for(let s=1;s<=n-r;s++){
            line+=" "
        }
        //number
        for(let n=1;n<=r;n++){
            line+=n+" "
        }
        console.log(line);
        
    }
}
p4()