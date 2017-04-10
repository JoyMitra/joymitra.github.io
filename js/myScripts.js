function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

function uploadFile(){
	file = Android.getFileForUpload();
	t = typeof file
	document.getElementById("demo").innerHTML = t;		
}

var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      console.log(reader.result.substring(0, 200));
    };
    reader.readAsText(input.files[0]);
  };
