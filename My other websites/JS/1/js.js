const form = document.querySelector('#addForm')
const itemList = document.querySelector('#items')
const filter = document.querySelector("#filter")
const error = document.querySelector('.output')
const exit = document.querySelector('#button')
const body = document.querySelector('body')

// form submit event 
form.addEventListener('submit', addItem);

//delet event
itemList.addEventListener('click', removeItem)

//filtervenet
filter.addEventListener('keyup', filterItems)

// exit event
exit.addEventListener('click', (e) => {
    body.style.display = 'none';

    let wiadomosc = document.createElement('div')
    wiadomosc.appendChild(document.createTextNode("goodbye"))
    document.appendChild(wiadomosc)
})

//add Item
function addItem(e) {
    e.preventDefault();

    //get input value
    let newItem = document.querySelector('#newItem').value
    
    if(newItem == '')
    {
        error.style.display = 'block';
        
        // error.style.display = 'none';

    }
    else {

        error.style.display = 'none'
        //ceate new li 
        var li = document.createElement('li');
        li.className = 'listGroupItem';

        //create text in li
        let text = document.createElement('div') 

        //give text value of the input
        text.appendChild(document.createTextNode(newItem))

        //give text a class
        text.className = "liText"

        //add text to li
        li.appendChild(text)

        //create delete button
        let deleteBtn = document.createElement('button');

        //give dlete button class
        deleteBtn.className = 'liClose'
        
        //give delete button content
        deleteBtn.appendChild(document.createTextNode('x'))

        //add delete button to li
        li.appendChild(deleteBtn)
        
        //add li to ul
        itemList.appendChild(li)
    }
}

// remove items
function removeItem(e) {
    if(e.target.classList.contains('liClose')) {

    let li = e.target.parentElement;
    itemList.removeChild(li)
        
    }  
}

//filter items
function filterItems(e) {
    
    // get the input value and convert to lowercase
    let text = e.target.value.toLowerCase();

    // get lies
    let items = itemList.querySelectorAll('li')

    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}

