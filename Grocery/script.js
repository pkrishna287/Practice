const groceryItems = [];

function submitItems() {
    const input = document.getElementById('grocery-item');
    const value = input.value;
    if (value) {
        groceryItems.push(value);
        console.log('Grocery Items:', groceryItems);
        input.value = '';
        displaylist();
    } else {
        alert('Please enter a grocery item.');
    }
}

function clearItems() {
    const input = document.getElementById('grocery-item');
    const value = input.value;

    if (value) {
        const index = groceryItems.indexOf(value);
        if (index !== -1) {
            groceryItems.splice(index, 1);
            displaylist();
            };
    } else {
        alert('Please enter the grocery item to clear.');
    }
}


function displaylist() {
    const grocerylist = document.getElementById("grocerylist");
    const grocerylistHtml = groceryItems.map((item, index) => {
        return `
            <div class="row mb-1">
                <div class="col text-start">${item}</div>
                <a class="col-auto btn btn-close mx-2" href="#" onclick="deleteItem(${index})"></a>
            </div>`;
    }).join(''); 

    grocerylist.innerHTML = grocerylistHtml;
}


document.getElementById('submit-btn').addEventListener('click', submitItems);
document.getElementById('clear-btn').addEventListener('click', clearItems);
