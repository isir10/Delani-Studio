$("form#form1").on('submit',function(event){
    //event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    var message = $("textarea#message").val();

    if ($("input#name").val() && $("input#email").val()){
        alert (name +", we have received your message. Thank you for reaching to us.");
    }
    else {
        alert("please enter your name and email!");
    }

 });

 $(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });