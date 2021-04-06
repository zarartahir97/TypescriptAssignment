/*

Intro:

    We have so many users and admins in the database!
    CEO's father Jeff says that we are a BigData
    startup now. We have no idea what it means, but
    Jeff says that we need to do some statistics and
    analytics.

    We've ran a questionnaire within the team to
    figure out what do we know about statistics.
    The only person who filled it was our coffee
    machine maintainer. The answers were:

     * Maximums
     * Minumums
     * Medians
     * Averages

    We found a piece of code on stackoverflow and
    compiled it into a module `stats`. The bad
    thing is that it lacks type declarations.

Exercise:

    Check stats module implementation at:
    node_modules/stats/index.js
    node_modules/stats/README.md

    Provide type declaration for that module in:
    declarations/stats/index.d.ts

*/

declare module 'stats' {

    type Index = <T>(input : T[] , comparator:((a: T, b: T) => number)) => number;
    type Element = <T>(input : T[] , comparator:((a: T, b: T) => number)) => T | null;
    type Average = <T>(input :T[] , getValue: (item: T) => number) => number | null;

    export const getMaxIndex : Index;
    export const getMaxElement : Element;
    export const getMinIndex : Index;
    export const getMinElement : Element;
    export const getMedianIndex : Index;
    export const getMedianElement : Element;
    export const getAverageValue : Average;
} 