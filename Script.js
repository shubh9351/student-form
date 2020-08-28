
document.getElementById("fname").addEventListener("keyup",function checkName(){
  var user = document.getElementById('fname').value;
  var pattern= /^[a-zA-Z]+( [a-zA-Z]+)*$/;
  var wordCount = user.split(" ").length;
  if (user.length === 0) {
    document.getElementById('errmsg0').textContent = " ** Please fill the full name.";
    document.getElementById("submit").disabled = true;
    return false;
  }
  if(!user.match(pattern)){
    document.getElementById('errmsg0').textContent= " ** No special characters are allowed";
    document.getElementById("submit").disabled = true;
    return false;
  }if (wordCount < 2) {
    document.getElementById('errmsg0').innerHTML = "** Field should contain min 2 words.";
    document.getElementById("submit").disabled = true;
    return false;
  }else{
    document.getElementById('errmsg0').textContent = " ";
    document.getElementById("submit").disabled = false;
    return false;
  }
});

document.getElementById("Address").addEventListener("keyup",function checkAddress(){
 var content = document.getElementById("Address").value;
  var pattern = /^[#.0-9a-zA-Z\s,-]+$/;
  if(content.length === 0){
    document.getElementById('errmsg1').textContent= "** Address field is empty.";
    document.getElementById("submit").disabled = true;
    return false;
  }
  if(!content.match(pattern)){
    document.getElementById('errmsg1').textContent= "** Enter correct address";
    document.getElementById("submit").disabled = true;
    return false;
  }else{
    document.getElementById('errmsg1').textContent =" ";
    document.getElementById("submit").disabled = false;
    return false;
  }
});


// adding validation to Email
document.getElementById("emailid").addEventListener("keyup",function checkEmail(){
  var emails = document.getElementById('emailid').value;
  if (emails.length === 0) {
    document.getElementById('errmsg2').innerHTML = " ** Please fill the Email id ";
    document.getElementById("submit").disabled =true;
    return true;
  }
  if (emails.indexOf('@') <= 0) {
    document.getElementById('errmsg2').textContent = " ** @ Invalid Position";
    document.getElementById("submit").disabled = true;
    return true;
  }
  if ((emails.charAt(emails.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')){
    document.getElementById('errmsg2').textContent = " ** Invalid . Position";
    document.getElementById("submit").disabled = true;
    return true;
  } else {
    document.getElementById('errmsg2').textContent = " ";
    document.getElementById("submit").disabled = false;
    return false;
  }
});


document.getElementById("phonenum").addEventListener("keyup",function phoneValidation(){
  var phone= document.getElementById("phonenum").value;
  if(phone.length !=10){
    document.getElementById('errmsg3').textContent ="** Enter 10 digit valid number. ";
    document.getElementById("submit").disabled = true;
    return false;
  }else {
    document.getElementById('errmsg3').textContent = " ";
    document.getElementById("submit").disabled = false;
    return false;
  }
})

function restrictAlphabets(e){
       var x = e.which || e.keycode;
   	if((x>=48 && x<=57)){
   		return true;
   	}else{
   		return false;
    }
  }


document.getElementById("year").addEventListener("keyup",function yearValidate(){
var yearValue = document.getElementById("year").value;

if(yearValue.length === 0){
  document.getElementById('errmsg4').innerHTML ="** Year field is empty. ";
  document.getElementById("submit").disabled = true;
  return false;
}
if(yearValue<=2010 || yearValue>=2021){
  document.getElementById('errmsg4').innerHTML ="** Enter valid Year.";
  document.getElementById("submit").disabled = true;
  return false;
}
else {
  document.getElementById('errmsg4').innerHTML =" ";
  document.getElementById("submit").disabled = false;
  return false;
}
});



document.getElementById("grade").addEventListener("keyup",function gradeValidate(){
var userGrd= document.getElementById("grade").value;
 var gradePattern = /^[a-z0-9]+$/;


 if(userGrd.length===0){
   document.getElementById('errmsg5').textContent = "** please fill the grade";
   document.getElementById("submit").disabled = true;
   return false;
 }
 if(!userGrd.match(gradePattern)){
   document.getElementById('errmsg5').textContent= "** Enter correct value";
   document.getElementById("submit").disabled = true;
   return false;
 }else{
   document.getElementById('errmsg5').textContent = " ";
   document.getElementById("submit").disabled = false;
   return false;
 }
});


document.getElementById("skillname").addEventListener("keyup",function skillValidate(){
  var userSkill= document.getElementById("skillname").value;
  var skillPattern =/^[a-z0-9]+$/;

  if(userSkill.length===0){
    document.getElementById('errmsg6').textContent = "** please fill the skills";
    document.getElementById("submit").disabled = true;
    return false;
  }
  if(!userSkill.match(skillPattern)){
    document.getElementById('errmsg6').textContent= "** Enter correct value";
    document.getElementById("submit").disabled = true;
    return false;
  }else{
    document.getElementById('errmsg6').textContent = " ";
    document.getElementById("submit").disabled = false;
    return false;
  }
});

var count=0;
document.getElementById("addedu").addEventListener("click",function newEducation(){
  count++;
  var newCount=count+1;
  localStorage.setItem("clicks",newCount);
  var elmnt = document.getElementById("education");
  var cln = elmnt.cloneNode(true);
  document.getElementById("newedu").appendChild(cln);
  document.getElementById("remove").disabled = false;
});


var click=0;
document.getElementById("remove").addEventListener("click",function removeEducation(){
  click++;
  var newClick=click;
  var eduForm = document.getElementById("newedu");
  var addItem= localStorage.getItem("clicks");
  var remain=addItem-newClick;
  if(remain>=1){
   eduForm.removeChild(eduForm.childNodes[remain]);
 }
});


var counts=0;
document.getElementById("skilladd").addEventListener("click",function addSkill(){
  counts++;
  var newAdd=counts+1;
  localStorage.setItem("skillInc",newAdd);
  var elmnt = document.getElementById("skill");
  var cln = elmnt.cloneNode(true);
  document.getElementById("newskill").appendChild(cln);
  document.getElementById("skilldelete").disabled = false;
});

var clicks=0;
document.getElementById("skilldelete").addEventListener("click",function deleteSkill(){
  clicks++;
  var skillRem = clicks;
  var skillAd=localStorage.getItem("skillInc");
  var skillForm = document.getElementById("newskill");
  var remain2= skillAd-skillRem;
  if(remain2>=1){
      skillForm.removeChild(skillForm.childNodes[remain2]);
  }
});



document.getElementById("hobbies").addEventListener("keyup",function hobbyValidate(){
  var userHobby= document.getElementById("hobbies").value;
  var hobbyPattern =/^[a-z0-9 _]+$/;

  if(userHobby.length===0){
    document.getElementById('errmsg7').textContent = "** please fill the field";
    document.getElementById("submit").disabled = true;
    return false;
  }
  if(!userHobby.match(hobbyPattern)){
    document.getElementById('errmsg7').textContent= "** Enter correct value";
    document.getElementById("submit").disabled = true;
    return false;
  }else{
    document.getElementById('errmsg7').textContent = " ";
    document.getElementById("submit").disabled = false;
    return false;
  }
});


document.getElementById("photo").addEventListener("keyup",function urlValidate(){
  var userUrl= document.getElementById("photo").value;
  var urlPattern= /\b((http|https):\/\/?)[^\s()<>]+(?:\([\w\d]+\)|([^[:punct:]\s]|\/?))/g;

  if(userUrl.length===0){
    document.getElementById('errmsg8').textContent = "** please fill the field";
    document.getElementById("submit").disabled = true;
    return false;
  }
  if(!userUrl.match(urlPattern)){
    document.getElementById('errmsg8').textContent= "** Url invalid";
    document.getElementById("submit").disabled = true;
    return false;
  }else{
    document.getElementById('errmsg8').textContent = " ";
    document.getElementById("submit").disabled = false;
    return false;
  }
});
  // validation check for empty field in whole form

  document.getElementById("submit").addEventListener("click",function validateForm(){
    var form = document.getElementById("register");
    var inputs = form.getElementsByTagName("input");
    var fieldId = ["fname","Address","emailid","phonenum","year","grade","skillname","hobbies","photo"]
    var msgId=["errmsg0","errmsg1","errmsg2","errmsg3","errmsg4","errmsg5","errmsg6","errmsg7","errmsg8"]
    var j ,m = msgId.length;
     var i, l = fieldId.length;
     var id , warn;
     for (i = 0; i < l; i++) {
       id = fieldId[i];
       input = inputs[i];
       var userInput = document.getElementById(id).value;
       var errId="errmsg"+i;
       if (userInput.length === 0){
         document.getElementById(errId).textContent = " ** Please fill the "+ id +" field.";
         input.focus();
         return false;
       }
     }
// looping through the form and checking for any error if its there then alert will be shown
      for (j = 0; j < m; j++){
         warn= msgId[j];
         var errWarn= document.getElementById(warn).textContent;
        if(errWarn.length>1){
          alert("please fill the correct Information.")
          return false;
        }
      }

     location.replace("Success.html");
     return true;
    });
