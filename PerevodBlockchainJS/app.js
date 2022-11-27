import abi from "./components/ABI.js";

const address = "0x219E08bC4f4519dbA306713aF840CBfb75bA436d";



let web3;
let accountss;
let accounts;
let balance;
let acc;
let contractInstance
let main = document.querySelector('.main')
let sablon = document.querySelector('.sablon')
main.style.display = 'none'

let golosovanie = document.querySelector('.golosovanie')
golosovanie.style.display = 'none'
let exitButton = document.querySelector('.exitButton')
exitButton.style.display = 'none'
	exitButton.addEventListener('click',()=>{
		localStorage.clear()
		location.reload()
	})

async function connect() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  console.log(web3);
  contractInstance = new web3.eth.Contract(abi, address);

  accountss = await web3.eth.getAccounts();

	for(let i = 0; i<accountss.length;i++){
			let res = await web3.eth.personal.unlockAccount(accountss[i],"1212",0)
			console.log(res)
		}	
}
connect();



async function getAccount(accUser) {
  accounts = await web3.eth.getAccounts();
  console.log(accounts);
  let select = document.getElementById("selectR");
  
	

  for (let i = 0; i < accounts.length; i++) {
    let options = document.createElement("option");
    options.innerHTML = accounts[i];
    select.append(options);
  }

  let select2 = document.getElementById("selectA")

  for(let i = 0; i<accounts.length;i++){
	let options = document.createElement("option")
	let resp = await contractInstance.methods
		.returnAddres(accounts[i])
		.call({from:accounts[i]})
	if(resp.admin == true){

	}else{
		options.innerHTML = accounts[i]
		select2.append(options)
	}
  }
 
	
	

  acc = accUser;

  getBalance(accUser);
	getRole(acc)
	
	returnCateg()


  let account = document.querySelector(".account");
  account.innerHTML = accUser;

//   sel.addEventListener("change", () => {
//     console.log(sel.value);
//     acc = sel.value;
//     account.innerHTML = sel.value;
//     getBalance(acc);
//   });
}
let createCategoryAndSablon = document.querySelector('.createCategoryAndSablon')
createCategoryAndSablon.style.display = 'none'
async function getRole(acc){
		
		let resp = await contractInstance.methods
		.returnAddres(acc)
		.call({from:acc})


		let h3 = document.querySelector('.role')

		console.log(resp)
		if(resp.admin == false){
			h3.innerHTML = 'Role: User'
		}else{
			h3.innerHTML = 'Role: Admin'
			createCategoryAndSablon.style.display = 'block'
			golosovanie.style.display = 'block'

		}
	}


async function getBalance(accUser) {
  balance = await web3.eth.getBalance(accUser);

  let balan = document.querySelector(".balance");

  balan.innerHTML = `Ваш баланс = ${web3.utils.fromWei(balance, "ether")} eth`;
}


// console.log(btn);


//////////////////////////////////////////////////////////////////// 
// Регистрация
let WindowSign = document.querySelector('.WindowSign')
let RegistrationWindow = document.querySelector('.RegistrationWindow')
RegistrationWindow.style.display = 'none'
let openReg = document.querySelector('.openReg')

openReg.addEventListener('click',()=>{
	WindowSign.style.display='none'
	RegistrationWindow.style.display = 'block'
})
let openSign = document.querySelector('.openSign')

openSign.addEventListener('click',()=>{
	WindowSign.style.display = 'block'
	RegistrationWindow.style.display = 'none'
})


async function registration(){

	let addressForReg = document.querySelector('.addressReg')
	let passwordForReg = document.querySelector('.passwordReg')

	let resp  = await contractInstance.methods
		.registration(addressForReg.value,passwordForReg.value)
		.send({from:addressForReg.value}, function(error,result){
			if(error){
				alert('Ошибка регистрации')
			}else{
				alert('Вы зарегистрировались')
			}
		})

}
//////////////////////////////////////////////////////////////////// 
// Вход  


	let addressEnter = document.querySelector('.addressEnter')
  let passwordEnter = document.querySelector('.passwordEnter')
  if(localStorage.length == 1){
	for(let i in localStorage){
		addressEnter.value = i
		passwordEnter.value = localStorage[i]
		break;
	}	
  }
	
		
		
