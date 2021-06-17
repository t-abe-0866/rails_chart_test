/*

  Detect Mobile Devices
    https://developer.mozilla.org/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent#Mobile_Device_Detection

 */
function browsing_in_mobile() {
  var hasTouchScreen = false;
  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
  } else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
      hasTouchScreen = true; // depedicated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      var UA = navigator.userAgent;
      hasTouchScreen = (
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
      );
    }
  }

  return hasTouchScreen;
}



window.addEventListener('DOMContentLoaded', (event) => {

  if ( browsing_in_mobile() && !docCookies.getItem('landed') ) {
    docCookies.setItem('view-mode', 'mobile', 604800);
    docCookies.setItem('landed', 1);
    location.reload(true);
  }

  if( docCookies.getItem('view-mode') == 'mobile') {
    console.log('PT_HEADER_MOBILE')
    $('head').append(`
      <link rel="stylesheet" href="/assets/css/grid.mobile.scss">
      <link rel="stylesheet" href="/assets/css/layouts.mobile.scss">
      <link rel="stylesheet" href="/assets/css/elements.components.mobile.scss">
      <link rel="stylesheet" href="/assets/css/elements.styled.mobile.scss">
      <link rel="stylesheet" href="/assets/css/main.mobile.scss">
      <link rel="stylesheet" href="/assets/css/arrangement.mobile.scss">
    `);

    $('body').attr('data-view-mode', 'mobile');
    $('body').data({
      is_mobile: true
    });
  } else {
    console.log('PT_HEADER_DESKTOP')
    if (browsing_in_mobile()) {
      $('meta[name="viewport"]').attr({
        content: `width=1440, minimum-scale=0.5, initial-scale=1 maximum-scale=2.5, user-scalable=yes`
      });
    }
  }



  $.ajax({
    method: "GET",
    url: "/assets/settings.json",
    dataType: "json",
    cache: false
  })
  .done(function(result){

    if ($('body').data('is_mobile')) {
      var menu_items = $('<ul>');

      let f_create_menu = function(menu_data, destination) {
        $.each(menu_data, function(k, v){
          if (v.hasOwnProperty('nodeNumber')) {
            let menu_item = $('<li>');
            let menu_item_anchor = $('<a>');

            menu_item_anchor.attr({
              href: v.nodeNumber + '01.html',
            });

            let menu_item_anchor_text = `
              <span class="fa-stack fa-2x">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fas fa-flag fa-stack-1x fa-inverse"></i>
              </span>${v.nodeName}
            `;

            menu_item_anchor.html(menu_item_anchor_text);

            menu_item.append(menu_item_anchor);
            menu_items.append(menu_item);

          } else {
            f_create_menu(v.items);
          }
        });
      }

      f_create_menu(result);
      $('#main-menu-mobile').append(menu_items);

      
    } else {
      var menu_items = $('<ul>');

      var f_create_menu = function( menu_data, destination ) {
        $.each(menu_data, function(k, v){
          var menu_item = $('<li class="has-sub-menu">');
          var menu_item_label_text;

          if ( v.nodeNumber ) {
            menu_item_label_text = `${v.nodeNumber}: ${v.nodeName}`;
          } else {
            menu_item_label_text = v.nodeName;
          }

          var menu_item_anchor = $(`
            <a href="#">
              <span class="fa-stack">
                <i class="fas fa-square fa-stack-2x"></i>
                <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
              </span>
              <label>${menu_item_label_text}</label>
            </a>
          `);

          menu_item.append(menu_item_anchor);

          var sub_menu_items = $('<ul class="sub-menu">');

          if ( Array.isArray(v.items) ) {
            f_create_menu(v.items, sub_menu_items);
          } else {
            $.each(v.items, function(item_k, item_v){
              sub_menu_items.append(`
                <li>
                  <a href="${v.nodeNumber}${item_k}.html">
                    <label>${item_k}: ${item_v}</label>
                  </a>
                </li>
              `);
            });
          }

          menu_item.append(sub_menu_items);
          destination.append(menu_item);
        });
      }

      $('#main-menu > ul > li[data-menu-root]').append(menu_items);

      f_create_menu(result, menu_items);
    }

  });
});



