import abi from "./components/abi.js"
import registration from "./components/registrationAndEnter.js"


const address = "0x843806716bB70b82eB27f8aD92a4fa8BcCE7f8E2"

    let addCommInKnigaWindow = document.querySelector('.addCommInKnigaWindow')
    addCommInKnigaWindow.style.display = 'none'
    let upWindow = document.querySelector('.upWindow')
    upWindow.style.display = 'none'
    let acc    
    let web3;
    let accountss;
    let accounts;
    let contractInstance;
    let AdminWindow = document.querySelector('.AdminWindow')
    AdminWindow.style.display = 'none'
    let Profile = document.querySelector('.Profile')
    Profile.style.display = 'none'
    // let profile = document.querySelector('.profile')
    let balanAccount
    let balance = document.createElement('h1')
async function connect(){
    

    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    console.log(web3)
    contractInstance = new web3.eth.Contract(abi,address);

    accountss = await web3.eth.getAccounts()
    for(let i = 0;i<accountss.length;i++){
        let res = await web3.eth.personal.unlockAccount(accountss[i],"1212",0)
        
    }
}
connect()

let checkKnigaWindow = document.querySelector('.checkKnigaWindow')
            checkKnigaWindow.style.display = 'none'

async function checkStatusMagazinsS(){
    
    let resp = await contractInstance.methods
    .checkStatusMagazins()
    .call({from:acc},function(error,result){
        
    })
    console.log(resp)
    let idMagazina = document.querySelector('.idMagazina')
    let checkKnigaInputS = document.querySelector('.checkKnigaInput')
    let idMagazinaKnigaS = document.querySelector('.idMagazinaKniga')
    idMagazina.innerHTML = ''
    for(let i = 0;i<resp.length;i++){
        if(resp[i].StatusWork == true){
        let optionMag = document.createElement('option')
        optionMag.append(resp[i].NameMagazina)
        optionMag.value = i
        idMagazina.append(optionMag)   
        }  
    }
    for(let i = 0;i<resp.length;i++){
        if(resp[i].StatusWork == true){
        let optionMagT = document.createElement('option')
        optionMagT.append(resp[i].NameMagazina)
        optionMagT.value = i
        checkKnigaInputS.append(optionMagT)
        }     
    }
    for(let i = 0;i<resp.length;i++){
        if(resp[i].StatusWork == true){
        let optionMagS = document.createElement('option')
        optionMagS.append(resp[i].NameMagazina)
        optionMagS.value = i
        idMagazinaKnigaS.append(optionMagS)
        }     
    }
   let idMagazinaUp = document.querySelector('.idMagazinaUp')
   for(let i = 0;i<resp.length;i++){
    if(resp[i].StatusWork == true){
    let optionMagD = document.createElement('option')
    optionMagD.append(resp[i].NameMagazina)
    optionMagD.value = i
    idMagazinaUp.append(optionMagD)
    }     
}
    let closeMagazinSel = document.querySelector('.closeMagazinSelect')
    for(let i = 0;i<resp.length;i++){
        if(resp[i].StatusWork == true){
            let optionD = document.createElement('option')
        optionD.append(resp[i].NameMagazina)
        optionD.value = i
        closeMagazinSel.append(optionD)
        }
        
    }
}

let WindowHidden = document.querySelector('.WindowHidden')
WindowHidden.style.display = 'none'
async function getAccounts(){
    accounts = await web3.eth.getAccounts()
    console.log(accounts)
    
    // getBalance(accounts[0])
    // // let selectAccounts = document.createElement('select')
    // // for(let i = 0;i<accounts.length;i++){
    // //     let optionAccount = document.createElement('option')
    // //     optionAccount.innerHTML = accounts[i]
    // //     selectAccounts.append(optionAccount)
    // // }
    // profile.append(selectAccounts)

    // selectAccounts.addEventListener('change',()=>{
    //     getBalance(selectAccounts.value)
    // })
    registration(accounts)
    let selectShops = document.querySelector('.SelectAddShop')
     for(let i = 0;i<accounts.length;i++){
            
            let optionAccount = document.createElement('option')
            optionAccount.innerHTML = accounts[i]
            selectShops.append(optionAccount)
            
        
    
    }
    checkStatusMagazinsS()
}
getAccounts()
let WindowBuyer = document.querySelector('.WindowBuyer')
WindowBuyer.style.display = 'none'
let WindowSeller = document.querySelector('.WindowSeller')
WindowSeller.style.display = 'none'
 export default async function regis(){
    let addressValue = document.querySelector('.selectAccounts').value 
    let passwordValue = document.querySelector('.passwordReg').value 

    let resp = await contractInstance.methods
        .registration(addressValue,passwordValue)
        .send({from:addressValue},function(error,result){
             if(error){
                  alert("Error registration")
              }else{
                   alert('Successful registration')
               }
        })

}   

