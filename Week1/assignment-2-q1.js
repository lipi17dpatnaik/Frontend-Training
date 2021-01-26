function reorderArray(A,B) {
    //clone array A
    const output =[...A];
    let index;
    for(index=0;index<B.length;index++){
        output[B[index]]=A[index];
    }
    return output;
}

//test
let A=['B','C','A'];
let B=[1,2,0];
console.log(reorderArray(A,B));
