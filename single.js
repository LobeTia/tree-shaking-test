import { NameHelper, Logger } from './utilities-single';

let nameHelper = new NameHelper();
let fullName = nameHelper.getFullName('Joe', 'Smith');
console.log(fullName);