export async function enterInAcc(){
    let addressValue = document.querySelector('.selectAccountsEnter').value
    let passwordValue = document.querySelector('.passwordEnter').value
    let enter = document.querySelector('.enter')

    let resp = await contractInstance.methods
        .enterInAccount(addressValue,passwordValue)
        .send({from:addressValue},function(error,result){
            if(error){
                alert('Error enter')
            }else{
                alert("Successful enter")
                enter.style.display = 'none'
                Profile.style.display = 'block'
                WindowHidden.style.display = 'block'
                let pAddress = document.createElement('h1')
                
                   
                pAddress.innerHTML = addressValue
                Profile.append(pAddress)
                getBalance(addressValue)
                acc = pAddress.innerHTML
                checkDownPokypatel()
                checkUpProdavec()
                getRole(acc)
                checkUpProdavecForAdmin()
                checkDownPokypatelForAdmin()
            }
            
        
        })
}

async function getRole(acc){
    let pRole = document.createElement('h1')
    pRole.className = "StatusUser"
    let resp = await contractInstance.methods
            .checkUser(acc)
            .call({from:acc})
            if(resp.activeRole == 2){
                AdminWindow.style.display = 'flex'
                WindowHidden.style.display = 'flex'
            }else{
                AdminWindow.style.display = 'none'
                WindowHidden.style.display = 'none'
            }
            if(resp.role == 0){
                pRole.innerHTML = "You buyer"
                WindowBuyer.style.display = 'block'
                checkKnigaWindow.style.display = 'block'
            }else if(resp.role == 1){
                pRole.innerHTML = "You seller"
                WindowSeller.style.display = 'block'
            }else if(resp.role == 2){
                pRole.innerHTML = "You admin"
                AdminWindow.style.display = 'flex'
                WindowHidden.style.display = 'flex'
            }else{
                pRole.innerHTML = "You shop"
            }
            Profile.append(pRole)
            upWindow.style.display = 'block'
            
}

async function getBalance(acc){
    balanAccount = await web3.eth.getBalance(acc)
    
    balance.innerHTML = ''
    balance.innerHTML = `Ваш баланс = ${web3.utils.fromWei(balanAccount,"ether")}`
    Profile.append(balance)
}


let NameMagazin = document.querySelector('.NameMagazin')
async function AddShop(){
    let city = document.querySelector('.inputAddShopCity')
    let resp = await contractInstance.methods
        .addMagazin(NameMagazin.value,document.querySelector('.SelectAddShop').value,city.value)
        .send({from:acc,gas:"6721975"},function(error,result){
            if(error){
                alert("Error add shop")
            }else{
                alert("Successful add shop")
            }
        })
        checkStatusMagazinsS()
}

async function addWorkers(){
    let idMagazina = document.querySelector('.idMagazina')
    let AdressAddWorkers = document.querySelector('.AdressAddWorkers')

    let resp = await contractInstance.methods
    .addWorkers(idMagazina.value,AdressAddWorkers.value)
    .send({from:acc},function(error,result){
        if(error){
            
            alert("Error add worker")
        }else{
            alert("Successful add worker")
        }
    })
}

