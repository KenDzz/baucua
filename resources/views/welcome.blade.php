<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=0.1">
        <title>Bầu Cua - Developer By KenDzz</title>
        <link rel="stylesheet" href="{{ url('css/main.css') }}">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
        <style>
            body {
                font-family: 'Nunito', sans-serif;
            }
        </style>
    </head>
    <body class="antialiased">
        <div class="container-fluid full-height d-flex align-items-center justify-content-center">
            <div class="image-container">
                <img src="images/1.png" alt="Image 1" class="img-baucua-first d-none">
                <img src="images/1.png" alt="Image 2" class="img-baucua-second d-none">
                <img src="images/1.png" alt="Image 3" class="img-baucua-third d-none">
            </div>
            <div class="fireworks"></div>
            <div class="backgroud-baucua"></div>
            <div class="title-baucua"></div>
            <div class="content-baucua">
                <div class="animations-baucua paused d-none"></div>
                <div class="animations-sencond-baucua"></div>
                <div class="animations-third-baucua" id="draggableDiv" touch-action="none"></div>
                <div class="category-first-baucua" ></div>
                <div class="category-sencond-baucua" ></div>
                <div class="category-third-baucua" ></div>
            </div>
            <button class="btn-baucua"></button>
        </div>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    <script src="//cdn.jsdelivr.net/npm/phaser@3.70.0/dist/phaser.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://unpkg.com/fireworks-js@2.x/dist/index.umd.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/mobile-detect@1.4.5/mobile-detect.min.js"></script>
    <script src="js/main.js"></script>
</html>
