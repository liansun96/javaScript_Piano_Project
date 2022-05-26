let chords = document.getElementById("chords");
let pianoMemory = [];
let list = document.getElementById("list");

function run(x){
    let a = new Audio(`sounds/${x}.mp3`);
    a.play();
    chords.value += x + ",";
    console.log(`U play ${x} key`);
}

function saveChords(){
    let input = chords.value;
    pianoMemory.push(input);
    console.log(`${input} is saved in memory`);
    chords.value = "";
    list.innerHTML="";
    pianoMemory.map(function (el,index){
        list.innerHTML += `<li class="list-group-item overflow-auto mb-3 d-flex justify-content-between align-content-center">
                            ${el} <button class="btn btn-sm btn-outline-secondary" onclick="rePlay(${index})">
                            Replay</button></li>`;
    })
}

let m = ["C4","E4","A4"];
function runMemory(arr,delay=500){
    let x= delay;
    arr.map(function (el,index){
        setTimeout(run,x,el);
        x += delay;
    })
}

function rePlay(x){
    let current = pianoMemory[x].split(",");
    current.pop();
    runMemory(current);
    chords.value = "";
}

document.addEventListener("keyup",function(e){
    console.log(e.keyCode);
    let current = e.keyCode;
    if (current == 65){
        run('C4');
    }else if(current == 83){
        run('D4');
    }else if(current == 68){
        run('E4');
    }else if(current == 70){
        run('F4');
    }else if(current == 74){
        run('G4');
    }else if(current == 75){
        run ('A4');
    }else if(current == 76){
        run('B4');
    }else if(current == 186){
        run('C5');
    }
})