async function checkKnigaZalob(){
    let checkKniga = document.querySelector('.checkKniga')
    let checkKnigaInput = document.querySelector('.checkKnigaInput')
    checkKniga.innerHTML = ''
    let resp = await contractInstance.methods
    .checkKnigaZalob(checkKnigaInput.value)
    .call({from:acc},function(error,result){
        if(error){
            alert('Error check kniga')
        }else{
            alert('Successful check kniga')
        }
    })
    console.log(resp)
    for(let i = 0;i<resp.length;i++){
        let pCount = document.createElement('h5')
        let p = document.createElement('p')
        let raitingP = document.createElement('p')
        let idMagaz = checkKnigaInput.value
        let buttonLike = document.createElement('button')
        let buttonDis = document.createElement('button')
        buttonLike.className = `like ${i}`
        buttonDis.className = `Dis ${i}`

        buttonLike.addEventListener('click',()=>{
            let idZapisi = buttonLike.className.slice(buttonLike.className.indexOf(' ')+1)
            giveLikeOrDis(idMagaz,idZapisi,true)
            
        })

        buttonDis.addEventListener('click',()=>{
            let idZapisi = buttonDis.className.slice(buttonDis.className.indexOf(' ')+1)
            giveLikeOrDis(idMagaz,idZapisi,false)
            
        })

        buttonLike.textContent = 'Like'
        buttonDis.textContent = 'Dislike'

        let inputComment = document.createElement('input')
        let addInputComment = document.createElement('button')
        inputComment.className = `Input${i}`
        // if(document.querySelector('.StatusUser').textContent == "You admin"){
        //     inputComment.setAttribute('disabled','disabled')
        // }
        addInputComment.className = `Comm ${i}`
        addInputComment.textContent = 'add comment'
        addInputComment.addEventListener('click',()=>{
            let idZapisi = addInputComment.className.slice(addInputComment.className.indexOf(' ')+1)
            let textId =    document.querySelector(`.Input${i}`)
            addCommInKniga(idMagaz,idZapisi,textId.value)
            
        })

        let pCountLike = document.createElement('p')
        let pCountDis = document.createElement('p')
        
        let chetLike = 0
        let chetDis = 0
        let chetLikeCom = 0
        let chetDisCom = 0
        
            let divComment = document.createElement('div')
            divComment.className = "CommDiv"
            
        for(let w = 0;w<resp[i].comment.length;w++){ 
            let buttonDisCom = document.createElement('button')
         let buttonLikeCom = document.createElement('button')
            chetLikeCom = 0
            chetDisCom = 0
            for(let s = 0;s < resp[i].comment[w].likeDis.length;s++){
                if(resp[i].comment[w].likeDis[s].likeOrDis == true){
                    chetLikeCom = chetLikeCom + 1
                }else if(resp[i].comment[w].likeDis[s].likeOrDis == false){
                    chetDisCom = chetDisCom + 1
                
                }else if(resp[i].comment[w].likeDis[s].likeOrDis == undefined){
                    console.log("error")
                }
               if(resp[i].comment[w].likeDis[s].whoLikeOrDis == acc){
                buttonLikeCom.setAttribute('disabled','disabled')
                buttonDisCom.setAttribute('disabled','disabled')
               }
            }

            let pCountLikeComm = document.createElement('p')
            let pCountDisComm = document.createElement('p')
            let divCOmm = document.createElement('div')
           
            
            
            divCOmm.className = `KnigaZalobDIV${i}`

            pCountLikeComm.append(`Like: ${chetLikeCom}`)
            pCountDisComm.append(`Dislike: ${chetDisCom}`)
            buttonLikeCom.className = `LikeComm ${w}`
            let textComm = document.createElement('p')
            buttonDisCom.className = `DisComm ${w}`
            buttonDisCom.addEventListener('click',()=>{
                giveLikeOrDisOcenka(idMagaz,i,buttonDisCom.className.slice(buttonDisCom.className.indexOf(' ')+1),false)
                
            })
            buttonLikeCom.addEventListener('click',()=>{
                giveLikeOrDisOcenka(idMagaz,i,buttonLikeCom.className.slice(buttonLikeCom.className.indexOf(' ')+1),true)
                
            })
            buttonLikeCom.textContent = 'Like'
            buttonDisCom.textContent = 'Dislike'
            textComm.append(`Comment: ${resp[i].comment[w].text}`)
            divCOmm.append(textComm)
            divCOmm.append(pCountLikeComm)
            divCOmm.append(pCountDisComm)
            divCOmm.append(buttonLikeCom)
            divCOmm.append(buttonDisCom)
            
            divComment.append(divCOmm)
        }
        
        for(let j = 0;j<resp[i].likeDis.length;j++){
             if(resp[i].likeDis[j].likeOrDis == true){
                chetLike = chetLike + 1
                
            }else{
                chetDis = chetDis + 1
            }
            if(resp[i].likeDis[j].whoLikeOrDis == acc){
                buttonLike.setAttribute('disabled','disabled')
                buttonDis.setAttribute('disabled','disabled')
            }
        }
        
           
        
        pCountLike.append(`Like: ${chetLike}`)
        pCountDis.append(`Dislike: ${chetDis}`)
        let div = document.createElement('div')
        pCount.append(`Magazin ${checkKnigaInput.value}`)
        p.append(`Otzuv: ${resp[i].text}`)
        raitingP.append(resp[i].raiting)
        div.append(pCount)
        div.append(p)
        div.append(raitingP)
        div.append(pCountLike)
        div.append(pCountDis)
        div.append(buttonLike)
        div.append(buttonDis)
        div.append(inputComment)
        div.append(addInputComment)
        div.append(divComment)
        checkKniga.append(div)
    }
}
let closeMagazinButton = document.querySelector('.closeMagazinButton')
async function closeMag(){
    let idMag = document.querySelector('.closeMagazinSelect').value
    let resp = await contractInstance.methods
    .closeMagazin(idMag)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error close")
        }else{
            alert("Successful close")
        }
    })
}

