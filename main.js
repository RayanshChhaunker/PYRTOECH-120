function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}

classifier = ml5.imageClassifier('MobileNet', modell)

function modell() {
  console.log('modal lodad!');
}
function gotResult(error, results) {
  if(error) {
    console.error(error);
  }
  else {
    console.log(results)
    document.getElementById('result_object_accuracy').innerHTML = results[0].confidence.toFixed(4);
    document.getElementById('result_object_name').innerHTML = results[0].label
  }
}