$( function() {
  $('a[href="#"]').on('click', function(e){
    e.preventDefault();
  });



  /*
    Switch to mobile
  */
  $('#switch-to-mobile').on('click', function(){
    docCookies.setItem('view-mode', 'mobile', 604800);
    location.reload(true);
    return false;
  });



  /*
    Switch to desktop
  */
  $('#switch-to-desktop').on('click', function(){
    docCookies.removeItem('view-mode');
    location.reload(true);
    return false;
  });



  /*
    slide-over menu
  */
  var f_close_slide_over_menu = function(){
    $('#slide-over-menu').attr('data-state', '');
    $('body').removeAttr('data-locked');
  };

  $('#header-user-icon').on('click', function() {
    if( $('#slide-over-menu').attr('data-state') == 'active' ) {
      f_close_slide_over_menu();
    } else {
      $('#slide-over-menu').attr('data-state', 'active');
      $('body').attr('data-locked', '');
    }
  });

  $('#slide-over-menu button[data-part="close"]').on('click', function() {
    f_close_slide_over_menu();
  });



  /*
    Find photo view
  */
  $('a[data-photo-view]').each(function(i, elem) {

    $(this).on('click', function(){
      if( $(elem).attr('data-photo-view') == '' ) {
        var img_source = $(elem).find('img').attr('src');
      } else {
        var img_source = $(elem).attr('data-photo-view');
      }

      var img = $('<img>').attr({
        src: img_source,
        alt: ''
      });

      var dialog = new EFCCDialog({
        title: false,
        body: img.get(0).outerHTML,
        footer: false,
        variant: "photo-view"
      });

      dialog.show();
    });

  });


/*
  Dev: モバイルなし表示
*/
$('main[data-dev="mobile-not-available"] > article').prepend(`
<div data-layout="arranger">
  <div data-position="center">
    <div style="margin: 0 0 2em 0; padding: 0.5em; border-radius: 0.25em; background: rgba(255,255,255,0.75);">
      <span class="fa-stack fa-2x">
        <i class="fad fa-mobile fa-stack-1x"></i>
        <i class="far fa-ban fa-stack-2x" style="color:Tomato"></i>
      </span>
      このページはモバイル版がありません。
    </div>
  </div>
</div>
 `);
});



/*
  Sample Graph
*/
function put_sample_graph( selector = 'graph-sample' ) {
  document.open()
  document.write(`<canvas class="${selector}" width="400" height="200"></canvas>`);
  var ctx = document.querySelector('canvas.' + selector).getContext('2d');
  var myChart = new Chart(ctx, {
    "type": "line",
    "data": {
      "labels": ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00", "0:00"],
      "datasets": [
        {
          "label": "Key 1",
          "data": [62, 59, 80, 67, 56, 55, 40],
          "fill": false,
          "borderColor": "rgb(17, 75, 95)",
          "lineTension": 0
        },
        {
          "label": "Key 2",
          "data": [33, 45, 62, 40, 61, 82, 74],
          "fill": false,
          "borderColor": "rgb(136, 212, 152)",
          "lineTension": 0
        },
        {
          "label": "Key 3",
          "data": [26, 38, 66, 77, 48, 60, 80],
          "fill": false,
          "borderColor": "rgb(32, 181, 151)",
          "lineTension": 0
        },
        {
          "label": "Key 4",
          "data": [58, 60, 65, 45, 70, 64, 55],
          "fill": false,
          "borderColor": "rgb(198, 218, 191)",
          "lineTension": 0
        },
      ]
    },
    "options": {}
  });

  document.close();
}

/*
  Dev: [data-dev-behaviour]
*/
function dev_behaviour_simulator_init() {
  $('button[data-styled], input[data-styled][type="submit"], input[data-styled][type="button"]').each(function(){
    $(this).on('click', function(){
      return false;
    });
  });

  $('[data-dev-behaviour="save"]').each(function(){
    $(this).on('click', function(){
      var notification = new EFCCNotification({
        body: '保存しました。'
      });

      notification.show();

      return false;
    });
  });

  $('[data-dev-behaviour="cancel"]').each(function(){
    $(this).on('click', function(){
      window.history.back();
      return false;
    });
  });

  $('[data-dev-behaviour="delete"]').each(function(){
    $(this).on('click', function(){

      var dialog = new EFCCDialog({
        title: 'アイテムの削除',
        body: `
          <p>このアイテムを削除してよろしいですか？<br>この操作は取り消すことができません。</p>
        `,
        footer: `
          <div data-layout="arranger">
            <div data-position="right">
              <div data-component="button-group">
                <button data-styled data-component-role="close">キャンセル</button>
                <button data-styled data-variant="warn" data-dev-behaviour="delete-done">削除</button>
              </div>
            </div>
          </div>
        `
      });

      dialog.show();

      $('[data-dev-behaviour="delete-done"]').each(function () {
        $(this).on('click', function() {
          dialog.close();
          var notification = new EFCCNotification({
            body: '削除しました。'
          });

          notification.show();
          return false;

        });
      });

      return false;
    });
  });

  $('[data-component="segmented-button"][data-dev-behaviour="exclusive"]').each(function(){
    var parent = $(this);

    $(this).find('button').each(function(){
      var button = $(this);
      button.on('click', function(){
        parent.find('button').attr('data-state', '');
        button.attr('data-state', 'active');
        button.trigger('touchend');
      });
    });
  });

}

$(function(){
  dev_behaviour_simulator_init();
})