async function signInAccount() {
  

  
   let resp = await contractInstance.methods
    .enterAcc(addressEnter.value,passwordEnter.value)
.send({from: addressEnter.value}, function(error,result){
	if(error){
		alert('Ошибка входа')
	}else{
		alert('Вы вошли')
		
		RegistrationWindow = document.querySelector('.RegistrationWindow')
		RegistrationWindow.style.display = 'none'
		WindowSign.style.display = 'none'
		let addressEnterTest = addressEnter.value
		getAccount(addressEnterTest)
		main.style.display = 'block'
		exitButton.style.display = 'block'
		localStorage.setItem(addressEnter.value,passwordEnter.value)
	}
})


}
//////////////////////////////////////////////////////////////////// 
let buttonForReg = document.querySelector('.ButtonForReg')
let buttonForEnter = document.querySelector('.ButtonForEnter')

  buttonForEnter.addEventListener('click',()=>{
	signInAccount()
  })

  buttonForReg.addEventListener('click',()=>{
	registration()
  })


let buttonForPerevod = document.querySelector('.buttonSendMoney')
//////////////////////////////////////////////////////////////////// 
// Перевод денег
let idCategory = document.querySelector('.idCategory')
	let idSample = document.querySelector('.idSample')
	let recipient = document.querySelector('.recipient')
	let codeWord = document.querySelector('.codeWord')
	let money = document.querySelector('.money')
	
	
	let checkBox3 = document.querySelector('.checkBox3')
	
	
		


async function perevodDeneg(){
	let vubor 	
	if(checkBox3.checked){
		vubor = true
	}else{
		vubor = false
	}
	let checkSelect2
	
	let select = document.querySelector('.select')
	let select2 = document.querySelector('.select2')
	
	if(select2.style.display == 'none'){
		checkSelect2 = 0
	}else{
		checkSelect2 = select2.value
	}
	try{
		let resp = await contractInstance.methods
		.perevod_deneg(select.value,checkSelect2,recipient.value,codeWord.value,vubor)
		.send({value:money.value*10**18,from:acc,gas:"6721975"},function(error,result){
			if(error){
				alert('Ошибка перевода')
			}else{
				alert('Перевод прошел')
			}
		})

	

		getBalance(acc)
	}catch(error){
			if(error = 'Error: invalid BigNumber string (argument="value", value="", code=INVALID_ARGUMENT, version=bignumber/5.1.1)'){
				alert('Введите кодовое слово')
			}else{
				alert(error.message.slice(error.message.indexOf('You')))
			}
			
		
		
	}
	
	
	
	}
	
//////////////////////////////////////////////////////////////////// 
buttonForPerevod.addEventListener('click',()=>{
		// if(checkBox3.checked){
		// 	Admin_perevod()
		// }else{
		// 	perevodDeneg()
		// }
		// perevod_deneg
	perevodDeneg()
	CheckRightPerevod()
	checktranfers()
	
})


// let ButtonForAcceptPerevod = document.querySelector('.ButtonForAcceptPerevod')
//////////////////////////////////////////////////////////////////// 
// Принятие перевода
async function accept_perevod(idRight){
	// let idTranfers = document.querySelector('.idTranfers')
	let codeWAccept = document.querySelector('.codeWAccept')
	
	let resp = await contractInstance.methods
		.accept_perevod(idRight,codeWAccept.value)
		.send({from:acc},function(error,result){
			
			if(error){
				alert('Ошибка подтверждения перевода')
			}else{
				alert('Перевод обрабатывается')
			}
		})

		let resp2 = await contractInstance.methods
		.checkTranfers()
		.call({from:acc})
		
		if(codeWAccept.value != resp2[idRight].codeWord){
				alert('Ошибка принятия ( Кодовое слово неверно )')
			}else{
				alert('Перевод принят')
			}
			CheckRightPerevod()
			checktranfers()
		getBalance(acc)
}	
//////////////////////////////////////////////////////////////////// 


// ButtonForAcceptPerevod.addEventListener('click',()=>{
// 	accept_perevod()
// })



//////////////////////////////////////////////////////////////////// 
// Просмотр транзакций

let checkTranfersAll3 = document.querySelector('.checkTranfersAll3')
let b = false