closeMagazinButton.addEventListener('click',()=>{
    closeMag()
})

async function addCommInKniga(idMagazina,idZapisi,text){
    let resp = await contractInstance.methods
    .addCommInKniga(idMagazina,idZapisi,text)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error addComm")
        }else{
            alert("Successful addComm")
        }
    })
    checkKnigaZalob()
}

async function giveLikeOrDisOcenka(idMagazin,idZapisi,idComm,likeOrDisComm){
    let resp = await contractInstance.methods
    .giveLikeOrDisOcenka(idMagazin,idZapisi,idComm,likeOrDisComm)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error likeOrDisComm")
        }else{
            alert("Successful likeOrDisComm")
        }
    })
    checkKnigaZalob()
}

async function giveLikeOrDis(idMagazin,idZapisi,likeOrDis){
    let resp = await contractInstance.methods
    .giveLikeOrDis(idMagazin,idZapisi,likeOrDis)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error likeOrDis")
        }else{
            alert("Successful likeOrDis")
        }
    })
    checkKnigaZalob()
}

let checkKnigaButton = document.querySelector('.checkKnigaButton')
checkKnigaButton.addEventListener('click',()=>{
    checkKnigaZalob()
})
async function upBuyer(idZaprosa,Otvet){

    let addressBuyer = document.querySelector('.upBuyerInput')

    let resp = await contractInstance.methods
    .upBuyer(idZaprosa,Otvet)
    .send({from:acc,gas:"6721975"},function(error,result){
        if(error){
            alert("Error up buyer")
        }else{
            alert("Successful up buyer")
        }
    })
    checkUpProdavecForAdmin()
}

// let upBuyerButton = document.querySelector('.upBuyerButton')
// upBuyerButton.addEventListener('click',()=>{
//     upBuyer()
// })


async function downProdavec(idZaprosa,Otvet){
    
    let addressDownProdavec = document.querySelector('.addressDownProdavecInput')

    let resp = await contractInstance.methods
    .downProdavec(idZaprosa,Otvet)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error down seller")
        }else{
            alert("Successful down seller")
        }
    })

}

async function addAdmin(){
    let addAdminInput = document.querySelector('.addAdminInput')

    let resp = await contractInstance.methods
    .addAdmin(addAdminInput.value)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error add admin")
        }else{
            alert("Successful add admin")
        }
    })
}

async function ChangeRoleForAdmin(){
    let resp = await contractInstance.methods
    .ChangeRoleForAdmin()
    .send({from:acc},function(error,result){
        if(error){
            alert("Error change role")
        }else{
            alert("Successful change role")

            if(checkKnigaWindow.style.display == 'none'){
                checkKnigaWindow.style.display = 'block'
            }else{
                checkKnigaWindow.style.display = 'none'
            }
        }
    })

}

async function ChangeRoleForProdavecS(){
    let resp = await contractInstance.methods
    .ChangeRoleForProdavec()
    .send({from:acc},function(error,result){
        if(error){
            alert('Error change role')
        }else{
            alert('Successful change role')
        }
    })
    if(checkKnigaWindow.style.display == 'none'){
        checkKnigaWindow.style.display = 'block'
    }else{
        checkKnigaWindow.style.display = 'none'
    }
}
let ChangeRoleForProdavec = document.querySelector('.ChangeRoleForProdavec')
ChangeRoleForProdavec.addEventListener('click',()=>{
    ChangeRoleForProdavecS()
})

let ChangeRoleForAdminButton = document.querySelector('.ChangeRoleForAdminButton')

ChangeRoleForAdminButton.addEventListener('click',()=>{
    ChangeRoleForAdmin()
})



WindowHidden.textContent = "Hide Admin Panel"

WindowHidden.addEventListener('click',()=>{
    if(WindowHidden.textContent == "Hide Admin Panel"){
        AdminWindow.style.display = 'none'
        WindowHidden.textContent = "Show Admin panel"
    }else{
        AdminWindow.style.display = 'flex'
        WindowHidden.textContent = "Hide Admin Panel"
    }
})


