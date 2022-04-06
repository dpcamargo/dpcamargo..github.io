let projectContainers = document.getElementsByClassName('project_container')
let ProjecsLength = document.getElementsByClassName("project_container").length

ProjecsLength.map

for (let i = 0; i < ProjecsLength; i++) {
    let element = projectContainers[i]
    element.addEventListener('click', () => {
        let src = element.getAttribute('project-src')
        document.getElementById('code_modal_iframe').src = src
        document.getElementById('code_modal').classList.add('visible')
        document.getElementById('code_modal').classList.add('loaded')
    })
}