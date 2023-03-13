const cards = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
const domContainer = document.getElementById('container');
const domSelettore = document.getElementById('selettore');
cards.forEach((Element) => {

//Divisione dei colori Milestone 2
//	if(Element.color == 'orange'){
//		Element.color = '#ffa500';
//	}else if(Element.color == 'green'){
//		Element.color = '#326554';
//	}else{
//		Element.color = '#1e396f';
//	}

//Bonus
Element.color = coloreCasuale();
//Bonus

	const domBox = newBox(Element);
	domContainer.innerHTML += domBox;
});
console.log(cards);

domSelettore.addEventListener('change', function () {
	domContainer.innerHTML = '';
	const scelta = domSelettore.value;

	if(scelta == 'animal'){              //come posso ottimizzare questa condizione ??
		animal.forEach((Element) => {
			const domBox = newBox(Element);
	        domContainer.innerHTML += domBox;
		});
	}else if (scelta == 'vegetable') {
		vegetable.forEach((Element) => {
			const domBox = newBox(Element);
	        domContainer.innerHTML += domBox;
		});
	}else if (scelta== 'user'){
		user.forEach((Element) => {
			const domBox = newBox(Element);
	        domContainer.innerHTML += domBox;
		});
	}
});

const animal = cards.filter(Element => {
	if(Element.type == 'animal'){
		return true;
	}else {
		return false;
	}
});
const vegetable = cards.filter(Element => {
	if(Element.type == 'vegetable'){
		return true;
	}else {
		return false;
	}
});
const user = cards.filter(Element => {
	if(Element.type == 'user'){
		return true;
	}else {
		return false;
	}
});

function newBox(Element) {
    const box = `<div class="box"> 
                        <div class="icon"> 
                            <i class="${Element.prefix}solid ${Element.prefix}${Element.name}" style="color:${Element.color}"></i>
                        </div>
                        <div class="title">
                            <span>${Element.name}</span>
                        </div>
                    </div>`;
    return box;
}

//BONUS
function coloreCasuale(){
	const n=6;
	let T=['#'];
	let caratteri = "ABCDEF0123456789"
	for(let i = 0; i<n;i++){
		T.push(caratteri.charAt(Math.floor(Math.random() * caratteri.length)));
	}
let estratto = T;
let stringa = '';
for(let i = 0; i < estratto.length ; i++){
	stringa += estratto[i];
}
return stringa;
}