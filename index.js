const gray = document.getElementById('gray');
const orange = document.getElementById('pink');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const indigo = document.getElementById('indigo');
const violet = document.getElementById('violet');

const cardContainer = document.querySelector(".card-content");
const cardViewContainer = document.querySelector(".card-view");

const title = document.getElementById('title');
const titleDisplay = document.querySelector(".title-display");

const recipientNameInput = document.getElementById("rname");
const senderNameInput = document.getElementById("sname");

const recipientNameDisplay = document.querySelector('.r-name-display');
const senderNameDisplay = document.querySelector('.s-name-display');

const message = document.getElementById('message');
const senderMessageDisplay = document.querySelector('.message-display');

const selectImage = document.getElementById('select-image');
const displayImage = document.getElementById('img-card');
const btnSave  = document.getElementById('save-button')

let options;

window.addEventListener('load', async (event) => {
    let images = await getImages();
    displayImage.src = images[0].src;
    for (let i = 0; i < images.length; i++) {
        options += 
        `<option value=${images[i].src}>${images[i].name}</option>
        `;
    }
    selectImage.innerHTML = options;         
  });

gray.addEventListener('click', function(){
    cardContainer.style.backgroundColor = 'lightgray'
    cardViewContainer.style.borderColor = 'gray'
    cardContainer.style.color = 'black'
})  

pink.addEventListener('click', function(){
    cardContainer.style.backgroundColor = 'rgb(224, 178, 186)'
    cardViewContainer.style.borderColor = 'rgb(184, 104, 118)'
    cardContainer.style.color = 'black'
})

yellow.addEventListener('click', function(){
    cardContainer.style.backgroundColor = 'rgb(214, 214, 156)'
    cardViewContainer.style.borderColor = 'rgb(167, 167, 63)'
    cardContainer.style.color = 'black'
})

green.addEventListener('click', function(){
    cardContainer.style.backgroundColor = 'rgb(132, 167, 132)'
    cardViewContainer.style.borderColor = 'rgb(61, 92, 61)'
    cardContainer.style.color = 'black'
})

blue.addEventListener('click', function(){
    cardContainer.style.backgroundColor = 'rgb(99, 129, 210)'
    cardViewContainer.style.borderColor = 'rgb(52, 78, 150)'
    cardContainer.style.color = 'white'
})

indigo.addEventListener('click', function(){
    cardContainer.style.backgroundColor = 'rgb(97, 56, 126)'
    cardViewContainer.style.borderColor = 'indigo'
    cardContainer.style.color = 'white'
})

violet.addEventListener('click', function(){
    cardContainer.style.backgroundColor = 'rgb(226, 169, 226)'
    cardViewContainer.style.borderColor = 'rgb(134, 39, 134)'
    cardContainer.style.color = 'black'
})


selectImage.addEventListener("change", function() {
    displayImage.src = selectImage.value;
});

title.addEventListener("keyup", function() {
    titleDisplay.textContent = title.value;
})

recipientNameInput.addEventListener("keyup", function() {
    recipientNameDisplay.textContent = recipientNameInput.value;
})

senderNameInput.addEventListener("keyup", function() {
    senderNameDisplay.textContent = senderNameInput.value;
})

message.addEventListener("keyup", function() {
    senderMessageDisplay.textContent = message.value;
})

const form = document.querySelector('form')

form.addEventListener('submit', event => {
    event.preventDefault()
    recipientNameDisplay.textContent = recipientNameInput.value;
    senderNameDisplay.textContent = senderNameInput.value;
    titleDisplay.textContent = title.value;
    senderMessageDisplay.textContent = message.value;
    displayImage.src = selectImage.value;
})

async function getImages() {
let imageArray = [];
const url = "designs.json"
let response = await fetch(url)
let data = await response.json();
for(let i=0; i<data.length; i++){
    imageArray.push(data[i]);
}
return imageArray;
}







