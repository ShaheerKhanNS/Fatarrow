

class student{
    static count =0;
    constructor(name,age,phoneNumber,boardMarks){
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.boardMarks = boardMarks;
        student.count++;
    }
    
}

student.prototype.eligibility = function(mimumBoardMarks,minimumAge){
    
    if(this.boardMarks>mimumBoardMarks && this.age>minimumAge){
        return () =>{
            return `${this.name} is eligible for the company`;
        }
    }
    else{
        return ()=>{
            return `${this.name} is ineligible for the company`;
        }
    }
}

let student1= new student("Ravi",18,"4649452",90);
let student2= new student("Bilal",19,"4695252",80);
let student3= new student("Sam",18.5,"445852",63);
let student4= new student("Yuvi",17,"4985542",42);
let student5= new student("Abc",19,"4321452",39);
console.log(student4.eligibility(40,12)())
console.log(student.count);