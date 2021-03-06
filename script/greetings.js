// DOM
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form > input")
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//functions
function init() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    if(savedUsername===null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
    } else {
        paintGreetings(savedUsername);
    }
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

//Events
loginForm.addEventListener("submit", (event)=>{
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
})

init();