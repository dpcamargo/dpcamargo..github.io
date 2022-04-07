let projectContainers = document.getElementsByClassName("project_container");
let ProjecsLength = document.getElementsByClassName("project_container").length;
let scrool = true;

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}

function disableScrool() {
  document
    .getElementById("wrapper")
    .addEventListener("wheel", preventScroll);
}

function enableScrool() {
  document
    .getElementById("wrapper")
    .removeEventListener("wheel", preventScroll);
}

for (let i = 0; i < ProjecsLength; i++) {
  let element = projectContainers[i];
  element.addEventListener("click", () => {
    let src = element.getAttribute("project-src");
    document.getElementById("code_modal_iframe").src = src;
    document.getElementById("code_modal").classList.add("visible");
    document.getElementById("code_modal").classList.add("loaded");

    document.querySelector("iframe").style.overflow = "auto";
    disableScrool()
  });
}

document.getElementById("close").addEventListener("click", () => {
    enableScrool()
});
