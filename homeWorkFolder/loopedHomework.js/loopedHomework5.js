<!DOCTYPE html>
<html lang="en">
<head>
    
</head>

<body>
    <h2>JavaScript Program</h2>

    <p id = "demo"></p>

    <script>
    var text ="";
    var i=0;
    for (;i<5;) 
    {
    text +="The number is"+i+"</br>";
    i++;
    }
    document.getElementById("demo").innerHTML=text;
    
    </script>

</body>
</html>