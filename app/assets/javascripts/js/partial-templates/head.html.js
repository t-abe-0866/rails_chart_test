var re_filename = /\/?([\w-]+)\.\w+$/;
var pathname = window.location.pathname;
var matched = re_filename.exec(pathname);
var filename = undefined;

if ( matched ) {
  filename = matched[1];
}

document.open();
var html = `
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, minimum-scale=0.5, initial-scale=1 maximum-scale=2.5, user-scalable=yes">
<meta name="format-detection" content="telephone=no">
<link rel="apple-touch-icon" href="/assets/img/icon.png">
<link rel="shortcut icon" href="/assets/img/icon.png">

<meta name="description" content="-"/>
<link rel="canonical" href="https://eye-farm.jp" />

<link rel='dns-prefetch' href='//cdnjs.cloudflare.com' />

<script src='/assets/js/lib/cookies.js/cookies.min.js' defar></script>

<script src='//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js' defar></script>
<script src='//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js' defar></script>
<script src='//cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.1.0/jquery-migrate.min.js' defar></script>

<script src='//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js' defar></script>
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.css">

<script src='//cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js'></script>

<link rel="stylesheet" href="/assets/css/init-kit.scss">
<link rel="stylesheet" href="/assets/css/variables.scss">
<link rel="stylesheet" href="/assets/css/main.scss">
`;

/*
if (filename) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'css/' + filename + '.css', false);
  xhr.send();

  if (xhr.status == 200) {
    html += `
      <link rel="stylesheet" href="css/${filename}.css">
    `;
  }
}
*/

html += `
<link rel="stylesheet" href="/assets/css/elements.as.scss">
<link rel="stylesheet" href="/assets/css/elements.components.scss">
<link rel="stylesheet" href="/assets/css/elements.styled.scss">
<link rel="stylesheet" href="/assets/css/elements.classes.scss">

<link rel="stylesheet" href="/assets/css/flex.scss">
<link rel="stylesheet" href="/assets/css/grid.scss">

<link rel="stylesheet" href="/assets/css/layouts.scss">
<link rel="stylesheet" href="/assets/css/arrangement.scss">

<link rel="stylesheet" href="/assets/fonts/fontawesome-pro-5.11.2-web/css/all.min.css">
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css">


<script src='/assets/js/class.EFCComponents.js'></script>

<script src='/assets/js/partial-templates/header.html.desktop.js'></script>
<script src='/assets/js/partial-templates/header.html.mobile.js'></script>

<script src='/assets/js/main.js'></script>
<script src='/assets/js/samples.js'></script>
`;
document.write(html);
document.close();
//document.querySelector('title').text = 'EFC 2019: Dev';