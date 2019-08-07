<!DOCTYPE html>
<html lang="en">
<head>
    
</head>

<body>
    <h2>JavaScript Program</h2>

    <p id = "demo"></p>

    <script>

    var chapters={1:"Loops",2:"Decision",3:"Arrays"};

    var text ="";
    var i;
    for (i in chapters) 
    {
    text +=chapters[i];
    text +="</br>"
    }
    document.getElementById("demo").innerHTML=text;
    
    </script>

</body>
</html>