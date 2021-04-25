<!-- 
URL SHORTNER Designed and Developed by Rituraj Debashish Bikash
Developer: Rituraj Debashish Bikash
-->
<?php include 'main.php'; ?>
<!DOCTYPE html>
<html>
    <head>
        <title><?php echo $sitename; ?> | URL SHORTNER</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="theme-color" content="#333333">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link href="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <link href="https://fonts.googleapis.com/css?family=Seaweed+Script" rel="stylesheet" />
        <link rel="icon" href="https://i.imgur.com/MZ8k2Dp.png" />
        <link rel="manifest" href="Manifest.json">
    </head>
    <body class="fade-in-ii">
        <form class="form-wrapper cf" method="post" action="" >
            <font size="8" style="font-family: 'Seaweed Script', cursive;" alt="URL SHORTNER by Rituraj Debashish Bikash"><?php echo $sitename; ?></font><p />
            <input type="text" class="textarea" name="textarea" autocomplete="off" placeholder="Enter Your Link Here..." required>
            <button type="submit" class="sbtn" name="shrt">SHORT IT!</button>
        </form>
        <div class="byline"><p>URL Shortner Designed and Developed by  <a href="https://github.com/riturajgupta21">Rituraj</a>, <a href="https://github.com/debashishsamantara">Debashish, </a>, <a href="https://github.com/bikash1317">Bikash</a></p></div>
		<div class="Footer"><p><a href="https://github.com/codex-iter">© Codex ITER All Rights Reserved. Copyright</a></p></div>
    </body>
    
</html>
