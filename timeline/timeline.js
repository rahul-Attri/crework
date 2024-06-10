
const details=document.querySelectorAll(".details")
// console.log(details)
var counter=0;
 
const gopre=()=>{
  if(counter!=0){
    counter--
    slideimages()
  }
}

const gonxt=()=>{
  if(counter <=details.length-1){
    counter++
    slideimages()
  }
}


details.forEach(
  (slides,index)=>{
    slides.style.left=`${index*100}%`

  }
)

const slideimages=()=>{
  details.forEach(
    (slides)=>{
      slides.style.transform=`translateX(-${counter*160}%)`
    }
  )
}