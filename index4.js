const myFun = async () => {
    try {
        const posts = await fetch('https://jsonplaceholder.typicode.com/todos');
        const finalPosts = await posts.json();
        console.log(finalPosts);
        showMyFun(finalPosts)


    } catch (error) {
        console.error(error.message);
    }
}

myFun()
const showMyFun = (posts)=>{
    const container = document.getElementById('last-json');
    for(const post of posts){
        console.log(post);
        const div = document.createElement('div');
        div.classList.add('bg-white', 'p-4','rounded-lg')
        div.innerHTML = `
        <h2 class="text-2xl font-bold">${post.id}</h2>
        <h2 class="font-medium">${post.title}</h2>
        <h2 class="text-gray-400">status : ${post.completed}</h2>
        `
        container.appendChild(div);
    }
}