const FX_DURATION = 250;

class EFCComponent {

  constructor () {
    this.view = '';
  }

  e_attach_close_behaviour() {
    $(this.view).find('[data-component-role="close"]').click( () => {
      $(this.view).fadeOut(FX_DURATION, () => {
        $(this.view).remove();
      });
    });

    return false;
  }

  e_call_close_behaviour() {
    $(this.view).find('[data-component-role="close"]').trigger('click');
  }

  fadein() {
    this.view.fadeIn(FX_DURATION, () => {
      this.e_attach_close_behaviour();
    });
  }

}



/*
  ダイアログ
*/
class EFCCDialog extends EFCComponent {

  // unclosed_instance = undefined;

  //
  constructor( args = {} ) {
    super();
    this.title = args['title'] || 'タイトル未設定';
    this.body = args['body'] || '本文未設定';
    this.footer = args['footer'] || 'フッター未設定';
    this.variant = args['variant'] || '';

    switch ( this.variant ) {
      case 'photo-view':
        this.title = false;
        this.footer = false;
        break;
    
      default:
        break;
    }

    this.template = `
      <div data-component="dialog" data-variant="${this.variant}">
        <div data-part="canvas">
          <div data-part="main">
            <div data-part="header">
              <button data-part="close-button" data-component-role="close"><i class="fal fa-times"></i></button>
            </div>
            <div data-part="content">
              <div data-grid data-variant-mobile="narrow">`;
            if ( this.title ) {
              this.template += `
                <div data-grid-item>
                  <header data-part="header">
                    <h2 data-part="title">${this.title}</h2>
                  </header>
                </div>`;
            }

              this.template += `
                <div data-grid-item>
                  <div data-part="body">${this.body}</div>
                </div>`;

            if ( this.footer ) {
              this.template += `
                <div data-grid-item>
                  <footer data-part="footer">${this.footer}</footer>
                </div>`;
            }
            this.template += `
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }



  //
  show( close_previous_dialog=false ) {

    if ( EFCCDialog.unclosed_instance === undefined )  {
      EFCCDialog.unclosed_instance = this;
    }
    
    if ( close_previous_dialog ) {
      EFCCDialog.unclosed_instance.close();
      EFCCDialog.unclosed_instance = undefined;
    }

    this.view = $(this.template).hide();
    $('body').append(this.view);

    $(document).on('keyup', (event) => {
      if ( event.key == 'Escape' ) {
        this.e_call_close_behaviour();
      }
    });

    this.fadein();

    return this;
  }

  close() {
    this.e_call_close_behaviour();
  }

}



/*
  通知
*/
class EFCCNotification extends EFCComponent {
  constructor( args = {} ) {
    super();
    this.body = args['body'] || '通知内容未設定';

    this.template = `
      <div data-component="notification">
        <div data-part="canvas">
          <div data-part="main">
            <div data-part="close-button-container">
              <button data-part="close-button" data-component-role="close"><i class="fal fa-times"></i></button>
            </div>
            <div data-part="content-container">
              <div data-part="content">
                <div data-part="body">${this.body}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  show() {
    this.view = $(this.template).hide();
    $('body').append(this.view);
    this.fadein();

    return this;
  }

  close() {
    this.e_call_close_behaviour();
  }

}



/*
  並べ替え可能リスト
*/
class EFCCVReorderable extends EFCComponent {
  constructor( args = {} ) {
    super();
    this.container = args['container'];
    this.reorderable = args['reorderable'];
    this.handle = args['handle'];
    this.dragging_parent = false;
    this.dragging_object = false;

    this.is_mobile = ('ontouchstart' in window);

    this.is_dragging = false;
    this.is_touchmoved = false;
    this.dragging_item_preview = undefined;
    this.dragging_item_start_y = undefined;
    this.dragging_event_start_y = undefined;
    this.touchmove_y_prev = undefined;
  }

