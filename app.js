let decompte = 0;

let timeoutExo = function (){
    let timeoutID = setTimeout(function () {
        if (decompte <= 300000){ //600000/2 -> 10 min
            let div2 = document.createElement("div");
            div2.innerHTML = "Bonjour, " + (decompte * 2);
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


