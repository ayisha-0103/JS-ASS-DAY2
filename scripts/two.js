//String

//substr

/*let str = "i'm learning JS"
let substring = str.substring(0,10);

console.log(substring)*/


//splice

/*const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months)
*/

//replace

/*const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;

console.log(p.replace(regex,'ferret'))*/

//replaceall
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

const regex = /dog/gi;

console.log(p.replaceAll(regex, 'ferret'));
