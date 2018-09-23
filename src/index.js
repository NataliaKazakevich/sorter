/*class Sorter {
  constructor() {
    this.array = new Array(); 
  }
  add(element) {
   this.array.push(element);
  }
  at(index) {
    return this.array[index];
  }
  get length() {
    return this.array.length;
  }
  toArray() {
    return this.array;
  }
  sort(indices) {
    // sortirovka indicies
    var len = indices.length;
    for (var i = 0; i < len-1; i++){
      for (var j = i + 1; j < len; j++) {
        if (indices[i] > indices[j]) {
          let bolsh = indices[i];
          indices[i] = indices[j];
          indices[j] = bolsh;
        }
      }
    }
  if ( this.compareFunction !== undefined) {
    var testFunction = this.compareFunction(1, 0);
      var isReverse = false;
      if (testFunction === -1) {
        isReverse = true;
      }
    var len = indices.length;
    for (var i = 0 ; i < len - 1; i++) {
      for(var j = i + 1; j < len; j++) {
        if ((this.compareFunction(this.array[indices[i]], 
            this.array[indices[j]]) > 0 && !isReverse) || 
            (this.compareFunction(this.array[indices[i]], 
            this.array[indices[j]]) > 0 && isReverse)) {
          let bolsh = this.array[indices[j]];
          this.array[indices[i]] = this.array[indices[j]];
          this.array[indices[j]] = bolsh;
        }
        else{
          continue;
        }
      }
    }
  } 
  else {
    var len = indices.length;
    for (var i = 0; i < len - 1; i++) {
      for(var j = i + 1; j < len; j++) {
        if ( this.array[indices[i]] <= this.array[indices[j]]) {
          continue;
        } 
        else {
          let bolsh = this.array[indices[j]];
          this.array[indices[j]] = this.array[indices[i]];
          this.array[indices[i]] = bolsh;
        }
      }
    }
  }
  setComparator(compareFunction)
    this.compareFunction = compareFunction;
  }    
  }
module.exports = Sorter;
*/
class Sorter {


  constructor() {
    this.array = new Array();
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var sortIndices = false;
    for (var i = 0; i < indices.length-1; i++) {
      for (var j = i + 1; j < indices.length; j++) {
        if (indices[i] > indices[j]) {
          let temp = indices[i];
          indices[i] = indices[j];
          indices[j] = temp;
        }
      }
    }
    if (this.compareFunction !== undefined) { 
      var testFunction = this.compareFunction(1, 0);
      var isReverse = false;
      if (testFunction === -1) {
        isReverse = true;
      }
      for (var i = 0; i < indices.length - 1; i++) {
        for (var j = i + 1; j < indices.length; j++) {
          if ((this.compareFunction(this.array[indices[i]], this.array[indices[j]]) > 0 && !isReverse) ||
              (this.compareFunction(this.array[indices[i]], this.array[indices[j]]) > 0 && isReverse)) {
            let temp = this.array[indices[j]];
            this.array[indices[j]] = this.array[indices[i]];
            this.array[indices[i]] = temp;
          }else{
            continue;
          }
        }
      }
    } else {
      for (var i = 0; i < indices.length-1; i++) {
        for (var j = i + 1; j < indices.length; j++) {
          if (this.array[indices[i]] <= this.array[indices[j]]) {
            continue;
          }else{
            let temp = this.array[indices[j]];
            this.array[indices[j]] = this.array[indices[i]];
            this.array[indices[i]] = temp;
          }
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;