function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => userData(data))
    
}
function userData (value){
    console.log(value)
}