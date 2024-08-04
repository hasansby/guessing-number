// let test = document.getElementById("title").textContent
// console.log(test)
// let txt = document.getElementsByClassName("question-box")[0].innerHTML
// console.log(txt)

// var text = document.querySelector(".title").textContent
// console.log(text)

// let ranNumber = Math.floor(Math.random()*20)
// document.querySelector('#buttonArea').addEventListener('click',()=>{
//     let userGuess = Number(document.querySelector('#userguess').value)
//     let showResult = document.querySelector(".test")
//     if(userGuess && userGuess>=1){
//         if(userGuess<ranNumber){
//             showResult.textContent = "too short"
//         }else if(userGuess>ranNumber){
//             showResult.textContent = "too big"
//         }else if(userGuess=ranNumber){
//             showResult.textContent = "you won"
//         }
//     }
// })


// let ranNumber = Math.floor(Math.random()*20)
// document.querySelector("#buttonArea").addEventListener("click",()=>{
// let savement =Number(document.querySelector("#userguess").value)
// let result = document.querySelector(".test")
// if(savement >=1){
//     if(savement>ranNumber){
//         document.querySelector('body').style.background = "red"
//         result.innerHTML = "too big"
//     }else if(savement<ranNumber){
//         document.querySelector('body').style.background = "red"
//         result.innerHTML = "too short"
//     }else{
//         document.querySelector('body').style.background = "green"
//         result.innerHTML = "you won!"
        
//     }
// }

// })

// let ranNumber = Math.floor(Math.random()*20)
// document.querySelector("#buttonArea").addEventListener("click",()=>{
//     let savement = Number(document.querySelector("#useguess").value)
//     let result = document.querySelector(".test")
//     if(savement >=1){
//         if(savement>ranNumber){
//             result.innerHTML = "too big"
//         }else if(savement<ranNumber){
//             result.innerHTML = "too short"
//         }else {
//             result.innerHTML = "you won !"}
//     }
// })

// let ranNumber = Math.floor(Math.random()*20)
// document.querySelector("#buttonArea").addEventListener("click",()=>{
//     let value = Number(document.querySelector("#userguess").value)
//     let text = document.querySelector(".test")
//     if(value>ranNumber){
//         document.querySelector('body').style.background = 'red'
//         text.textContent = "too big"
//     }else if(value<ranNumber){
//         document.querySelector('body').style.background = 'red'
//         text.textContent = "too short"
//     }else{
//         document.querySelector('body').style.background = 'green'
//         text.textContent = "you won"
//     }
// })

let ranNumber = Math.floor(Math.random()*20)
document.querySelector("#buttonArea").addEventListener("click",()=>{
    let value = Number(document.querySelector("#userguess").value)
    let text = document.querySelector(".test")
    if(value>=1){
        if(value>ranNumber){
            document.querySelector('body').style.background = "red"
            text.innerHTML = "too big"
        }else if(value<ranNumber){
            document.querySelector('body').style.background = "red"
            text.innerHTML = "too short"
        }else{
            document.querySelector('body').style.background = "green"
            text.innerHTML = "you won"
        }
    }
})