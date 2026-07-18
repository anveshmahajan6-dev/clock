setInterval(function(){
  let time = new Date() ; 
  document.getElementById("anv1").innerHTML=
  time.toLocaleTimeString("en-IN",{
    hour:"2-digit",
    hour12:false 

  });

  document.getElementById("anv2").innerHTML=
  time.toLocaleTimeString("en-IN",{
    minute:"2-digit",
    hour12:false   
  });

  let hour = time.getHours() ;
    if(hour % 12 == 0){
      document.getElementById("anv1").innerHTML=
      12 ; 
      }
    else{
      document.getElementById("anv1").innerHTML=
      hour % 12 ;
    }  

},1000);  