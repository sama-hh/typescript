type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: Grade[];
};

const student1: Student = {
    firstName: "John",
    lastName: "Smith",
    age: 20,
    grades: ["A", 2, "F", 3, 1, "B", undefined, 5]
};

const student2: Student = {
    firstName: "Alex",
    lastName: "Jackson",
    age: 21,
    grades: ["A", 4, "F", 3, undefined, "B", undefined, 5]
};

const students: Student[] = [student1, student2]

console.log(student1)

const studentGrades = (student: Student) => {
    return ` ${student.firstName} ${student.lastName} (${student.age}) \n ${"=".repeat(30)}\n Grades: 
    ${student.grades.map(grade => grade === undefined ? "*" : grade).join(", ")}`;
}

console.log(studentGrades(student1));

students.map(student => console.log(studentGrades(student)));





