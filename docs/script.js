let timer=document.getElementById("timer")
let btn=document.getElementById("btn")
let head=document.getElementById("h1")
let tone= document.getElementById("tone")
const min=document.getElementById("min");
let plusBtn=document.getElementById("pluss");
let minusBtn=document.getElementById("m-btn");
const resetBtn=document.getElementById("reset")
const form=document.getElementById("form")
let funConainer=document.getElementById("fun-container")
let stpBtn=document.getElementById("stp-btn")
for (let i=0;i<=59;i++){
    let opt=document.createElement("option");
    let val=i<10?`${0}${i}`:i;
    opt.value=val;
    opt.style.backgroundColor="black"
    opt.textContent=val;
    min.appendChild(opt);
}
const sec=document.getElementById("sec");
for (let i=0;i<=59;i++){
    let opt=document.createElement("option");
    let val=i<10?`${0}${i}`:i;   
    opt.value=val;
    opt.style.backgroundColor="black"
    opt.textContent=val;
    sec.appendChild(opt);
}

let m=25,s=00;
let d= s<10?`${0}${s}`:s;
let g= m<10? `${0}${m}`:m;

head.textContent=`${g}:${d}`
const getMinutes=e=>{
    m=parseInt(e.target.value)
  
}
const getSeconds=e=>{
    s=parseInt(e.target.value)
 
}
plusBtn.onclick=()=>{
    
    m+=1
    // head.textContent=`${m}:${s}`
}
minusBtn.onclick=()=>{
    if (m>0){
    m-=1}
    // head.textContent=`${m}:${s}`
}

let runningTime;
resetBtn.onclick=()=>{
    clearInterval(runningTime);
    m=25
    s=parseInt("00")
    head.textContent=`${m}:00`
    btn.textContent="Start"
    tone.pause()
    form.reset()
    
}
stpBtn.onclick=()=>{
    stpBtn.style.display="none"
    funConainer.style.display="block"
    tone.pause()
    m=25
    s=parseInt("00")
    head.textContent=`${m}:00`
    form.reset()
    btn.textContent="Start"
   
}


min.addEventListener('change',getMinutes)
sec.addEventListener('change',getSeconds)
btn.onclick=(e)=>{
    const text=e.target.innerText
    if(text==="Start" || text==="Resume"){
        pp()
        e.target.innerText="Pause"
    }
    else if(text==='Pause'){
        e.target.innerText="Resume"
        clearInterval(runningTime)
    }
    else if(text==="Stop sound"){
        btn.textContent="Start"
        tone.pause()
        form.reset()
        m=25
        s=00
        head.textContent=`25:00`
    }
}

function pp(){
    
    runningTime=setInterval(()=>{
        

        if(s===0&&m!==0){
            m-=1
            s=60
        }
        if(m===0&&s===0){
            clearInterval(runningTime)
            tone.play()
            funConainer.style.display="none"
            stpBtn.style.display="block"
            
        }
        else{
            s-=1
        }
        let d= s<10?`${0}${s}`:s;
        let g= m<10? `${0}${m}`:m;
        head.textContent=`${g}:${d}`;
    },1000)
}
// function pp(h,s){
// // btn.onclick=()=>
// {
//     let ss=setInterval(()=>{
//         head.textContent=`${h}:${s}`
//         s-=1
//         if (s==0){
//             h-=1
            
//             if (h<0){
//                 h=0
//                 if(s==0){
                
//                 clearInterval(ss);
//                 tone.play()
//                 btn.textContent="stop sound";
//                 btn.onclick=()=>{
//                     tone.pause()
//                     btn.textContent="start";
//                     btn.onclick=()=>{
                        
//                     }
//                 }
//             }
//             }
//             else{
//                 s=59
//             }
//         }
//         head.textContent=`${h}:${s}`;
        
//     },100);
//     btn.textContent="stop";
// btn.onclick=()=>{clearInterval(ss);
//     btn.textContent="start";
//     btn.onclick=()=>{
//         pp()
        
//     }
// }
// }}



