const FibPos=(pos)=>{
    if (pos<=1) return pos
    return FibPos(pos-1) + FibPos(pos-2);
}

//const Fibbb=pos=> pos<=1 ? pos: Fibbb(pos-1) +  Fibbb(pos-2);
console.log(FibPos(11));