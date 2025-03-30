//Fibonaci sequence w/o recursion

const Fibo = (num, array=[0,1])=>{
    while(num>2){
        const [next2Last, last] = array.slice(-2);
        array.push(next2Last+last);
        num-=1;
    }
    return array;
}
console.log(Fibo(12));

//Fibonaci sequence w/ recursion

const Fib = (num, array=[0,1])=>{
    if (num<=2){
        return array;
    }
        const [next2Last, last] = array.slice(-2);
        return Fib(num-1,[...array, next2Last+last]);
}
console.log(Fib(12));

//Fibonacci with iteration, find the nth number

const Fibn=(n)=>{
    if (n===0) return 0;
    if (n===1) return 1;
    if (n===2) return [0,1];
    let arr = [0,1];
    for(let i =2; i<n; i+=1){
        const [last2next, last] = arr.slice(-2);
        arr.push(last2next+last);
    }
    return arr[n];
}
console.log(Fibn(11));

//Fibonacci with recursion, only n as input. find the nth number
const FibPos=(pos)=>{
    if (pos<=1) return pos
    return FibPos(pos-1) + FibPos(pos-2);
}

//const Fibbb=pos=> pos<=1 ? pos: Fibbb(pos-1) +  Fibbb(pos-2);
console.log(FibPos(11));