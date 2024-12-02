document.querySelector(".wins").style.visibility="hidden"
var check=true;
var sc =0; var scs=0;
let all = document.querySelectorAll(".cs");
let as = document.querySelectorAll(".cs").forEach(element => {
    element.addEventListener("click", ()=>{
        element.innerHTML = check ? "X" : "O";
        check = !check;
        element.style.pointerEvents="none";
        checkWin();
        document.querySelector(".reset").addEventListener("click", ()=>{
            document.querySelectorAll(".cs").forEach(e=>{
                e.innerHTML=""
                e.style.pointerEvents="auto"
                check=true;
                document.querySelector(".wins").style.visibility="hidden"
            })
        })
        document.querySelector(".new-game").addEventListener("click", ()=>{
            document.querySelectorAll(".cs").forEach(e=>{
                e.innerHTML="";
                e.style.pointerEvents="auto";
                document.querySelector(".score").innerHTML="X - SCORE <br>"
                document.querySelector(".scores").innerHTML="Y - SCORE <br>";
                sc=0; scs=0;
                check=true;
                document.querySelector(".wins").style.visibility="hidden"
            })
        })
        
    })
    
});

function checkWin() {
    let win = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ];

    let winnerDetected = false; // Track if a win is detected

    win.forEach(element => {
        if (
            all[element[0]].innerHTML === all[element[1]].innerHTML &&
            all[element[1]].innerHTML === all[element[2]].innerHTML &&
            all[element[0]].innerHTML !== ""
        ) {
            console.log(`Winner is ${all[element[0]].innerHTML}`);
            document.querySelectorAll(".cs").forEach(e => {
                e.style.pointerEvents = "none";
            });

            if (!winnerDetected) {
                if (all[element[0]].innerHTML === "X") {
                    sc++;
                    document.querySelector(".score").innerHTML = "X Score: " + sc;  

                } else if (all[element[0]].innerHTML === "O") {
                    scs++;
                    document.querySelector(".scores").innerHTML = "O Score: " + scs;
                }
                document.querySelector(".wins").style.visibility="visible";

                // document.querySelector(".winz")
                document.querySelector(".mg").innerHTML=`${all[element[0]].innerHTML} HAS WON`
                winnerDetected = true;
            }
        }
    });

    chec = winnerDetected; 
}



