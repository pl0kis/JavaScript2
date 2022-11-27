import regis from "../main.js"
import { enterInAcc } from "../main.js"
function registration(accounts){
    let registration = document.querySelector('.registration')
    let enter = document.querySelector('.enter')
    enter.style.display = 'none'
    let selectAccounts = document.createElement('select')
    selectAccounts.className = "selectAccounts"
    let passwordReg = document.createElement('input')
    passwordReg.type = "password"
    let buttonForReg = document.createElement('button')
    let buttonForSign = document.createElement('button')

    passwordReg.className = "passwordReg"
    buttonForReg.className = "buttonForReg"
    buttonForReg.textContent = "Registration"
    buttonForSign.textContent = "Sign In"
    for(let i = 0;i<accounts.length;i++){
        let optionAccount = document.createElement('option')
        optionAccount.innerHTML = accounts[i]
        selectAccounts.append(optionAccount)
    } 
    
    
    registration.append(selectAccounts)
    registration.append(passwordReg)
    registration.append(buttonForReg)  
    registration.append(buttonForSign)  


    

    let selectAccountsEnter = document.createElement('select')
    selectAccountsEnter.className = "selectAccountsEnter"
    let passwordRegEnter = document.createElement('input')
    passwordRegEnter.type = "password"

    let buttonForRegEnter = document.createElement('button')
    let buttonForSignEnter = document.createElement('button')
    passwordRegEnter.className = "passwordEnter"
    buttonForRegEnter.className = "buttonForEnter"
    buttonForRegEnter.textContent = "Registration"
    buttonForSignEnter.textContent = "Sign In"
    buttonForSignEnter.className = "buttonForSignEnter"
    
    // Регистрация
   


    for(let i = 0;i<accounts.length;i++){
        let optionAccount = document.createElement('option')
        optionAccount.innerHTML = accounts[i]
        selectAccountsEnter.append(optionAccount)
    }
    enter.append(selectAccountsEnter)
    enter.append(passwordRegEnter)
    enter.append(buttonForSignEnter)
    enter.append(buttonForRegEnter)
    
    buttonForReg.addEventListener('click',()=>{
        regis()
    })

    buttonForSignEnter.addEventListener('click',()=>{
        enterInAcc()
    })

    buttonForSign.addEventListener('click',()=>{
        registration.style.display = 'none'
        enter.style.display = 'block'
        passwordReg.value = ''
    })
    buttonForRegEnter.addEventListener('click',()=>{
        registration.style.display = 'block'
        enter.style.display = 'none'
        passwordRegEnter.value = ''
    })
}

export default registration


