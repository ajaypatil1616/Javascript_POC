// const regex = /very/g
// const text = "Harry is very very nice awesome  very nice boy";
// console.log(text.replace(regex, "VERY"));
let text = "lorem 10 sdfs sdfs https://www.google.com sfs sdfsfsfsff";
const regex = /(?:https?|ftp):\/\/[\n\S]+|(?:www\.)[\n\S]+/gi;
const urls = text.match(regex);
console.log(urls);
