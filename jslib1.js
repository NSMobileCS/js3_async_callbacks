function each(arr, callback) {
    // loop through the array
    for(let i = 0; i < arr.length; i++) {
      callback(arr[i]); // invoking the callback many times... delegation!
    }
  }

  var _ = {
    map: function(arr, callback) {
        let outArr = [];
        for (let idx = 0; idx < arr.length; idx++){
            outArr.push(callback(arr[idx]));
        }
        return outArr;
    },
    reduce: function(arr, reductionCallback, memo) { 
        if (memo === undefined){
            memo = 1;
        }
        for (let idx = 0; idx < arr.length; idx++){
            memo = reductionCallback(memo, arr[idx]);
        }
        return memo;
    },

    find: function(arr, predicate) {   
        for (let idx = 0; idx < arr.length; idx++){
            if (predicate(arr[idx])){
                return arr[idx];
            }
        }
        return null;
    },

    filter: function(arr, pred){
        var outArr = [];
        for (let idx = 0; idx < arr.length; idx++){
            if (pred(arr[idx])){
                outArr.push(arr[idx]);
            } 
        }
        return outArr;
    },

    reject: function(arr, pred){ 
        var outArr = [];
        for (let idx = 0; idx < arr.length; idx++){
            if (pred(arr[idx])){
                continue;
            }
            outArr.push(arr[idx]);
        }
        return outArr;
    }
  }
  


