if (window.innerWidth < 380) {
  let answear = confirm(
    "Your Device Is Too Small, Are You Sure You Want To View This Page?"
  );
  if (!answear) {
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

fetch("https://api.lanyard.rest/v1/users/882595027132493864")
  .then((r) => r.json())
  .then((j) => {
    document.getElementById("pfp").classList.add(j.data.discord_status);
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

let text = "Developer";
let delay = 250;
let i = 1;
const updateText = function() {
  document.getElementById('typing').innerText = text.substring(0, i);
  i++;
  if (i <= text.length) {
    setTimeout(updateText, delay);
  }
};
updateText();

async function getTopLanguages(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`
  );
  const repos = await response.json();

  const langCount = {};
  repos.forEach((repo) => {
    if (repo.language in langCount) {
      langCount[repo.language]++;
    } else {
      langCount[repo.language] = 1;
    }
  });

  const sortedLangs = Object.entries(langCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  let num = 0;
  sortedLangs.forEach(lang => {
    num++;
    let el = document.createElement('p');
    el.innerText = `${num}. ${lang[0]} - ${lang[1]} Repos`;
    el.classList.add('stats');
    document.getElementById('stats').appendChild(el);
  });
}
getTopLanguages('SX-9');

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
