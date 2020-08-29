var database={};
var cont=[];
var link="<a href="+'page.html'+">Secret page</a>";
function pass(){
 
   let uName=database.name=document.querySelector(".name").value;
   let uEmail=database.email=document.querySelector(".email").value;
   let uPass1=document.querySelector(".password1").value;
   let uPass2=document.querySelector(".password2").value;
  
  if(uName==="" || uEmail==="" ||uPass1===""){
    alert('please fill in all details');
   }
    else{
        if(uPass1.length<8){
            // document.querySelector(".pSuggestion").innerHTML="please use strong password";
            alert("Use strong password,greater than 8 characters");
        }else if(uPass1!==uPass2){
          // document.querySelector(".pSuggestion1").innerHTML="Password mismatch";
          alert("password mismatch");
        }
        else{
             database.password=uPass1;
        
             cont.push(database);
             document.querySelector(".conformation").innerHTML="You've signed in successfully,</br>Login to view the secret page";
            }
 console.log(cont);
}};

function login(){
   let uemail=database.email=document.querySelector(".userEmail").value;
   let upass=database.password=document.querySelector(".userpass").value;

    if(uemail==="" || upass===""){
       alert("please enter ur user-id and password");
    }
    else if(cont.length===0){
       console.log("The database is empty");
        alert("Crendentials not found!! please sign-in first");
    }
    else{
          for(var i=0;i<cont.length;i++){
             if(cont[i].email===uemail && cont[i].password===upass){
               document.querySelector(".href").innerHTML="Click the link to find your Secret-Page  </br>"+link;
              }
            }
        }
    }