let transferAccept = document.querySelector('.transferAccept')
async function CheckRightPerevod(b){
	transferAccept.innerHTML = ''
	

	let resp = await contractInstance.methods
		.checkTranfers()
		.call({from:acc})

	console.log(resp)
	for(let i = 0;i<resp.length;i++){
		if(resp[i].recipient == acc){
			let p = document.createElement('p')
			let buttonOtmena = document.createElement('button')
			if(b == false){
				

			if(resp[i].status == false){
				buttonOtmena.textContent = 'Перевод получен'
				buttonOtmena.setAttribute('disabled','disabled')
			}else{
				buttonOtmena.textContent =`Получить ${resp[i].idTranfers}`
			}
			

			p.append(buttonOtmena)
			buttonOtmena.addEventListener('click',()=>{
				let idRight = buttonOtmena.textContent.slice(buttonOtmena.textContent.indexOf(' ')+1)
				accept_perevod(idRight)
			})

			p.append(`Получатель: `)
			p.append(resp[i].recipient)
			p.append(`Отправитель: ${resp[i].sender}; `)
			p.append(`Сумма: ${resp[i].sum}; `)
			transferAccept.append(p)
			transferAccept.append(' ')
		
			
		}else{
			if(resp[i].status == true){
				
			buttonOtmena.textContent =`Получить ${resp[i].idTranfers}`
			
			

			p.append(buttonOtmena)
			buttonOtmena.addEventListener('click',()=>{
				let idRight = buttonOtmena.textContent.slice(buttonOtmena.textContent.indexOf(' ')+1)
				accept_perevod(idRight)
			})

			p.append(`Получатель: `)
			p.append(resp[i].recipient)
			p.append(`Отправитель: ${resp[i].sender}; `)
			p.append(`Сумма: ${resp[i].sum}; `)
			transferAccept.append(p)
			transferAccept.append(' ')
		}
		
		}
			
		}
		
	}
	
}
let ButtonReloadTranAccept = document.querySelector('.ReloadTranAccept')

ButtonReloadTranAccept.addEventListener('click',()=>{
	
	CheckRightPerevod()
	
})

checkTranfersAll3.addEventListener('click',()=>{
	if(checkTranfersAll3.checked){
		b = true
	}else{
		b = false
	}
	CheckRightPerevod(b)
})





let checkTranfersAll2 = document.querySelector('.checkTranfersAll2')
let a = false



let transfer = document.querySelector('.transfer')
async function checktranfers(a){
	transfer.innerHTML = ''
	

	let resp = await contractInstance.methods
		.checkTranfers()
		.call({from:acc})

	console.log(resp)
	for(let i = 0;i<resp.length;i++){
		if(resp[i].sender == acc){
			let p = document.createElement('p')
			let buttonOtmena = document.createElement('button')
			if(a == false){

			
			if(resp[i].status == false){
				buttonOtmena.textContent = 'Перевод получен'
				buttonOtmena.setAttribute('disabled','disabled')
			}else{
				buttonOtmena.textContent =`Отменить перевод`
				buttonOtmena.className = `buttonOtmena_${resp[i].idTranfers}`
			}
			
			buttonOtmena.addEventListener('click',()=>{
				let idTran = buttonOtmena.className.slice(buttonOtmena.className.indexOf('_')+1)
				console.log(idTran)
				otmenaPerevoda(idTran)
			})

			p.append(`Получатель: ${resp[i].recipient}; `)

			p.append(`Отправитель: ${resp[i].sender}; `)
			p.append(`Сумма: ${resp[i].sum}; `)
			p.append(buttonOtmena)
			transfer.append(p)
			transfer.append(' ')
		}else{
			if(resp[i].status == true){
				buttonOtmena.textContent =`Отменить перевод`
				buttonOtmena.className = `buttonOtmena_${resp[i].idTranfers}`
				
			
			buttonOtmena.addEventListener('click',()=>{
				let idTran = buttonOtmena.className.slice(buttonOtmena.className.indexOf('_')+1)
				console.log(idTran)
				otmenaPerevoda(idTran)
			})

			p.append(`Получатель: ${resp[i].recipient}; `)

			p.append(`Отправитель: ${resp[i].sender}; `)
			p.append(`Сумма: ${resp[i].sum}; `)
			p.append(buttonOtmena)
			transfer.append(p)
			transfer.append(' ')
		}
		}
			
		}
		
	}
	
}
checkTranfersAll2.addEventListener('click',()=>{
	if(checkTranfersAll2.checked){
		a = true
	}else{
		a = false
	}
	checktranfers(a)
})

let buttonReloadTrans = document.querySelector('.ReloadTrans')
buttonReloadTrans.addEventListener('click',()=>{
	
	checktranfers(a)
	
})
checktranfers()
//////////////////////////////////////////////////////////////////// 
// otmena
// let ButtonForOtmenaPerevoda = document.querySelector('.ButtonForOtmenaPerevoda')
async function otmenaPerevoda(idTran){
	// let idTranfersOtmena = document.querySelector('.idTranfersOtmena')

	let resp = await contractInstance.methods
		.otmena(idTran)
		.send({from:acc},function(error,result){
			if(error){
				alert('Ошибка отмены перевода')
			}else{
				alert('Перевод отменен')
			}
		})
}


