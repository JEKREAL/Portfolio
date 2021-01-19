//SUBMIT//
window.onload = function() {
    function a() {
    $('form > input, textarea').keyup(function() {
    
    var empty = false;
      
    $('input, textarea').each(function() {
    if ($(this).val() == '') {
    empty = true;
    }
    });
    
    if (empty) {
    $('#submitButton').attr('disabled', 'disabled');
    } else {
    $('#submitButton').removeAttr('disabled');
    }
    });
    };
    a();
    function myFunction(){
        alert("First Name: "+document.getElementById('name').value+', Last Name: '+document.getElementById('last-name').value+', Email: '+document.getElementById('email').value+', Comment: '+document.getElementById('comments').value+', Score: '+document.getElementById('additional').value);
        }
    }
    // PUT in HTML - <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>  //
    
//SUBMIT//