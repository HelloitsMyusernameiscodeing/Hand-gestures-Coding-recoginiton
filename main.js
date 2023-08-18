Webcam.set({
    height:350,
    width:300,
    image_format:'png',
    png_quality:100,
})
cam=document.getElementById('cam')
Webcam.attach(cam)
function Snapshot(){
 Webcam.snap(function(ws){
    document.getElementById('Result').innerHTML='<img id="CM" src="'+ws+'"> '
 })
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/_UG23QwzO/model.json',modelLoaded)
function modelLoaded(){
    console.log("model has been loaded ")
}
function Check(){
    img=document.getElementById('CM')
classifier.classify(img,gotresults)
}
function gotresults(error,results){
    if(error){
        console.error(error)
        }
        else{
      console.log(results)
      document.getElementById('P1').innerHTML=results[0].label
      if(results[0].label=="ThumbsUp"){
      document.getElementById('emoji1').innerHTML='&#128077;'
      }
      if(results[0].label=="peace"){
      document.getElementById('emoji1').innerHTML='&#9996;'
      }
      if(results[0].label=="Excellent"){
      document.getElementById('emoji1').innerHTML='&#128077;'
      }
        }
    }