  init() {
    var _instance_ = this;
    
    $(this.container).attr({
      'data-component': 'vertically-reorderable'
    })

    $(this.container).each( () => {

      var container = $(this.container);
      var k_reorderable = this.reorderable;
      var k_handle = this.handle;

      container.find(k_reorderable).each( function(i, elem){

        var item = $(this);
        item.attr({
          'data-reorderable': ''
        });

        var handle = $(this).find(k_handle);
        handle.attr('data-handle', '');

        handle.on('mousedown', function(e){
          item.prop('draggable', 'true');
        });

        handle.on('mouseleave', function(){
          item.prop('draggable', '');
        });

        if (_instance_.is_mobile) {
          /*
            Touch-drag Support
          */

          item.on('touchstart', function(){
            // noop - 空のリスナーを登録、タッチドラッグ開始時の遊び幅を回避。
          });

          var f_prevent_scroll = function (event) {
            event.preventDefault();
          };

          //
          // touchstart
          handle.on('touchstart', function (event) {
            //console.log('touchstart');

            _instance_.dragging_item_start_y = item.get(0).offsetTop;
            _instance_.dragging_event_start_y = event.touches[0].pageY;
            _instance_.touchmove_y_prev = event.touches[0].pageY;

            document.body.addEventListener(
              'touchmove',
              f_prevent_scroll,
              {
                capture: false,
                passive: false
              }
            );
            
          });

          //
          // touchmove
          handle.on('touchmove', function (e) {
            //console.log('touchmove');

            _instance_.is_touchmoved = true;

            var current_touch_y = item.get(0).offsetTop;
            var current_touch_y_middle = current_touch_y + (item.get(0).offsetHeight / 2);
            var item_border = Math.floor(current_touch_y_middle);

            var diff = e.touches[0].pageY - _instance_.dragging_event_start_y;
            var move_direction = e.touches[0].pageY - _instance_.touchmove_y_prev;

            if (_instance_.is_dragging) {

              // when replaced,
              if (move_direction < 0) { // move up

                var replace_item = _instance_.dragging_item_preview.prev();

                if ( replace_item.attr('data-state') == 'dragging' ) {
                  replace_item = _instance_.dragging_item_preview.prev().prev();
                }

                if ( replace_item.length ) {
                  var replace_threshould_from = replace_item.position().top;
                  var replace_threshould_to = replace_item.position().top + replace_item.height();

                  if ((replace_threshould_from <= item_border) && (item_border < replace_threshould_to)) {
                    _instance_.dragging_item_preview.insertBefore(replace_item);
                  }
                };

              } else { // move down

                var replace_item = _instance_.dragging_item_preview.next();

                if ( replace_item.attr('data-state') == 'dragging' ) {
                  replace_item = _instance_.dragging_item_preview.next().next();
                }

                if ( replace_item.length ) {
                  var replace_threshould_from = replace_item.position().top;
                  var replace_threshould_to = replace_item.position().top + replace_item.height();

                  if ((replace_threshould_from < item_border) && (item_border <= replace_threshould_to)) {
                    _instance_.dragging_item_preview.insertAfter(replace_item);
                  }
                };
                
              }

              _instance_.touchmove_y_prev = e.touches[0].pageY;

              item.css({
                top: _instance_.dragging_item_start_y + diff
              });

            } else {
              container.attr('data-state', 'dragging');

              _instance_.dragging_item_preview = item.clone();

              if (item.get(0).tagName.toLowerCase() == 'tr') {
                item.find('td').each(function(i, td) {
                  $(this).css('width', $(this).width());
                });
              }
              
              _instance_.dragging_item_preview.attr('data-state', 'drag-preview');
              _instance_.dragging_item_preview.insertBefore(item);

              item.attr({
                'data-state': 'dragging'
              });

              item.css({
                position: 'absolute',
                top: _instance_.dragging_item_start_y,
                width: _instance_.dragging_item_preview.width(),
                'z-index': '10'
              });

              _instance_.is_dragging = true;
            }
          });

          // touchend
          handle.on('touchend', function (e) {
            //console.log('touchend');

            if ( !_instance_.is_touchmoved ) {
              // not moved.
              return false;
            }

            item.attr('data-state', '');
            container.attr('data-state', '');

            item.insertAfter(_instance_.dragging_item_preview);

            _instance_.dragging_item_preview.remove();

            item.css({
              position: '',
              top: '',
              left: '',
              'z-index': ''
            });

            _instance_.is_dragging = false;

            document.body.removeEventListener(
              'touchmove',
              f_prevent_scroll,
              {
                capture: false,
                passive: false
              }
            );

            _instance_.is_touchmoved = false;
          });

        } else {

          // e: dragstart
          this.addEventListener("dragstart", function(event) {
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData('text/html', '');
            /*
            var img = $('<img>');
            img.attr({
              src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
              alt: '',
              style: 'display: none'
            });
            event.dataTransfer.setDragImage(img.get(0), 0, 0);
            */
          }, false);

          // e: dragstart
          item.on('dragstart', function( e ) {

            _instance_.dragging_parent = e.currentTarget.parentNode;
            _instance_.dragging_object = $(this);

            container.attr('data-state', 'dragging');
            item.attr('data-state', 'dragging');

          });

          // e: drag
          item.on('drag', function( e ) {
            //
          });

          // e: dragenter
          item.on('dragenter', function( e ) {
            //
          });

          // e: dragover
          container.on('dragover', function( e ) {
            e.preventDefault();
          });

          // e: dragover
          item.on('dragover', function( e ) {
            if ( e.currentTarget.parentNode == _instance_.dragging_parent ) {
              var h = $(this).height();

              if ( (0 <= e.offsetY) && (e.offsetY <= (h/2 - 1)) ) {
                // Insert to above
                _instance_.dragging_object.insertBefore($(this));
              } else if ( ((h/2 + 1) <= e.offsetY) && (e.offsetY <= h) ) {
                // Insert to bottomz
                _instance_.dragging_object.insertAfter($(this));
              }
            }
          });

          // e: dragleave
          item.on('dragleave', function( e ) {
            //
          });

          // e: drop
          container.on('drop', function( e ) {
            //
          });

          // e: dragend
          item.on('dragend', function( e ) {
            container.attr('data-state', '');
            item.attr('data-state', '');
          });

        }

      });

    });
  }

}