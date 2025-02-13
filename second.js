fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts => {
    const postList = document.getElementById('postList');
    
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Post ${post.id} Title <span >(Click to expand)</span ></strong>`;
        
        const postBody = document.createElement('div');
        postBody.classList.add('post-body');
        postBody.innerHTML = `👉 ${post.body}`;
        
        listItem.appendChild(postBody);
        listItem.addEventListener('click', () => {
            postBody.style.display = postBody.style.display === 'none' ? 'block' : 'none';
        });
        
        postList.appendChild(listItem);
    });
})
.catch(error => console.error('Error fetching data:', error));