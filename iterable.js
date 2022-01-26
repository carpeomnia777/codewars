function uniqueInOrder(iterable){
    //init new array for returning
    let arr = []
    //loop through each item in the argument
    //check if neighbor is the same or different
    for(let i = 0; i < iterable.length;i++){
        let first = iterable[i]
        let next = iterable[i + 1]
        if(first != next){
            arr.push(first)
          // i = 0, i + 1 = 1 A A A A ... i = 4, B
        }
    }
    return arr
}