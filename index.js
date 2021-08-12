class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  
  add(item) {
    
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
   
  }

  get(pos) {
 
    if(pos >= this.length){
      throw new Error('OutOfBounds');
    }else{
      this.items[pos];
    }
  }

    
  max() {
    
    if(!this.length){
      throw new Error('OutOfBounds');
    }else{
      return this.items[this.length -1];
    }
  }

  min() {
    
    if (!this.length) throw new Error('EmptySortedList');
      return this.items[0]
    
    
  }

  sum() {
    if (this.length == 0) {
      return 0;
    }
    return this.items.reduce((a,b) => a+b)
  }

  avg() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.items.reduce((a,b) => a+b)/ this.items.length;
    
  }
}

module.exports = SortedList;
