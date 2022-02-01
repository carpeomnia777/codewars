//write a function that reverses the order of first name and last.

function nameShuffler(str){
    let shuffle = str.split(' ')
    return shuffle.reverse().join(' ')
  }

//easy peezy, simple split with a space to denote spliting at a space point then reverse the new array which will only have two elements in this example. reverse and join 