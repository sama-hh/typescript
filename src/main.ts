type Grade = 1 | 2 | 3 | 4 | 5 | 6 | "A" | "B" | "C" | "D" | "E" | "F" | undefined;

type Subject = string;

type SubjectGrades = {
    subject: Subject,
    grades: Grade[];
};

type Student = {
    firstName: string;
    lastName: string;
    age: number;
    grades: SubjectGrades[];
};

const student1: Student = {
    firstName: "John",
    lastName: "Smith",
    age: 20,
    grades: [
        {
            subject: 'Sport',
            grades: ["A", 2, "F", 3]
        },
        {
            subject: 'Math',
            grades: [1, "B", undefined, 5]
        },
    ]
};


const student2: Student = {
    firstName: "Alex",
    lastName: "Jackson",
    age: 21,
    grades: [
        {
            subject: 'Sport',
            grades: ["A", 4, "F", 3]
        },
        {
            subject: 'Math',
            grades: [2, "B", undefined, 1]
        },
    ]
};

const students: Student[] = [student1, student2]

console.log(student1)

const stringifySubjectGrades: (subjectGrade: SubjectGrades) => string = (subjectGrade: SubjectGrades) => {
    return `  ${subjectGrade.subject}:\n   ${subjectGrade.grades.map(grade => grade === undefined ? "*" : grade).join(", ")}\n`;
}

const studentGrades = (student: Student) => {
    const fullName = `${student.firstName} ${student.lastName} (${student.age})`;
    const highlightString = "=".repeat(fullName.length);
    const stringifiedGrades = student.grades.map((subjectGrade: SubjectGrades) => stringifySubjectGrades(subjectGrade));
    return `${fullName}\n${highlightString}\n Grades:\n${stringifiedGrades.join('')}`;
}

console.log(studentGrades(student1));

students.map(student => console.log(studentGrades(student)));
