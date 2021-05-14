<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Qr Code</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="qr">
        <img src="" alt="image" id="image" >
        <textarea id="textarea"></textarea>
        <button onclick="myFunction()">Click me</button>
    </div>
    <script>
        var text = document.getElementById("textarea");
        function myFunction() {
            let size = "300x300";
            let data = text.value;
            let burl = "https://api.qrserver.com/v1/create-qr-code/";
            let url = `${burl}?size=${size}&data=${data}`;
            document.getElementById("image").src = url;
        }
        </script>
</body>
</html>