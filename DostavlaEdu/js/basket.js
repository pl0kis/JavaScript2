


function basket(){
    const buttonCart = document.querySelector("#cart-button");
    const modalCart = document.querySelector('.modal-cart')
    const closeCart = modalCart.querySelector(".close")
    const body = modalCart.querySelector(".modal-body")
    const buttonSend = modalCart.querySelector(".button-primary")
    const cansel = modalCart.querySelector(".clear-cart")
    

    cansel.addEventListener('click', ()=>{
        body.innerHTML = ''
        localStorage.removeItem('cart')
        modalCart.style.display="none"
    })

    const resetCart = () =>{
        body.innerHTML = ''
        localStorage.removeItem('cart')
        modalCart.style.display="none"
    }



    const incrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        // console.log('inc')

        cartArray.map((item)=>{
            if(item.id === id){
                item.count++
            }
            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)

    }
    const decrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        // console.log('dec')

        cartArray.map((item)=>{
            if(item.id === id){
                if(item.count > 0) {
                    item.count--
                } else{
                    item.count = 0
                }      
            }
            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)
    }


    const renderItems = (data) => {
        data.forEach(cartItem => {
            console.log(cartItem)
        })
        body.innerHTML = ""

        data.forEach(({name, price, id, count}) => {
            const cartElem = document.createElement('div')

            cartElem.classList.add('food-row')

            cartElem.innerHTML = `
            <span class="food-name">${name}</span>
            <strong class="food-price">${price} ₽</strong>
            <div class="food-counter">
              <button class="counter-button btn-dec" data-index="${id}">-</button>
              <span class="counter">${count}</span>
              <button class="counter-button btn-inc" data-index="${id}">+</button>
            </div>
            `

            // cartElem.querySelector('.btn-dec').addEventListener('click', () =>{
            //     decrementCount(id) 
            // })

            // cartElem.querySelector('.btn-inc').addEventListener('click', () =>{
            //     incrementCount(id) 
            // })

            body.append(cartElem)
            // for(price of data){
            //     let i
            //     price += i
            //     itog_summa.textContent = i
            // }
            
        })
    }

    body.addEventListener('click', (e) =>{
        e.preventDefault()

        if(e.target.classList.contains('btn-inc')){
            incrementCount(e.target.dataset.index)
        }else if( e.target.classList.contains('btn-dec')){
            decrementCount(e.target.dataset.index)
        }

    })

    buttonSend.addEventListener('click', ()=>{
        const cartArray = JSON.parse(localStorage.getItem('cart'))

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: cartArray
        })
        .then(response => {
            if(response.ok){
                resetCart()
            }

        })
    })

    buttonCart.addEventListener('click', ()=>{
        if(localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
        }

        // modalCart.classList.add('is-open')
        modalCart.style.display = "flex"

    })

    closeCart.addEventListener('click', ()=>{
        // modalCart.classList.remove('is-open')
        modalCart.style.display = "none"
    })

    

    
}

basket()