async function zaprosDownPokypatel(){
    let idMagazinaForDown = document.querySelector('.idMagazinaForDown')
    let resp = await contractInstance.methods
    .zaprosDownPokypatel(idMagazinaForDown.value)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error down")
        }else{
            alert("Successful down")
        }
    })
    checkDownPokypatel()
}

let otmenaZaprosForDownWindow = document.querySelector('.otmenaZaprosForDownWindow')
async function checkDownPokypatel(){
    otmenaZaprosForDownWindow.innerHTML = ''
    let resp = await contractInstance.methods
    .checkDownPokypatel()
    .call({from:acc})

    console.log(resp)
    for(let i = 0;i<resp.length;i++){
        if(acc == resp[i].newPokypatel && resp[i].statusResN == false){
            let pDown = document.createElement('p')
            
            let buttonOtmenaDown = document.createElement('button')
            buttonOtmenaDown.className = `Otmena ${i}`
            buttonOtmenaDown.textContent = "Otmena"
            pDown.append(`New buyer: ${resp[i].newPokypatel}`)
        
        pDown.append(`Status: ${resp[i].statusResN}`)
        pDown.append(buttonOtmenaDown)
        buttonOtmenaDown.addEventListener('click',()=>{
            let idZaprosa = buttonOtmenaDown.className.slice(buttonOtmenaDown.className.indexOf(' ')+1)
            otmenaZaprosForDown(idZaprosa)
        })
        otmenaZaprosForDownWindow.append(pDown)
    }
        }
        
}

// let otmenaZaprosForDownButton = document.querySelector('.otmenaZaprosForDownButton')
// otmenaZaprosForDownButton.addEventListener('click',()=>{
//     checkDownPokypatel()
// })

setInterval(()=>checkDownPokypatel(),60000)
setInterval(()=>checkUpProdavec(),60000)

async function otmenaZaprosForDown(idZaprosa){
    let resp = await contractInstance.methods
    .otmenaZaprosForDown(idZaprosa)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error otmena zaprosa")
        }else{
            alert("Successful otmena zaprosa")
        }
    })
    checkDownPokypatel()
}
let otmenaZaprosForUpWindow = document.querySelector('.otmenaZaprosForUpWindow')
async function checkUpProdavec(){
    otmenaZaprosForUpWindow.innerHTML = ''
    let resp = await contractInstance.methods
    .checkUpProdavec()
    .call({from:acc})
    console.log(resp)
    for(let i = 0;i<resp.length;i++){
        if(acc == resp[i].newProdavec && resp[i].statusResD == false){
         let pUpProdavec = document.createElement('p')
         let buttonOtmenaUp = document.createElement('button')
         pUpProdavec.append(`New seller: ${resp[i].newProdavec}`)   
         pUpProdavec.append(`Status: ${resp[i].statusResD}`)  
         
         buttonOtmenaUp.className = `OtmenaUp ${i}`
            buttonOtmenaUp.textContent = "OtmenaUp" 
            buttonOtmenaUp.addEventListener('click',()=>{
                let idZaprosa = buttonOtmenaUp.className.slice(buttonOtmenaUp.className.indexOf(' ')+1)
                OtmenaZaprosaForUp(idZaprosa)
            
        })
        pUpProdavec.append(buttonOtmenaUp)
         otmenaZaprosForUpWindow.append(pUpProdavec)

    }
    }
}
let CheckUpProdavecForAdmin = document.querySelector('.upBuyerWindow')

