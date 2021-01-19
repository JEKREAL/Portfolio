// GITHUB //
var ar = fetch('https://api.github.com/users/JEKREAL')
.then((response) => {
return response.json();
})
.then((data) => {
document.querySelector('#root').innerHTML = '<img src='+'"'+data.avatar_url+'"'+'class="me" />';
document.querySelector('#name').innerHTML ='<h1 class=".profile-container h1">'+ data.name+'</h1>';
});
// GITHUB //