// FOOTER //
window.onload = function() {
    let arrLang = ["HTML", "CSS", "JavaScript"]
    
    function thisPage(arr) {
        var s = "This page was built using:";
        
        for (var i=0;i<arr.length;i++){
           if (i!=arr.length-1 && i!=arr.length-2){
               s +=arr[i] +','
           }
           else if (i==arr.length-2){
                s +=arr[i]
           }
           else  {
               s+=' and ' + arr[i]
           }
        }
    
    document.querySelector('.lang').innerHTML ='<p>'+s+'</p>';
    }
        
    thisPage(arrLang)

// FOOTER //

//SUBMIT//
    var index, len;
    
    len = document.getElementsByTagName('input').length;    
    function a() {

        document.getElementById('submitButton').disabled = this.value.trim().length == 0;
    }
    
        for (index = 0; index < len; index++) {
        document.getElementsByTagName('input')[index].addEventListener('input', a);

        a.call(document.getElementsByTagName('input')[index]);

    }
}
        function myFunction(){
            alert("First Name: "+document.getElementById('name').value+', Last Name: '+document.getElementById('last-name').value+', Email: '+document.getElementById('email').value+', Comment: '+document.getElementById('comments').value+', Score: '+document.getElementById('additional').value);
            }
//SUBMIT//