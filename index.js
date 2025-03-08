function buttonSubmit() {
    fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
        .then(res => res.json())
        .then(data => displayName(data))
        
}

function displayName(data) {
    const ul1 = document.getElementById('disName');
    const ul2 = document.getElementById('language')
    
    for (const item of data) {
        let liList = document.createElement('li');
        let liNew = document.createElement('li');
        liNew.innerText = item.language;
        liList.innerText = item.name;
        ul1.appendChild(liList);
        ul2.appendChild(liNew) 
    }
  
}

