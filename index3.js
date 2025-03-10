const  postType = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => showAllData(data))
}

postType()

const showAllData = (posts)=>{
    const newDiv = document.getElementById('money-data');
    for(let i = 0; i< posts.length;i++){
        console.log(posts[i]);
        const div = document.createElement('div');
        div.classList.add('bg-white', 'shadow-md','rounded-lg')
        div.innerHTML = `
        <div class="p-4 rounded-lg ">
        <h2 class="text-2xl font-bold">id : ${posts[i].id} </h2>
        <h2 class="text-xl font-semibold">name : ${posts[i].name}</h2>
        <h2 class="font-medium ">email : ${posts[i].email}</h2>
        <h2 class="text-gray-500">Body : ${posts[i].body}</h2>
        
        
        </div>
        `
        newDiv.appendChild(div);
    }
}

