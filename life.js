if (window.innerWidth < 380) {
  let answear = prompt(
    "Your Device Is Too Small, Are You Sure You Want To View This Page?\n\nType 'yes' to continue."
  );
  if (answear.toLowerCase() !== "yes") {
    document.body.style.display = "none";
  } else {
    document.body.style.display = "block";
  }
}

var install;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  install = e;
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function glitch(el) {
  el.onmouseover = (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };
}
document.querySelectorAll(".glitch").forEach(glitch);
document.querySelectorAll("button").forEach(glitch);

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+×=/_!@#$%^&*()-":;,?`~\|<>{}[]';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const typingChange = () => {
  const typing = document.getElementById("typing");
  setTimeout(() => (typing.innerText = "Developer"), 500);
  setTimeout(() => (typing.innerText = "Tech Lover"), 1500);
  setTimeout(() => (typing.innerText = "Cat Lover"), 2500);
  setTimeout(() => (typing.innerText = "Arch User"), 3500);
  setTimeout(() => (typing.innerText = "Secret Agent"), 4500);
};

typingChange();
setInterval(typingChange, 7000);

document.getElementById("email").onclick = () =>
  window.open("mailto:hello@mail.sx9.is-a.dev");
document.getElementById("discord").onclick = () =>
  window.open("https://discord.st/sx-aircraft");
document.getElementById("github").onclick = () =>
  window.open("https://github.com/SX-9");
document.getElementById("twitter").onclick = () =>
  window.open("https://twitter.com/SX_Disord");
document.getElementById("share").onclick = () =>
  window.open("https://twitter.com/share?url=" + window.location.href);
document.getElementById("pwa").onclick = install.prompt;

document.getElementById("up").onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

console.log(
  "%cHello%cWorld()",
  "color: cyan; background-color: black; font-family: sans-serif; font-weight: bold;",
  "color:red; background-color: white; font-family: sans-serif; font-weight: bold;"
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/pwa/sw.js");
  console.log("Service Worker Registered!");
}
