const handleData = async () => {
    try {
        const myData = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await myData.json();
        console.log(posts);
        displayNewData(posts)
        
    }
    catch (error) {
        console.error(error.message);
    }
}

handleData()

const displayNewData=(posts)=>{
    const newContainer = document.getElementById('new-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('bg-white', 'p-4', 'rounded-lg', 'shadow-md');
        div.innerHTML = `
        <div class="">
        <p class="text-xl font-bold">Id : ${post.id}</p>
        <h2 class="font-semibold">${post.title}</h2>
        <p class="text-gray-500">${post.body}</p> 
        </div>
        `
        newContainer.appendChild(div)
    }
}