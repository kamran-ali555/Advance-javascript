const fullName = 'ali';
const age = 25;
userNumber = prompt('Enter any number');

if (age > userNumber) {
    document.writeln(`<h1>You can drink ${fullName}</h1>`);
    
} else {
    document.writeln(`<h1>You can't drink ${fullName}</h1>`);
};

if (age > userNumber && age < userNumber) {
    document.writeln(`<h1>You can drink ${fullName}</h1>`);
    
} else {
    document.writeln(`<h1>You can't drink ${fullName}</h1>`);
};

if (age > userNumber || age < userNumber) {
    document.writeln(`<h1>You can drink ${fullName}</h1>`);
    
} else {
    document.writeln(`<h1>You can't drink ${fullName}</h1>`);
};

