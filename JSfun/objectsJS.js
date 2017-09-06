let person = {
  name: 'Jackob',
 	age: 20,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
      sayHello () {
      return 'Hello, my name is '+ this.name
    },
      sayGoodbye () {
      return 'Goodbye!'
    },
};
let friend = {
  name: 'Gorge'
};
friend.sayHello = person.sayHello;
let day = 'Tuesday';
var alarm;
person.hobbies = ['Sport'];

if (day === 'Saturday' || day === 'Sunday' ) {
    alarm = 'weekendAlarm';
    } else {
    alarm = 'weekAlarm';
    };
console.log(person[alarm]);
console.log(person.hobbies);
console.log(person.sayHello());
console.log(friend.sayHello());