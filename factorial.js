//Get the factorial of a number

const factorfact = (n)=>{
    //base case
    if(n===0){
        return 1;
    }

    return n * factorfact(n-1);
}

console.log(factorfact(3));

//O(n) => linear time complexity