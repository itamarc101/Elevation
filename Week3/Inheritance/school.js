class Person {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

}

class Teacher extends Person {
    constructor(name, birthYear, salary) {
        super(null, birthYear);
        this.name = name;
        this.salary = salary;
    }
}

class Student extends Person {
    constructor(name, birthYear) {
        super(name, birthYear);
    }
}

class Principal extends Person{
    constructor(name, birthYear) {
        super(name, birthYear);
        this.teachers = []
        this.students = []
    }

    hireTeacher(teacher) {
        this.teachers.push(teacher);
        console.log(`${this.name} just hired ${teacher.name}`);
    }

    recruitStudent(student) {
    this.students.push(student);
  }

  expelStudent(student) {
    this.students = this.students.filter(s => s.name !== student.name);
  }

  transferStudent(student, newPrincipal) {
    this.expelStudent(student);
    newPrincipal.recruitStudent(student);
  }

}


const p1 = new Principal("Martin", 1991)
const p2 = new Principal("Martha", 1990)

const t1 = new Teacher("Cassandra", 2002, 40000)
const t2 = new Teacher("Kevin", 2006, 30000)

const s1 = new Student("Ronda", 2017)
const s2 = new Student("Byron", 2016)

//1 & 2
p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

p1.hireTeacher(t2) //should print "Martin just hired Kevin"
console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

//3 & 4
p1.recruitStudent(s1)
p1.recruitStudent(s2)
console.log(p1.students) //should print Array(2) [Student, Student]

//5
p1.expelStudent(s1)
console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

//6
p1.transferStudent(s2, p2)
console.log(p1.students) //should print Array(0) []
console.log(p2.students) //should print Array(1) [Student] - the student should be Byron
