let person = {
  _name: 'Lu Xun',
  _age: 137,
  
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    }
    else {
      console.log(this._age +' stay Invalid input')
      return 'Invalid input';
    }
  },
	get personInfo() {
    console.log (this._name + ' is ' + this._age +' years old. ');
    return this._name;
    return this._age;
  }
};
person.age = 39;
const all = person.personInfo;
