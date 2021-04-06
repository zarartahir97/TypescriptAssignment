Intro:

    In order to engage users in the communication with
    each other we have decided to decorate usernames
    in various ways. A brief search led us to a library
    called "str-utils". Bad thing is that it lacks
    TypeScript declarations.

Exercise:

    Check str-utils module implementation at:
    node_modules/str-utils/index.js
    node_modules/str-utils/README.md

    Provide type declaration for that module in:
    declarations/str-utils/index.d.ts

    Try to avoid duplicates of type declarations,
    use type aliases.

*/

declare module 'str-utils' {
    
    type str = (value:string) => string;

    export const strReverse : str;
    export const strToLower : str;
    export const strToUpper : str;
    export const strRandomize : str;
    export const strInvertCase : str;
}