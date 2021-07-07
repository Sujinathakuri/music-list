//Selectors

const musicInput = document.querySelector(".music-input");
const musicButton = document.querySelector(".music-button");
const musicList = document.querySelector(".music-list");
const filterOption = document.querySelector(".filter-music");


//Event Listeners

musicButton.addEventListener('click', addMusic);
musicList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filtermusic);



//Functions

function addMusic(event) {
    event.preventDefault();
    //Music DIV
    const musicDiv = document.createElement("div");
    musicDiv.classList.add("music");

    //Create LI
    const newMusic = document.createElement('li');
    newMusic.innerText = musicInput.value;
    newMusic.classList.add('music-item');
    musicDiv.appendChild(newMusic);



    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class= "fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    musicDiv.appendChild(completedButton);

    //CHECK TRASH BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    musicDiv.appendChild(trashButton);

    //APPEND MUSIC LIST
    musicList.appendChild(musicDiv);

    //CLEAR MUSIC INPUT VALUE
    musicInput.value = "";


}


function deleteCheck(e) {
    const item = e.target;

    //DELETE MUSIC
    if (item.classList[0] === "trash-btn") {
        const music = item.parentElement;
        //ANIMATION
        music.classList.add('fall');
        music.addEventListener('transitionend', function() {
            music.remove();
        });
    }

    //CHECK MARK
    if (item.classList[0] === "complete-btn") {
        const music = item.parentElement;

        music.classList.toggle("completed");
    }
}

//FUNCTION

function filtermusic(e) {
    const musics = musicList.childNodes;
    musics.forEach(function(music) {
        switch (e.target.value) {
            case "all":
                music.style.display = "flex";
                break;
            case "completed song":
                if (music.classList.contains("completed song")) {
                    music.style.display = 'flex';
                } else {
                    music.style.display = "none";
                }
                break;
            case "uncompleted song":
                if (!music.classList.contains("uncompleted song")) {
                    music.style.display = 'flex';
                } else {
                    music.style.display = "none";
                }
                break;
        }
    });
}
var music = [];


//Async JS

const myUsers = {
    userList: []
}

const myCoolFunction = async() => {
    const response = await fetch("https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay");
    const jsonUserData = await response.json();
    console.log(jsonUserData);
    return jsonUserData;
}


const anotherFunc = async() => {
    const data = await myCoolFunction();
    myUsers.userList = data;
}

anotherFunc();
console.log(myUsers.userList);



const newArray = existingArray.map(function(value, index, array) {
    console.log(array);
    return index + ": " + value + "!";
});

console.log(newArray);