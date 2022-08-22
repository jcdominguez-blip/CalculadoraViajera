
let vacationCalc = document.getElementById('CalcVac')

CalcVac.addEventListener('submit', calcExpenses)

function getValues() {
let destino = document.getElementById('destino').value,
    presupuesto = document.getElementById('presupuesto').value,
    transporte = document.getElementById('transporte').value,
    alojamiento = document.getElementById('alojamiento').value,
    comida = document.getElementById('comida').value

return { destino, presupuesto, alojamiento, transporte, comida }    
}

function calcExpenses(e) {
e.preventDefault();

const  { destino, presupuesto, alojamiento, transporte,  comida } = getValues()

let expensas = parseInt(alojamiento) + parseInt(transporte) + parseInt(comida)
let balance = presupuesto - expensas

    UI(destino, presupuesto, balance)
}

function UI(destino, presupuesto, balance) {
    let result = document.getElementById('result')
    let dataPrint = document.createElement('div')

    dataPrint.innerHTML += `
    <div class="container-data row">
        <div class="col s4">
        <h6>${destino}</h6>
        </div>
        <div class="col s4">
        <h6>${presupuesto}</h6>
        </div>
        <div class="col s4">
        <h6 id="balance"><strong>${balance}</strong></h6> 
        </div>
    </div>
    `
    result.appendChild(dataPrint) 

    reset()
}

function reset() {
    document.getElementById('CalcVac').reset()
}

function balanceColours() {

    const { balance} = getValues()


    if(balance < 0) {
        document.getElementById('balance').classList.add('red')
    }
    else if(balance > 0) {
        document.getElementById('balance').classList.add('green')
    }
}
/*
let pass ="Jorge Santos";

do{
    pass= prompt(`Introduzca nombre y apellido de usuario`)


}while(pass != `Jorge Santos`)
*/
class Hotel {


    constructor (id,nombre,lugar,capacidad){ 

        this.id = id;
        this.nombre = nombre;
        this.lugar = lugar;
        this.capacidad = capacidad;
    }

}

const hotel1=new Hotel(1,"las casitas","salta",5)
const hotel2=new Hotel(2,"Quebrada","Jujuy",2)
const hotel3=new Hotel(3,"El Hornero","Purmamarca",3)
const hotel4=new Hotel(4,"Los Olivos","Humahuaca",5)



const hoteles=[hotel1,hotel2,hotel3,hotel4]
const Hotel2=[]

localStorage.setItem(`hoteles`, JSON.stringify(hoteles))

const hotelesParseados = JSON.parse(localStorage.getItem(`hoteles`))

hotelesParseados.forEach(hotel => {
    const hotelNuevo = new Hotel(hotel.id, hotel.nombre, hotel.lugar, hotel.capacidad)
    Hotel2.push(hotelNuevo)
    console.log(Hotel2)
    
});

var el = document.querySelector('.notification');

document.querySelector('button').addEventListener('click', function(){
    var count = Number(el.getAttribute('data-count')) || 0;
    el.setAttribute('data-count', count + 1);
    el.classList.remove('notify');
    el.offsetWidth = el.offsetWidth;
    el.classList.add('notify');
    if(count === 0){
        el.classList.add('show-count');
    }
}, false);





    /*hotel.forEach(hotel => {
        console.table(hotel)
        
    });*/

/*Notificacion*/


const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];


const messageTitle = [
    `info`,
    /*'success',
    'warning',
    'danger',*/
];


const messageText = [
    'Bienvenidos a la calculadora viajera de VDR. Ingrese su destino e introduzca el presupuesto para este y sus gastos.',
    
];


const notification = document.querySelector('.notification');


function dismissMessage() {

    notification.classList.remove('received');


    generateMessage();
}


function showMessage() {

    notification.classList.add('received');


    const button = document.querySelector('.notification__message button');
    button.addEventListener('click', dismissMessage, { once: true });
}


function generateMessage() {

    const delay = Math.floor(Math.random() * 9000) + 1500;
    const timeoutID = setTimeout(() => {
        

    const title = randomItem(messageTitle);
    const text = randomItem(messageText);


    const message = document.querySelector('.notification__message');

    message.querySelector('h1').textContent = title;
    message.querySelector('p').textContent = text;
    message.className = `notification__message message--${title}`;


    showMessage();
    clearTimeout(timeoutID);
    }, delay);
}


generateMessage();

/*NOtificacion 1*/

const botonAlert=document.getElementById(`botonAlert`)

botonAlert.addEventListener(`click`,()=> {

    Swal.fire({

        position: 'bottom-end',
        icon: 'success',
        title: 'Carga correcta de datos',
        showConfirmButton: false,
        timer: 1100
    })

})

/*CONVERTOR*/


    