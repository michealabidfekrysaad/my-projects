var mybtn=document.getElementById("mybtn")
var nameinfo=document.getElementById("n-1")
var urlinfo=document.getElementById("n-2")

var projectcontainer;
var localindex;



if(localStorage.getItem("projectcontainer")==null)
    {
        projectcontainer=[];
    }
else
    {
        projectcontainer=JSON.parse(localStorage.getItem("projectcontainer"));
        display();
    }

mybtn.onclick=function()
{
    add()
    display()
    clearform()
}



function add()
{
    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
   var regex = new RegExp(expression);
    
    if(nameinfo.value =="" || urlinfo.value == "")
        {
            alert("sorry the two input are required")
        }
    
    else if(!urlinfo.value.match(regex))
    {
            alert("please enter url form in second input")
    }
    else
    {
         var obj=
             {
                name:nameinfo.value,
                url:urlinfo.value,
             }
         projectcontainer.push(obj);
         localStorage.setItem("projectcontainer",JSON.stringify(projectcontainer))
    }
    
    
}
function display()
{
    var col="";

for(var i=0;i<projectcontainer.length ;i++)
    {
        col+=`<div class="col-lg-12 myclass my-1  ">

               <h1>`+projectcontainer[i].name+`</h1>
               
                 <button onclick="del(`+i+`)" class="btn btn-danger" type="button">Delete</button>
                  <a class="btn btn-dark" target="_blank" href="`+projectcontainer[i].url+`">visit</a> 
           </div>`
    }

row1.innerHTML=col;
}
function del(index)
{
    projectcontainer.splice(index,1)
    display()
    console.log(projectcontainer)
localStorage.setItem("projectcontainer",JSON.stringify(projectcontainer))
}


function visit(index)
{
    nameinfo.value=projectcontainer[index].name;
    urlinfo.value=projectcontainer[index].url;
    localindex=index;
    toggle=true;
    mybtn.innerHTML="update"
}


//function clearform()
//{
//    var input=document.getElementsByClassName("form-control");
//    for(var i=0 ;i<input.length ; i++)
//        {
//            input[i].value="";
//        }
//}