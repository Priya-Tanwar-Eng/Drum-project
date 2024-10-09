let drums = document.querySelector(".main");

drums.addEventListener("click",(e)=>{
    let target = e.target.innerHTML;
    onaudio(target);
})

function onaudio(key){
    const audio = new Audio();
    audio.src = (`drum.${key}.mpeg`);
    audio.play()
}