async function checkUpProdavecForAdmin(){
    CheckUpProdavecForAdmin.innerHTML = ''
    let resp = await contractInstance.methods
    .checkUpProdavec()
    .call({from:acc})
    console.log(resp)
    for(let i = 0;i<resp.length;i++){
        if(resp[i].statusResD == false){
         let pUpProdavec = document.createElement('p')
         let buttonOtmenaUp = document.createElement('button')
         pUpProdavec.append(`New seller: ${resp[i].newProdavec}`)   
         pUpProdavec.append(`Status: ${resp[i].statusResD}`)  
         let buttonGood = document.createElement('button')
         buttonGood.className = `GoodUp ${i}`
         buttonGood.textContent = 'GoodUp'
         buttonOtmenaUp.className = `OtmenaUp ${i}`
            buttonOtmenaUp.textContent = "OtmenaUp" 
            buttonOtmenaUp.addEventListener('click',()=>{
                let idZaprosa = buttonOtmenaUp.className.slice(buttonOtmenaUp.className.indexOf(' ')+1)
                upBuyer(idZaprosa,false)
            
        })
        buttonGood.addEventListener('click',()=>{
            let idZapros = buttonGood.className.slice(buttonGood.className.indexOf(' ')+1)
            upBuyer(idZapros,true)
        })
        pUpProdavec.append(buttonGood)
        pUpProdavec.append(buttonOtmenaUp)
        
        CheckUpProdavecForAdmin.append(pUpProdavec)
        }
         

    
    }
}
let addressDownProdavec =document.querySelector('.addressDownProdavec')
async function checkDownPokypatelForAdmin(){
    addressDownProdavec.innerHTML = ''
    let resp = await contractInstance.methods
    .checkDownPokypatel()
    .call({from:acc})

    console.log(resp)
    for(let i = 0;i<resp.length;i++){
        if(resp[i].statusResN == false){
            let pDown = document.createElement('p')
            let buttonGood = document.createElement('button')
         buttonGood.className = `GoodUp ${i}`
         buttonGood.textContent = 'GoodUp'
            let buttonOtmenaDown = document.createElement('button')
            buttonOtmenaDown.className = `Otmena ${i}`
            buttonOtmenaDown.textContent = "Otmena"
            pDown.append(`New buyer: ${resp[i].newPokypatel}`)
        
        pDown.append(`Status: ${resp[i].statusResN}`)
        pDown.append(buttonOtmenaDown)
        pDown.append(buttonGood)
        buttonOtmenaDown.addEventListener('click',()=>{
            let idZaprosa = buttonOtmenaDown.className.slice(buttonOtmenaDown.className.indexOf(' ')+1)
            downProdavec(idZaprosa,false)
        })
        buttonGood.addEventListener('click',()=>{
            let idZapros = buttonGood.className.slice(buttonGood.className.indexOf(' ')+1)
            downProdavec(idZapros,true)
        })
        addressDownProdavec.append(pDown)
    }
        }
        
}

async function zaprosUpProdavec(){
    let upBuyerInput = document.querySelector('.idMagazinaUp')
    let resp = await contractInstance.methods
    .zaprosUpProdavec(upBuyerInput.value)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error up seller")
        }else{
            alert('Successful up seller')
        }
    })
    checkUpProdavec()
}
async function OtmenaZaprosaForUp(idZaprosa){
    let resp = await contractInstance.methods
    .otmenaZaprosForUp(idZaprosa)
    .send({from:acc},function(error,result){
        if(error){
            alert("Error otmena zaprosa")
        }else{
            alert("Successful otmena")
        }
    })
    checkUpProdavec()
}

let idMagazinaKniga = document.querySelector('.idMagazinaKniga')
let textForKniga = document.querySelector('.textForKniga')
let RaitingKniga = document.querySelector('.RaitingKniga')
let addKnigaButton = document.querySelector('.addKniga')

async function addKnigaZalob(){
    let resp = await contractInstance.methods
    .addKnigaZalob(idMagazinaKniga.value,textForKniga.value,RaitingKniga.value)
    .send({from:acc},function(error,result){
        if(error){
            alert('Error add kniga zalob')
        }else{
            alert('Successful add kniga zalob')
        }
    })
}


// async function addCommInKniga(){
//     let resp = await contractInstance.methods
//     .addCommInKniga()
// }



addKnigaButton.addEventListener('click',()=>{
    addKnigaZalob()
})




let zaprosUpProdavecButton = document.querySelector('.zaprosUpProdavecButton')
zaprosUpProdavecButton.addEventListener('click',()=>{
    zaprosUpProdavec()
})


let zaprosDownPokypatelButton = document.querySelector('.zaprosDownPokypatelButton')

zaprosDownPokypatelButton.addEventListener('click',()=>{
    zaprosDownPokypatel()
})


let addAdminButton = document.querySelector('.addAdminButton')
addAdminButton.addEventListener('click',()=>{
    addAdmin()
})


// let addressDownProdavecButton = document.querySelector('.addressDownProdavecButton')
// addressDownProdavecButton.addEventListener('click',()=>{
//     downProdavec()
// })


let addWorkerButton = document.querySelector('.addWorkerButton')
addWorkerButton.addEventListener('click',()=>{
    addWorkers()
})

let addShopButton = document.querySelector('.addShopButton')

addShopButton.addEventListener('click',()=>{
    AddShop()
})



upWindow.addEventListener('click',()=>{
    window.scroll(0,0)
})
