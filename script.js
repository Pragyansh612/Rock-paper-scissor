let again = document.getElementById("try")
again.style.display = "none"
let select = document.getElementById("select")
select.style.display = "none"
let b = "";
function gameon() {
    let a = Math.random();
    let html = "";
    let count = document.getElementById("count");
    let result = document.getElementById("result");
    let res = document.getElementById("res");
    select.style.display = "block"
    setTimeout(() => {
        html += `3 `;
        count.innerHTML = html;
        setTimeout(() => {
            html += `2 `;
            count.innerHTML = html;
            console.log(count)
            setTimeout(() => {
                html += `1`;
                count.innerHTML = html;
                setTimeout(() => {
                    count.style.display = "none";
                    if (a <= 0.33) {
                        b = "Paper";
                    } else if (a > 0.33 && a < 0.66) {
                        b = "Scissor";
                    } else {
                        b = "Rock";
                    }
                    if (selected === b) {
                        res.innerHTML = "Draw"
                    } else if ( selected === "Paper" && b === "Scissor") {
                        res.innerHTML = "YOU LOSER"
                    } else if ( selected === "Scissor" && b === "Rock") {
                        res.innerHTML = "YOU LOSER"
                    } else if ( selected === "Rock" && b === "Paper") {
                        res.innerHTML = "YOU LOSER"
                    } else {
                        res.innerHTML = "you are just lucky"
                    }
                    select.style.display = "none"
                    html = "";
                    console.log(a);
                    result.innerHTML = b;
                    again.style.display = "block";
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
let selected = ''
function paper(){
    selected = 'Paper'
}
function rock(){
    selected = 'Rock'
}
function scissor(){
    selected = 'Scissor'
}
function tryagain(){
    again.style.display = "none"
    res.innerHTML = ''
    result.innerHTML = ''
    count.innerHTML = ''
    count.style.display = "block"; 
    clearTimeout()
    gameon()
}