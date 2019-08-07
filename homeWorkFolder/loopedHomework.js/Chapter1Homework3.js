<!DOCTYPE html>
<html lang="en">
<head>
    
</head>

<body>
    <h2>JavaScript Program</h2>

    <p id = "demo"></p>

    <script>
    var text ="";

    for (i=0;i<10;i++) 
    {
    text +="The number is"+i+"</br>";
    }
    document.getElementById("demo").innerHTML=text;
    
    </script>

</body>
</html>