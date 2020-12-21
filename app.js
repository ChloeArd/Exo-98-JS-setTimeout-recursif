let decompte = 0;

let timeoutExo = function (){
    let timeoutID = setTimeout(function () {
        if (decompte <= (600000 / 2)){
            let div2 = document.createElement("div");
            div2.innerHTML = "Bonjour, " + decompte;
            document.getElementById("timeout-div").appendChild(div2);
            decompte ++;
            timeoutExo();
        }
        else {
            clearTimeout(timeoutID);
        }
    }, 2000);
}

document.getElementById("timeout").addEventListener("click", timeoutExo);