// ButtonForOtmenaPerevoda.addEventListener('click',()=>{
// 	otmenaPerevoda()
// })

//////////////////////////////////////////////////////////////////// 



let checkBox = document.querySelector('.checkBox')
checkBox.addEventListener('click',()=>{
	if(checkBox.checked){
		
		select2.style.display = 'block'
	}else{
		
		select2.style.display = 'none'
		money.value = ''
		select2.value = 0
	}
})


//


// let select = document.getElementById("select");
// 	  let sel = document.getElementsByName("select")[0];
	let select = document.querySelector('.select')
	let selectAdmin = document.querySelector('.selectAdmin')
async function returnCateg(){
		select.innerHTML = ''
		selectAdmin.innerHTML = ''
		let resp = await contractInstance.methods
		.returnCategory()
		.call({from:acc})

		console.log(resp)
		
		
		for (let i = 0; i < resp.length; i++) {
			let optionsAdmin = document.createElement("option");
			optionsAdmin.innerHTML = resp[i].nameCategory;
			optionsAdmin.value = resp[i].idCategory
			selectAdmin.append(optionsAdmin);
			
		  }
	  
  for (let i = 0; i < resp.length; i++) {
    let options = document.createElement("option");
    options.innerHTML = resp[i].nameCategory;
	options.value = resp[i].idCategory
    select.append(options);
	
  }
  returnSam(select.value)

	}
select.addEventListener('change',()=>{
	let valueSelect = select.value
	returnSam(valueSelect)
})

// let select2 = document.getElementById("select2");
// 	  let sel2 = document.getElementsByName("select2")[0];
let select2 = document.querySelector('.select2')
select2.style.display = 'none'
let respForMoney
async function returnSam(valueSelect){
		select2.innerHTML = ''
		let resp = await contractInstance.methods
		.returnSample()
		.call({from:acc})

		console.log(resp)
		
			for(let i = 0;i<resp.length;i++){
				if(resp[i].category == valueSelect){
			let option2 = document.createElement('option')
			option2.innerHTML = resp[i].nameSample
			option2.value = resp[i].idSample
			select2.append(option2)
				
			}
			respForMoney = resp
		}
		
		select2.addEventListener('change',()=>{
				money.value = respForMoney[select2.value].CountMoney
				})

	  
//   for (let i = 0; i < resp.length; i++) {
//     let options2 = document.createElement("option");
//     options2.innerHTML = resp[i].nameSample;
//     select2.append(options2);
//   }
	}

let NameCategory = document.querySelector('.NameCategory')
let addCategory = document.querySelector('.addCategory')
async function createCategory(){
	
	let resp = await contractInstance.methods
		.createCategory(NameCategory.value)
		.send({from:acc},function(error,result){
			if(error){
				alert('Ошибка при создании категории')
			}else{
				alert('Категория создана')
			}
		})
		returnCateg() 
	returnSam()
}
addCategory.addEventListener('click',()=>{
	
	createCategory()
	
})


// let idCategoryForSablon = document.querySelector('.idCategoryForSablon')
let nameSablon = document.querySelector('.nameSablon')
let addSablon = document.querySelector('.addSablon')
async function createSablon(){
	
	let resp = await contractInstance.methods
		.createSablon(nameSablon.value,selectAdmin.value)
		.send({from:acc,gas:"6721975"},function(error,result){
			if(error){
				alert('Ошибка при создании шаблона')
			}else{
				alert('Шаблон создан')
			}
		})
		returnCateg() 
	returnSam()
}

addSablon.addEventListener('click',()=>{
	
	createSablon()
	
})

