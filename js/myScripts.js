function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

function uploadFile(){
	var file = "file:///data/data/edu.ksu.cs.santos.benign/files/File1";
	var rawFile = new XMLHttpRequest();
    	rawFile.open("GET", file, false);
    	rawFile.onreadystatechange = function ()
    	{
        	if(rawFile.readyState === 4)
        	{
            		if(rawFile.status === 200 || rawFile.status == 0)
            		{
                		var allText = rawFile.responseText;
				document.getElementById("demo").innerHTML = allText;	
                		alert(allText);
            		}
        	}
    	}
    	rawFile.send(null);	
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
