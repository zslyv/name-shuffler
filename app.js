let namesArray = [];

function addName() {
    let nameInput = document.getElementById('nameInput').value;
    if(nameInput === '') {
        console.log('Element not added because its empty');
        return;
    }
    // namesArray[namesArray.length] = nameInput; //Option 1
    namesArray.push(nameInput); //Option 2

    let listItem = document.createElement('span'); //create the li element in listItem
    listItem.textContent = nameInput +" // "; //li equals the nameInput

    document.getElementById('inputList').appendChild(listItem); //takes the ul and adds a child to it (li)
    document.getElementById('nameInput').value = '';
    console.log(namesArray);
}

function draw() {
    let drawResults = document.getElementById('resultsTable');
    let usedNumbers = [];
    let usedNumbers2 = [];
    //If the amount of elements it's the same as rows it goes back so it doesn't delete the table because of the while
    if(namesArray.length + 1 == drawResults.rows.length || namesArray.length === 1) {
        //the +1 is because namesArray starts at 0 and drawResults at 1 
        return;
    }
    while (drawResults.rows.length > 1) {
        drawResults.deleteRow(1); //Deletes the table content
    }
    for(let i = 0; i< namesArray.length; i++) {
        let number = 0;
        let number2 = 0;
        while(number === number2) {
            do {
                number = Math.floor(Math.random() * namesArray.length - 1)+1;
            } while(usedNumbers.includes(number));

            do {
                number2 = Math.floor(Math.random() * namesArray.length - 1)+1;
            } while(usedNumbers2.includes(number2));
        }
        usedNumbers.push(number);
        usedNumbers2.push(number2);

        let newRow = document.createElement('tr'); //new row
        let firtCell = document.createElement('td'); //cell of "from"
        firtCell.innerText = namesArray[number]; //first cell equal text
        
        let arrowCell = document.createElement('td'); //cell of "from"
        arrowCell.innerText = '→';

        let secondCell = document.createElement('td'); //cell of "for"
        secondCell.innerText = namesArray[number2]; //second cell equal text

        //Here basically I'm putting the two td inside the tr (new line)
        newRow.appendChild(firtCell);
        newRow.appendChild(arrowCell);
        newRow.appendChild(secondCell);

        //puts the tr with the td's in the table
        drawResults.appendChild(newRow);
        console.log(namesArray[number]);
        console.log(number);
        console.log(namesArray[number2]);
        console.log(number2);
    }
}

function restart() {
    let drawResults = document.getElementById('resultsTable');
    namesArray.length = 0;
    document.getElementById('inputList').replaceChildren();
    while (drawResults.rows.length > 1) {
        drawResults.deleteRow(1);
    }
}