let checkTranForAccept = document.querySelector('.checkTranForAccept')
let reloadAcceptAdmin = document.querySelector('.reloadAcceptAdmin')
async function checkAdmin(){
	checkTranForAccept.innerHTML = ''
	let resp = await contractInstance.methods
		.checkTranfers()
		.call({from:acc})

	console.log(resp)
	for(let i = 0;i<resp.length;i++){

			let p = document.createElement('p')
			let p1 = document.createElement('p')
			let p2 = document.createElement('p')
			let p3 = document.createElement('p')
			let buttonOtmena = document.createElement('button')
			let buttonAccept = document.createElement('button')
			
			if(resp[i].status == true && resp[i].BezopasnyuPerevod == true && resp[i].acceptAdmin == false){
				
			buttonAccept.textContent = 'Подтвердить перевод'
			buttonOtmena.textContent =`Отменить перевод`
			buttonOtmena.className = `buttonOtmena_${resp[i].idTranfers}`
			buttonAccept.className = `buttonAccept_${resp[i].idTranfers}`
			
			buttonOtmena.addEventListener('click',()=>{
				let idTran = buttonOtmena.className.slice(buttonOtmena.className.indexOf('_')+1)
				console.log(idTran)
				Admin_perevod(idTran,false)
				
			})
			buttonAccept.addEventListener('click',()=>{
				let idTran = buttonAccept.className.slice(buttonAccept.className.indexOf('_')+1)
				Admin_perevod(idTran,true)
				
			})

			p.append(`Получатель: ${resp[i].recipient}; `)

			p1.append(`Отправитель: ${resp[i].sender}; `)
			p2.append(`Сумма: ${resp[i].sum}; `)
			p3.append(buttonAccept)
			p3.append(buttonOtmena)
			
			checkTranForAccept.append(p)
			checkTranForAccept.append(p1)
			checkTranForAccept.append(p2)
			checkTranForAccept.append(p3)
			checkTranForAccept.append(' ')
		}
	}
}
reloadAcceptAdmin.addEventListener('click',()=>{
	checkAdmin()
})


async function Admin_perevod(idTran,statusAccept){
	let resp = await contractInstance.methods
	.acceptAdmin_perevod(idTran,statusAccept)
	.send({from:acc},function(error,result){
		if(error){
			alert('Ошибка админа')
		}
	})

	checkAdmin()
	getBalance(acc)
}

let admin = '0xa07654EC789F7f0Eecf6dA7A52f3C69BaE4A7D6e'
async function notAdmin_perevod(idTran,statusAccept){
	let resp = await contractInstance.methods
	.acceptAdmin_perevod(idTran,statusAccept)
	.send({from:admin},function(error,result){
		if(error){
			alert('Ошибка админа')
		}
	})

	checkAdmin()
	getBalance(acc)
}


//////////////////

let createGolos = document.querySelector('.createGolos')
let progolosovat = document.querySelector('.progolosovat')
let addressNewAdmin = document.querySelector('.addressNewAdmin')


let checkGolos = document.querySelector('.checkGolos')
let createGolosButton = document.querySelector('.createGolosButton')

async function createGolosovanie(addresNewA){
	
	let resp = await contractInstance.methods
		.createVubor(addresNewA)
		.send({from:acc,gas:"6721975"},function(error,result){
			if(error){
				alert('error create golos')
			}else{
				alert('good')
			}
		})
}

createGolosButton.addEventListener('click',()=>{
	createGolosovanie(selectA.options[selectA.selectedIndex].text)
})

async function Golosovanie(idVoice,result){
	let resp = await contractInstance.methods
	.golosovanie(idVoice,result)
	.send({from:acc,gas:"6721975"},function(error,result){
		if(error){
			alert("error golosovaniya")
		}else{
			alert("vu progolosovali")
		}
	})

}

async function returnVoice(){
	progolosovat.innerHTML = ""
	let st
	let resp = await contractInstance.methods
	.returnVoice()
	.call({from:acc})
	
	console.log(resp)
	for(let i = 0;i<resp.length;i++){
		if(resp[i].status == true){

		}else{

	
		let p = document.createElement('p')
		let p2 = document.createElement('p')
		let p3 = document.createElement('p')
		
		if(resp[i].votes[i] == acc){

		}else{
			let butY = document.createElement('button')
		let butN = document.createElement('button')
		butY.textContent = "За"
		butN.textContent = "Против"
		butY.className = `butY_${i}`
		butN.className = `butY_${i}`

		butY.addEventListener('click',()=>{
			let idVoice = butY.className.slice(butY.className.indexOf('_')+1)
			Golosovanie(idVoice,true)
		})
		butN.addEventListener('click',()=>{
			let idVoice = butN.className.slice(butN.className.indexOf('_')+1)
			Golosovanie(idVoice,false)
		})
		
		p3.append(butY)
		p3.append(butN)
		}

		

		p.append(`Кандидат: ${resp[i].candidate}; `)

		if(resp[i].status == false){
			st = "Открыто"
		}else{
			st = "Закрыто"
		}
			p.append(`Статус голосования: ${st}; `)
			p2.append(`Проголосовали: ${resp[i].votes}; `)
			

			progolosovat.append(p)
			progolosovat.append(p2)	
			progolosovat.append(p3)	
		}
	}
	
}

checkGolos.addEventListener('click',()=>{
	returnVoice()
})


setInterval(()=> returnVoice(),15000)
setInterval(()=> CheckRightPerevod(),15000)
setInterval(()=> checktranfers(),15000)