// tasks/sprint-3_4.png

class Student {
    constructor(fullName, direction){
        this._fullName = fullName;
        this._direction = direction;
    }
    showFullName(){
        return this._fullName;
    }
    nameIncludes(data){
        return this.showFullName().includes(data);
    }
    static studentBuilder(){
        return new Student ('Ihor Koh', "qc");
    }
    direction(){
        return this._direction;
    }
    // set direction(newDirection){
    //     this._direction = newDirection;
    // }
}

const stud1 = new Student ('Ivan Pet', 'web');
const stud2 = new Student ('Zbyslav Ost', 'js')
// stud1.nameIncludes('Ivan'); // true
// stud1.nameIncludes('Denysenko') // false
console.log(stud1.showFullName());
console.log(stud1.nameIncludes('Ivan'));
console.log(stud1.nameIncludes('Denysenko'));
const stud3 = Student.studentBuilder();
console.log(stud3);
console.log(stud1.direction());

