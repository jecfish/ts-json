import * as data from './example.json';

const word = (<any>data).name;
console.log(word); // output 'testing'