
let allInput =document.querySelectorAll("input");

let form=document.querySelector("form");

let errorDiv= document.querySelector("#error");

let obj={
  name:"",
  password:"",
  email:"",
  avatar:""
}


allInput.forEach((input)=> {
   
    input.addEventListener("input",(event)=>{
    
        obj={...obj,[event.target.name]:event.target.value}

        console.log(obj);
        })
    });


form.addEventListener("submit",async(event)=>{
    event.preventDefault();
   console.log("i am from form");
   let res= await fetch("https://api.escuelajs.co/api/v1/users",{method:"POST",
    headers:{
    "content-type":"application/json"},
    body:JSON.stringify(obj)
})
    let data= await res.json();
   
    console.log(data);
    
    if(data.statusCode==400)
    {
        console.log(data.message);
        errorDiv.innerHTML="";
        data.message.forEach((e)=>{
            let span=document.createElement("span");
            span.innerHTML=e;
            errorDiv.append(span);
            span.style.color="red";
        })
        
    }
    
    
})