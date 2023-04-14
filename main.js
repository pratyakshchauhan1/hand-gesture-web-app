//https://teachablemachine.withgoogle.com/models/ulGcPd99y/

prediction = ""

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

camera = document.getElementById("camera");

Webcam.attach('#camera');

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ulGcPd99y/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }

function check()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}

function speak(){
  var synth = window.speechSynthesis;
  speak_data_1 = "The first prediction is " + predection_1;
  var utterThis = new SpeechSynthesisUtterance(speak_data_1);
  synth.speak(utterThis);
}

function gotResult(error, results){
if (error){
console.error(error);
} else {
console.log(results);
document.getElementById("gesture_emotion_name").innerHTML = results[0].label;
predection_1 = results[0].label;

speak();
if(results[0].label=="victory")
{
document.getElementById("update_gesture").innerHTML="&#128522"
}
else if(results[0].label=="nice")
{
document.getElementById("update_gesture").innerHTML="&#128532"
}
else if(results[0].label=="amazing")
{
document.getElementById("update_gesture").innerHTML="&#128546"
}

}
}
