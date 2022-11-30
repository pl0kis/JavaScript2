const modalWindow = document.querySelector('.modal')
const buttonModals = document.querySelectorAll('.button1')
const buttonModals2 = document.querySelectorAll('.button2')
const body = document.querySelector('.body')
const modalClose = document.querySelector('.modal_close')

const buttonBiog = document.querySelectorAll('.butBiog')

const timerItem = document.querySelectorAll('.timer-item')

timerItem.forEach((item)=>{
    item.addEventListener('mouseover',()=>{
       
      
        item.style.transform = 'scale(1.1)'
        item.style.transition = '1s'
    })
    item.addEventListener('mouseout',()=>{
        
       
        item.style.transform = 'scale(1)'
        item.style.transition = '1s'
    })
})



buttonBiog.forEach((but) =>{
    but.addEventListener('mouseover',()=>{
       
        but.style = 'background:linear-gradient(94.78deg, #DF5950 11.19%, #451046 93.72%);' 
        but.style.transform = 'scale(1.1)'
        but.style.transition = '3s'
    })
    but.addEventListener('mouseout',()=>{
        
        but.style = 'background-color: black;'
        but.style.transform = 'scale(1)'
        but.style.transition = '3s'
    })
})



buttonModals.forEach((item) =>{
    item.addEventListener('click',()=>{
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll')
        
    })
    item.addEventListener('mouseover',()=>{
            
            item.style = 'background: linear-gradient(94.78deg, #DF5950 11.19%, #451046 93.72%);'
            item.style.transition = 'color 3s'
            item.style.transform = 'scale(1.1)'
            item.style.transition = '3s'
            
        })
        item.addEventListener('mouseout',()=>{
            item.style = 'background:linear-gradient(94.26deg, #C89AFC 9.51%, #7C6AFA 90.23%);'
            item.style.transform = 'scale(1)'
            item.style.transition = '3s'

        })
})
buttonModals2.forEach((item) =>{
    item.addEventListener('click',()=>{
        modalWindow.style.display = 'flex';
        body.classList.add('noscroll')
    })

    item.addEventListener('mouseover',()=>{
        item.style = 'background:linear-gradient(94.26deg, #C89AFC 9.51%, #7C6AFA 90.23%);'
        item.style.transform = 'scale(1.1)'
        item.style.transition = '3s'
    })
    item.addEventListener('mouseout',()=>{
        item.style = 'background: linear-gradient(94.78deg, #DF5950 11.19%, #451046 93.72%);'
        item.style.transform = 'scale(1)'
        item.style.transition = '3s'
    })
})

modalWindow.addEventListener('click',(e)=>{
    const isModal = e.target.closest('.modal_inner');

    if(!isModal){
        modalWindow.style.display = 'none';
        body.classList.remove('noscroll')
    }
})

modalClose.addEventListener('click',()=>{
    modalWindow.style.display = 'none';
    body.classList.remove('noscroll')
})

// Таймер

// let time = document.querySelectorAll('.timer_count')

// let seconds = new Date().getSeconds()
// let minutes = new Date().getMinutes()
// let hours = new Date().getHours()
// let days = new Date().getDate()


// let word = document.querySelectorAll('.timer_text')
//     let Day_text = word[0]
//     let Hours_text = word[1]
//     let Minutes_text = word[2]
//     let Seconds_text = word[3]


// let timer = setInterval(()=>{

//     time[3].textContent = seconds
//     time[2].textContent = minutes
//     time[1].textContent = hours
//     time[0].textContent = days

   
//     if(days == 0 && hours == 0 && minutes == 0 && seconds == 0){
//         clearInterval(timer)
//     }
//     if(seconds >= 1){
//         seconds -= 1
//     }else{
//         seconds = 59
//         if(minutes <= 0){
//             minutes = 59
//             if(hours <= 0){
//                 hours = 23
//                 days -= 1
//             }else{
//                 hours -=1
//             }
//         }else{
//             minutes -= 1
//         }
//     }
//     numWord(seconds,['Секунда','Секунды','Секунд'])

//     function numWord(value,array){
//         value = Math.abs(value) % 100

//         if(value > 10 && value < 20){
//             return array[2]
//         }else if(value % 10 > 1 && value % 10 < 5){
//             return array[1]
//         }else if(value == 1){
//             return array[0]
//         }else{
//             return 
//         }
//     }

// },1000)

let time = document.querySelectorAll('.timer_count')

let days = time[0]
let hours = time[1]
let minutes = time[2]
let seconds = time[3]

function setCurrDate(){
    let currDate = new Date();
    let deadline = new Date("31 june 2022 22:24").getTime();
    let timeRemain = (deadline - currDate) / 1000;

    let currDay = Math.floor(timeRemain / 3600 / 24);
    let currHours = Math.floor((timeRemain / 3600) % 24);
    let currMinutes = Math.floor((timeRemain / 60) % 60);
    let currSec = Math.floor(timeRemain % 60);

    currDay = addZero(currDay);
    currHours = addZero(currHours);
    currMinutes = addZero(currMinutes);
    currSec = addZero(currSec);

    days.innerHTML = currDay;
    hours.innerHTML = currHours;
    minutes.innerHTML = currMinutes;
    seconds.innerHTML = currSec;

    days.nextElementSibling.innerHTML = secondsWord(currDay, ["День", "Дня", "Дней"]);
    hours.nextElementSibling.innerHTML = secondsWord(currHours, ["Час", "Часа", "Часов"]);
    minutes.nextElementSibling.innerHTML = secondsWord(currMinutes, ["Минута", "Минуты", "Минут"]);
    seconds.nextElementSibling.innerHTML = secondsWord(currSec, ["Секунда", "Секунды", "Секунд"]);
    
    // interval clear
    if(timeRemain <= 0){
        clearInterval(interval);
        days.innerHTML = "00";
        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
    }
}

function addZero(elem){
    if (elem < 10){
        return "0" + elem
    }
    else{
        return elem
    }
}

function secondsWord(value, array){
    value = Math.abs(value) % 100;
    
    
    if (value == 1 || (value % 10 == 1 && value > 11)){
        return array[0]
    }
    else if (value > 10 && value < 20){
        return array[2]
    }
    else if (value % 10 > 1 && value % 10 < 5){
        return array[1]
    }
    else{
        return array[2]
    }
}


interval = setInterval(setCurrDate, 500);
setCurrDate();





// Отправка заявки

const sendForm = () =>{
    const form = document.querySelector('.modal')

    form.addEventListener('submit',(event) =>{
        event.preventDefault()
        
        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')
        
        // console.log(text.value)
        // console.log(tel.value)
        // console.log(email.value)
    
        const sendObj = {
            name:text.value,
            phone:tel.value,
            email:email.value
        }

        console.log(sendObj)

        // console.log('submit')

        fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            body:JSON.stringify(sendObj),
            headers:{
                'Content-type':'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .finally(()=>{
                console.log('Форма очищена')
            })
    })
}

sendForm()


