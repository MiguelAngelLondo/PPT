



const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
const estart = document.getElementById('start')

window.addEventListener("DOMContentLoaded", pressButton)

function pressButton(){
    rock.addEventListener("click", (event) => pressedButton(event, rock))
    paper.addEventListener("click", (event) => pressedButton(event, paper))
    scissors.addEventListener("click", (event) => pressedButton(event, scissors))

}

function pressedrock (){
    let answer = "rock"
    return answer

    }
    function pressedpaper (){
        let answer = "paper"
        return answer
    
        }
        function pressedButton (){
            let answer = "scissors"
            return answer
        
            }