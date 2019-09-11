<!DOCTYPE html>
<html lang="en">
<head>
    
</head>
<h2>JavaScript Program</h2>
<body>

    <p id = "Demo"></p>

    <script>
    var text ="";
    var i =0;
    
    while (i<10) {
        text +="The number is"+i+"</br>";
        i++;
    }
    document.getElementById("Demo").innerHTML=text;
    
    </script>

</body>
</html>