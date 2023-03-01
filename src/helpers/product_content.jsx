const shortenProductDescrption=(type , length , str)=>{
    if(type==="word") return str.split(" ").splice(0 ,length).join(" ") + "...";
    return str.split("").splice(0 ,length).join("");
}
export {shortenProductDescrption}