let myele = document.querySelectorAll("form button ") 
let range = document.querySelector("[type=range]")
let mysub = document.querySelector("[type = submit]")
let mypara = document.createElement("p")
let mydiv = document.querySelector("#salem")
mypara.setAttribute("class","par")
window.onload=function(){
    if(mydiv){  
        mydiv.append(mypara)
        let mytxt = document.createTextNode(`${anscount}/6`)
        mypara.appendChild(mytxt)
      
      }
      
      localStorage.removeItem("counter")
}


    myele.forEach((ele)=>{
        
        ele.addEventListener("click",(e)=>{
            e.preventDefault();
            myele.forEach((e)=>{
                e.classList.remove("active")
            })
                e.currentTarget.classList.add("active")
        })
    })

 let arr = [`quitiontwo.html`, `quitionthree.html`,`quitionfour.html`,`quitionfive.html`,`quitionsix.html`];


let count = parseInt(localStorage.getItem("count")) || 0;
let answer = JSON.parse(localStorage.getItem("answers")) || [];
let answercorract =["Adele","Another love","Hello","2","Snap Chat","Italian Song"]
let bool = false
let anscount =parseInt(window.localStorage.getItem("counter"))||0;

    mysub.onclick = function (e) {
        e.preventDefault(); 
        let hasActive = false;
        myele.forEach((ele) => {
            if (ele.classList.contains("active")) {
                hasActive = true;                
                let myspan = ele.querySelector("span").textContent.trim()
                answer.push(myspan) 
                
            }
        });
  
     
    if (hasActive) {

        window.localStorage.setItem("answers",JSON.stringify(answer))
        // فتح الصفحة من المصفوفة بناءً على قيمة count
        if (count < arr.length) {
            window.open(arr[count], "_self");
            count++;
            window.localStorage.setItem("count", count);
           
           
        }else{
          
           for(let i = 0 ; i < answer.length ; i++  ){
                if(answercorract[i] === answer[i]){
                    bool = true
                    anscount++                  
                }
                else{
                     bool = false
                }
           }
            if(bool === true){
                window.open(`answer.html`,"_self")
                window.localStorage.setItem("counter",anscount)
              
              
                             
             }else{
              
                window.open(`answer.html`,"_self")
                window.localStorage.setItem("counter",anscount)
        
            }
            
        
            localStorage.removeItem("count"); 
            localStorage.removeItem("answers"); 
            
        }
    }
  
};

