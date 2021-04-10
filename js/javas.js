 
  function myFunction1(){
   var x,t ;
   x = document.getElementById("mail").value;
   for (var i =0 ; i < x.length ; i++)
   {
     if (x[i]=="@"){
      t=1;}
   }
   if (t==1){document.getElementById("aa2").innerHTML='valide';
 }
 else{
   document.getElementById("aa2").innerHTML='invalide'
 }
} 

/***************************************************************************************************** */
 function myFunction3()
 {
    var m, r ; 
    m= document.getElementById("aa2").innerHTML; 
    if( m!="valide")
   {

 btncnx.disabled = true;

    }
   
 }
   
 /*************************************************************************************************** */
 function myFunction () {
   var x,n,y,t ;
   x = document.getElementById("aa2").innerHTML;
   n =  document.getElementById("demo1").innerHTML;
   
   if ( n=="True" && x =="valide"){
      y=document.getElementById("mail").value;
      t="votre mot de passe est envoyéé vers";
      document.getElementById("demo").innerHTML=t + y;
   }
   else{
      document.getElementById("demo").innerHTML="verifier vos données";

   }
   
 }
 /********************************************************* */
     
 function myFunction2() {
   var x,n ;
   x = document.getElementById("num1").value;
   n = x.length ;
   if (n==8){
      document.getElementById("demo1").innerHTML = "True"; 
     
   }
   else{
      document.getElementById('demo1').innerHTML='invalid '
   }
 }
 
 /*************************************************** */ 
 function myFunction4() {
   var x,n ;
   x = document.getElementById("numc").value;
   n = x.length ;
   if (n==16){
      document.getElementById("demo4").innerHTML = "True"; 
     
   }
   else{
      document.getElementById('demo4').innerHTML='invalid '
   }
  
 }
 /************************************************ */
 function myFunction5() {
   var x,n ;
   x = document.getElementById("codec").value;
   n = x.length ;
   if (n==4){
      document.getElementById("demo5").innerHTML = "True"; 
     
   }
   else{
      document.getElementById('demo5').innerHTML='invalid '
   }
  
 } 
 /*************************************************** */
 function myFunction6() {
   var x, text;
 
   // Get the value of the input field with id="numb"
   x = document.getElementById("aa33").value;
 
   // If x is Not a Number or less than one or greater than 10
   if (isNaN(x) || x < 5 || x > 450) {
     text = " not valid";
   } else {
     text = "Input OK";
   }
   document.getElementById("demo5").innerHTML = text;
 }
 /***************************************************** */
 function myFunction7()
  {
   var x,n ;
   x = document.getElementById("aa44").value;
   n = x.length ;
   if (n==16){
      document.getElementById("demo6").innerHTML = "True"; 
     
   }
   else{
      document.getElementById('demo6').innerHTML='invalid '
   }
  
 }
 /***************************************************** */
 function myFunction8() 
 {
   var x,n ;
   x = document.getElementById("aa55").value;
   n = x.length ;
   if (n==4){
      document.getElementById("demo7").innerHTML = "True"; 
     
   }
   else{
      document.getElementById('demo7').innerHTML='invalid';
   }
  
 }
 /****************************************************** */ 
 function myFunction9() 
 {
   var x,n ;
   x = document.getElementById("aa66").value;
   n = x.length ;
   if (n==8)
   {
      document.getElementById("demo15").innerHTML = "True"; 
     
   }
   else{
      document.getElementById('demo15').innerHTML='invalid';
   }
  
 }
 /************************************************************* */
 function myFunction11() {
  var x, text;

  // Get the value of the input field with id="numb"
  x = document.getElementById("bb11").value;
 
  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x) || x < 1 || x > 100) {
    text = " not valid";
  } else {
    text = "valide";
  }
  document.getElementById("demo16").innerHTML = text;
}
/******************************************************************** */
 function myFunction10() {
  var x,n,y,t ;
  n = document.getElementById("demo15").innerHTML;
  x=  document.getElementById("demo16").innerHTML;
  y = document.getElementById("demo100").innerHTML;
  t="recharge est effectuer";
  if ( n=="True" && x =="valide" && y=="True"){
    
     document.getElementById("demo17").innerHTML=t ;
  }
  else{
     document.getElementById("demo17").innerHTML="verifier vos données";

  }
  
 
}
/******************************************************* */
function myFunction96() {
   var x,n,t,y ;
   n = document.getElementById("demo4").innerHTML;
   x=  document.getElementById("demo5").innerHTML;
   y = document.getElementById("demo66").innerHTML;
   t="paiement effectué";
   if ( n=="True" && x =="True" && y == "True"){
     
      document.getElementById("demo96").innerHTML=t ;
   }
   else{
      document.getElementById("demo96").innerHTML="verifier vos données";
 
   } 
   
 }
 /******************************************************* */
 function myFunction69() 
 {
   var x,n ;
   x = document.getElementById("lib").value;
   n = x.length ;
   if (n!=0)
   {
      document.getElementById("demo66").innerHTML = "True"; 
     
   }
   else{
      document.getElementById('demo66').innerHTML='invalid';
   }
  
 }
  /******************************************************* */
  function myFunction100() 
  {
    var x,n ;
    x = document.getElementById("ps").value;
    n = x.length ;
    if (n!=0)
    {
       document.getElementById("demo100").innerHTML = "True"; 
      
    }
    else{
       document.getElementById('demo100').innerHTML='invalid';
    }
   
  }
  /******************************************************* */
  function myFunction200() {
   var x,n,t,y ;
   n = document.getElementById("demo5").innerHTML;
   x=  document.getElementById("demo6").innerHTML;
   y = document.getElementById("demo7").innerHTML;
   t="transfert effectué";
   if ( n=="Input OK" && x =="True" && y == "True"){
     
      document.getElementById("demo200").innerHTML=t ;
   }
   else{
      document.getElementById("demo200").innerHTML="verifier vos données";
 
   } 
   
 }