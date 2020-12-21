let decompte = 0;

let timeoutExo = function (){
    setTimeout(function () {
        if (decompte <= 600000){
            let div2 = document.createElement("div");
            div2.innerHTML = "Bonjour, " + decompte;
            document.getElementById("timeout-div").appendChild(div2);
            decompte ++;
            timeoutExo();
        }
    }, 2000);
}

document.getElementById("timeout").addEventListener("click", timeoutExo);


