/// <reference path="_refrence.ts" />

import Person = objects.Person;
import Student = objects.Student;

console.log("Game Started....");


var person: Person = new Person("Tom");
person.speaks();

var student: Student = new Student("Mike", 300812377);
student.studies();
student.speaks();