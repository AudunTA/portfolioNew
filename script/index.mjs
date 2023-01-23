import { data } from "./data.mjs";

console.log(data);

const container = document.querySelector(".wrapper-cards");

for (let i = 0; i < data.length; i++) {
  let link = "";
  if (data[i].liveLink) {
    link = `<a href=${data[i].liveLink} class="live-link">Live site</a>`;
  } else {
    console.log("nope");
  }
  container.innerHTML += `
  <div class="card">
  <div class="top">
    <img src="${data[i].imgsrc}" class="img-card" />
    <h2>${data[i].title}</h2>
    <p>
      ${data[i].description}
    </p>
    ${link}
  </div>

  <a href="${data[i].gitlink}"
  ><button id="project-seeMore">View on github</button></a
>
</div>`;
}
