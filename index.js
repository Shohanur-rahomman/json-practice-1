function buttonSubmit() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => showData(data))
}

const showData = (posts) => {
    const myDiv = document.getElementById('first-container');
    for (const index of posts) {
        const div = document.createElement('div');
        div.classList.add('flex', 'justify-start', 'items-start', 'gap-4', )
        div.innerHTML = `
            
            <div class=" text-start flex-1">
            ${index.name}
            </div>
            
            <div class=" text-start flex-1">${index.email}</div>
            <div class=" text-start flex-1">${index.username}</div>
        
        `
        myDiv.appendChild(div)
    }
}



buttonSubmit()