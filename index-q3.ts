/*

Intro:

    Since we already have some of the additional
    information about our users, it's a good idea
    to output it in a nice way.

Exercise:

    Fix type errors in logPerson function.

    logPerson function should accept both User and Admin
    and should output relevant information according to
    the input: occupation for User and role for Admin.

*/

interface User {
    kind: string;
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    kind: string;
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        kind: 'User',
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        kind: 'Admin',
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        kind: 'User',
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        kind: 'Admin',
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if (person.kind === "Admin") {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);