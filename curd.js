var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');
var btn = document.getElementById('btn');
var tableRow = document.getElementById('tableRow');
var siteList = [];
if(localStorage.getItem('sites')!=null){
   siteList = JSON.parse(localStorage.getItem('sites'))
    display()
}

function addSite(){
    var site={
        siteName : siteNameInput.value,
        siteUrl : siteUrlInput.value,
    }
   siteList.push(site);
   localStorage.setItem('sites', JSON.stringify(siteList))
    display();
   
}

function display(){
    var box='';
    for(var i=0; i<siteList.length;i++){
     
        var userurl=siteList[i].siteUrl;
        var httpsregex= /https:\/\//g;
        if(!httpsregex.test(userurl)){
            userurl='https://'+siteList[i].siteUrl;
        }

        box+=`
    <tr>
        <td>${i+1}</td>
        <td>${siteList[i].siteName}</td>
        <td><a href=" ${userurl}" class="text-decoration-none" target="_blank">
        <button class="btn visit ">
            <i class="fa-solid fa-eye pe-1"></i>
            Visit

        </button></a>
        </td>
        <td>
            <button class="btn btn-delete pe-2 bg-danger text-white"  onclick="deleteFun(${i})">
                <i class="fa-solid fa-trash-can"></i>
                Delete
            </button>
        </td>
    </tr>
        
        `  
    }
    
    tableRow.innerHTML = box;
}

btn.onclick=function(){
    if(!validation()){
        window.alert(
        `Site Name or Url is not valid, Please follow the rules below :
         Site name must contain at least 3 characters
         Site URL must be a valid one`)

    }
   else{
    addSite();
    clearForm();
   }
}

function clearForm(){
    siteNameInput.value=null;
    siteUrlInput.value=null;
}

function deleteFun(index){
    siteList.splice(index,1);
    localStorage.setItem('sites', JSON.stringify(siteList));
    display();
}

function validation(){
    var userSiteUrl= siteUrlInput.value;
    var wwwregex=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/ig;
    
    if(siteNameInput.value.length<3 || !wwwregex.test(userSiteUrl)){
       
        return false;
    }
    return true; 
}

function checkSiteName(){
    if(siteNameInput.value.length<3){
        siteName.style.borderColor='red';
        siteName.style.boxShadow='0 0 0 0.25rem rgba(255, 0, 0,0.25)';
        siteName.style.backgroundImage='url(warning-sign-9743.png)';
        siteName.style.backgroundRepeat='no-repeat';
        siteName.style.backgroundPosition='right calc(.375em + .1875rem) center';
        siteName.style.backgroundSize='calc(.75em + .375rem) calc(.75em + .375rem)';

        
    }
    else{
        siteName.style.borderColor='green';
        siteName.style.boxShadow='0 0 0 0.25rem rgba(0, 128, 0,0.25)';
        siteName.style.backgroundImage='url(check-symbol-4794.png)';
        siteName.style.backgroundRepeat='no-repeat';
        siteName.style.backgroundPosition='right calc(.375em + .1875rem) center';
        siteName.style.backgroundSize='calc(.75em + .375rem) calc(.75em + .375rem)';
    }

}    


function checkSiteUrl(){
    
    var userSiteUrl= siteUrlInput.value;
    var wwwregex=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/ig;
    
    if(!wwwregex.test(userSiteUrl)){
        siteUrl.style.borderColor='red';
        siteUrl.style.boxShadow='0 0 0 0.25rem rgba(255, 0, 0,0.25)';
        siteUrl.style.backgroundImage='url(warning-sign-9743.png)';
        siteUrl.style.backgroundRepeat='no-repeat';
        siteUrl.style.backgroundPosition='right calc(.375em + .1875rem) center';
        siteUrl.style.backgroundSize='calc(.75em + .375rem) calc(.75em + .375rem)';


    }
    else{
        siteUrl.style.borderColor='green';
        siteUrl.style.boxShadow='0 0 0 0.25rem rgba(0, 128, 0,0.25)';
        siteUrl.style.backgroundImage='url(check-symbol-4794.png)';
        siteUrl.style.backgroundRepeat='no-repeat';
        siteUrl.style.backgroundPosition='right calc(.375em + .1875rem) center';
        siteUrl.style.backgroundSize='calc(.75em + .375rem) calc(.75em + .375rem)';
    }
}