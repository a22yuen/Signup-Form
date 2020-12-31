
$(".button2").click(function(){
  isEmpty(".fname");
  isEmpty(".lname");
  isEmpty(".email");
  isEmpty(".password");
})

$(".form-group").click(function(){
  $("input",this).removeClass("empty");
  $("img",this).addClass("hidden");
  $("small",this).addClass("hidden");
})


function isEmpty(cl){
  if($("input",cl).val() == ""){
    $("input", cl).addClass("empty");
    $("img", cl).removeClass("hidden");
    $("small", cl).removeClass("hidden");
  }
  else if(cl == ".email"){
    var email = $("input", cl).val();
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    if(!emailReg.test(email)){
      $("input", cl).addClass("empty");
      $("img", cl).removeClass("hidden");
      $("small", cl).removeClass("hidden");
    }
  }
}
