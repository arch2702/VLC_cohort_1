
const videoPlayer = document.querySelector("#main");
const videobtn= document.querySelector("#videobtn");
const videoinput= document.querySelector("#videoinput");


const handleInput=()=>{
// console.log("input is clicked");
// you have to make it click
videoinput.click();
}

const acceptInputHandler=(obj)=>{
//    console.log("event",obj);
   const selectedVideo= obj.target.files[0];
//    src file-> base64
 const link= URL.createObjectURL(selectedVideo);
 const videoElement= document.createElement("video");
 videoElement.src= link;
 videoElement.setAttribute("class", "video");
 videoElement.controls="true";
  // check if there are any video already present
  if (videoPlayer.children.length > 0) {

    // if present -> remove it 
    videoPlayer.removeChild(videoPlayer.children[0]);
}
// now after the above check -> add the videoElement
 videoPlayer.appendChild(videoElement);
 videoElement.play();
 videoElement.volume= 0.3;
}
videobtn.addEventListener("click",handleInput);
// when file is selected
videoinput.addEventListener("change",acceptInputHandler);

// *************************Volume and Speed*************************************************

const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const toast= document.querySelector(".toast");
/********************Speed Up********************/ 
const speedUpHandler=() =>{
const videoElement= document.querySelector("video");

if(videoElement ==null){
    return;
}
if(videoElement.playbackRate>3){
    return;
}
const incresedSpeed= videoElement.playbackRate+ 0.5;
videoElement.playbackRate=incresedSpeed;
showToast(incresedSpeed+"X");

}

/***********************Speed Down**************************/ 
const speedDownHandler=()=>{
    const videoElement= document.querySelector("video");
if(videoElement ==null){
    return;
}
if(videoElement.playbackRate>0){
    const deccresedSpeed= videoElement.playbackRate - 0.5;
    videoElement.playbackRate=deccresedSpeed;
    // console.log("decresed speed",deccresedSpeed);
    showToast(deccresedSpeed+"X");
}
}

/***********************Volume Up**********************/ 
const volumeUpHandler=()=>{
     // select the video
     const videoElement = document.querySelector("video");
     if (videoElement == null) {
         return;
     }
     // property to play with volume 
     if (videoElement.volume >= 0.99) {
         return;
     }
     const increasedVolume = videoElement.volume + 0.1
     videoElement.volume = increasedVolume;
     // console.log("increseas volume", increasedVolume);
     const percentage= increasedVolume*100 +"%";
     showToast(percentage);
}

/************************Volume Down****************************/ 
const volumeDownHandler = () => {
    // select the video
    const videoElement = document.querySelector("video");
    if (videoElement == null) {
        return;
    }
    // property to play with volume 
    if (videoElement.volume <= 0.1) {
        videoElement.volume = 0;
        return
    }
    const decreaseVolume = videoElement.volume - 0.1;
    videoElement.volume = decreaseVolume
    const percentage= decreaseVolume*100 +"%";
     showToast(percentage);
}

function showToast(message){
    toast.textContent=message;
    toast.style.display="block";
    setTimeout(()=>{
        toast.style.display="none";
    },1000);
}
speedUp.addEventListener("click",speedUpHandler);
speedDown.addEventListener("click",speedDownHandler);
volumeUp.addEventListener("click",volumeUpHandler);
volumeDown.addEventListener("click",volumeDownHandler);

/************************Controls********************************/ 

