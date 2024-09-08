//תרגיל 1
const printArrow = (lines, directionRight) => {
    const arrowBody = '-'.repeat(lines);
    const arrow = directionRight ? `${arrowBody}>` : `<${arrowBody}`;
    console.log(arrow);
};

printArrow(5, true); 
printArrow(3, false); 

//תרגיל 2
const collectNumbers = () => {
    let numbers = [];
    let input;
    
    // קלט מספרים עד שמתקבלת הספרה 0
    while ((input = parseFloat(prompt("Enter a number (0 to stop):"))) !== 0) {
        numbers.push(input);
    }

    // בדיקת האם התקבלו מספרים
    if (numbers.length > 0) {
        const maxNumber = Math.max(...numbers);  // המספר המקסימלי
        const sum = numbers.reduce((acc, num) => acc + num, 0);  // סכום המספרים
        const avg = sum / numbers.length;  // ממוצע המספרים
        const fourthNumber = numbers.length >= 4 ? numbers[3] : numbers[numbers.length - 1];  // המספר הרביעי או האחרון
        
        console.log(`Max number: ${maxNumber}`);
        console.log(`Count of numbers: ${numbers.length}`);
        console.log(`Sum of numbers: ${sum}`);
        console.log(`Average of numbers: ${avg}`);
        console.log(`Fourth number (or last if less than 4): ${fourthNumber}`);
    } else {
        console.log("No numbers were entered.");
    }
};

// קריאה לפונקציה
collectNumbers();

//תרגיל 3
const printTriangle = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log('*'.repeat(i));
    }
};

// דוגמת שימוש:
printTriangle(5);

