const modalWindow = document.querySelector('.modal-auth')
const modalButton = document.querySelector('.button-auth')
const closeModal = document.querySelector('.close-auth')
const ButtSend = document.querySelector('.button-login')
const labelEnter = document.querySelectorAll('.label-auth')
const ButtonAuth = document.querySelector('.button-auth')
const ButtonOut = document.querySelector('.button-out')
const NameAcc = document.querySelector('.NameAcc')
let modalCart = document.querySelector(".modal-cart")
const btnBasket = document.getElementById("cart-button") 
// modalBasket
const buttonCart = document.querySelector('.button-cart')
// !!!!!!!!!!!!!!!!!!!!!!!!!!



let check = JSON.parse(localStorage.getItem('account'))

checkAuth()

modalButton.addEventListener('click',()=>{
    modalWindow.style.display = 'flex'
})

closeModal.addEventListener('click',()=>{
    modalWindow.style.display = 'none'
})

modalWindow.addEventListener('click',(e)=>{
    const isModal = e.target.closest('.modal-dialog-auth')

    if(!isModal){
        modalWindow.style.display = 'none'
    }
})

ButtSend.addEventListener('click',(e)=>{
    e.preventDefault()
    
    let login = document.getElementById('login')
    let password = document.getElementById('password')
    if(login.value == '' && password.value == ''){
        alert('Вы не ввели логин и пароль')
    }else if(login.value == ''){
        alert('Вы не ввели логин')
    }else if(password.value == ''){
        alert('Вы не ввели пароль')
    }else{
        modalWindow.style.display = 'none'
        ButtonAuth.style.display = 'none'
        ButtonOut.style.display  = 'flex' 
        ButtonOut.textContent = `Выйти ${login.value}`
        localStorage.setItem('account', JSON.stringify(login.value));
        login.value = ''
        password.value = ''
        buttonCart.style.display = 'flex'
    }
})

ButtonOut.addEventListener('click',()=>{
        ButtonAuth.style.display = 'flex'
        ButtonOut.style.display  = 'none'
        buttonCart.style.display = 'none'

        localStorage.clear()
       
})

function checkAuth(){
    if(localStorage.getItem('account') != null){
        ButtonAuth.style.display = 'none'
        ButtonOut.style.display  = 'flex' 
        ButtonOut.textContent = `Выйти ${check}`
        buttonCart.style.display = 'flex'

    }else{
        ButtonAuth.style.display = 'flex'
        ButtonOut.style.display  = 'none'
        buttonCart.style.display = 'none'

    }
}

btnBasket.addEventListener("click", ()=>{
    modalCart.style.display = "flex"

    if(localStorage.getItem("cart") == null){
        const resultPrice = document.querySelector(".modal-pricetag")
        resultPrice.textContent = `${0} ₽`
    }
        
    
    const  arrCart = JSON.parse(localStorage.getItem("cart")) 
    const modalBodyCart = document.querySelector(".modal-body")
    modalBodyCart.innerHTML = ""
    if(arrCart != undefined){
        arrCart.forEach(item => {   
            const {name, price, total} = item
            // console.log(item.id, name, price, total)
            let htmlBodyModal = 
            `
            <div class="food-row">
                <span class="food-name">${name}</span>
                <strong class="food-price">${price}</strong>
                <div class="food-counter">
                    <button class="counter-button counter-minus">-</button>
                    <span class="counter">${total}</span>
                    <button class="counter-button counter-plus">+</button>
                </div>
            </div>
            `
               
            modalBodyCart.innerHTML +=htmlBodyModal
        sumCart()
    
        })
    }
    
})

modalCart.addEventListener("click", (event)=>{
    // console.log(event.target)
    
    if(event.target == document.querySelector(".close")){
        console.log("close")
        modalCart.style.display = "none"
    }
  
})
   

function sumCart(){
    const arrCart = JSON.parse(localStorage.getItem("cart"))
    const resultPrice = document.querySelector(".modal-pricetag")
    let result = arrCart.reduce(function(sum, current) {
        current.price = Number(current.price.substr(0, 3))
       return sum + current.price * current.total
      }, 0);

    result = `${result} ₽`
    resultPrice.innerText = result
    console.log(result, resultPrice) 
}

// localStorage.clear()




// Basket.addEventListener('click',(e)=>{
//     e.preventDefault()
//     modalBasket.style.display = 'flex'
// })

// closeBasket.addEventListener('click',()=>{
//     modalBasket.style.display = 'none'
// })

// modalBasket.addEventListener('click',(e)=>{
//     const isModal = e.target.closest('.modal-dialog')

//     if(!isModal){
//         modalBasket.style.display = 'none'
//     }
// })

// Модальное окно корзины






// function changeCount(){

// }

// for(let i = 0;i<counterButton.length;i++){
//     j +=1
//     if(i%2 == 0){
//         counterButton[i].addEventListener('click',()=>{
//             let a = counter.textContent
//             counter[j].textContent = a+1
//         })
//     }else{
//         counterButton[i].addEventListener('click',()=>{
//             let b = counter.textContent
//             counter[j].textContent = b + 1 
//         })
//     }
// }