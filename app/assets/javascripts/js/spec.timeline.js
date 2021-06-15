/**
 * Timeline, 検索
 */
$('[data-function="find"]').on('click', function () {
  var dialog = new EFCCDialog({
    title: 'タイムライン検索',
    body: `
      <div data-grid data-variant="narrow">
        <div data-grid-cell>
          <dl data-component="kv-list">
            <div>
              <dt>日付</dt>
              <dd>
                <div data-grid data-grid-columns="3" data-variant="^w-auto">
                  <div data-grid-cell>
                    <input type="text" data-styled>
                  </div>
                  <div data-grid-cell data-arrangement="align-self-center">から</div>
                  <div data-grid-cell>
                    <input type="text" data-styled>
                  </div>
                </div>
              </dd>
            </div>
            <div>
              <dt>キーワード</dt>
              <dd><input type="text" data-styled></dd>
            </div>
          </dl>
        </div>
      </div>`,
    footer: `
      <div data-layout="arranger">
        <div data-position="right">
          <div data-component="button-group">
            <button data-styled data-component-role="close">閉じる</button>
            <button data-styled data-variant="ok" onclick="void(0);">検索</button>
          </div>
        </div>
      </div>`
  });

  dialog.show();
});



/**
 * Timeline, 返信
 */
$('[data-function="reply"]').each(function (i, elem) {
  $(this).on('click', function () {
    var args = JSON.parse($(this).attr('data-function-args'));
    var dialog = new EFCCDialog({
      title: args['to'] + 'に返信',
      body: `
        <div data-grid data-variant="narrow">
          <div data-grid-cell>
            <textarea data-styled rows="4"></textarea>
          </div>
          <div data-grid-cell>
            <div data-layout="arranger">
              <div data-position="left">
                <div data-component="toolbar">
                  <ul data-part="items">
                    <li>
                      <button data-styled data-appearance="icon" data-variant="ok ^contrast"><i class="fad fa-images"></i></button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>`,
      footer: `
        <div data-layout="arranger">
          <div data-position="right">
            <div data-component="button-group">
              <button data-styled data-component-role="close">閉じる</button>
              <button data-styled data-variant="ok" onclick="void(0);">送信</button>
            </div>
          </div>
        </div>`
    });

    dialog.show();
  });
});



/**
 * Timeline, 編集
 */
$('[data-function="edit"]').each(function (i, elem) {
  $(this).on('click', function () {
    var args = JSON.parse($(this).attr('data-function-args'));
    var dialog = new EFCCDialog({
      title: '投稿を編集',
      body: `
        <div data-grid data-variant="narrow">
          <div data-grid-cell>
            <textarea data-styled rows="4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur error, reprehenderit magnam cumque rerum recusandae repellendus eos qui, esse nulla quos sequi. Provident veniam repellat quam facere similique rerum ipsum?</textarea>
          </div>
          <div data-grid-cell>
            <div data-spec-component="attachments" data-variant="image-list">
              <ul data-part="items">
                <li>
                  <img src="/assets/img/placeholder_square.svg" alt="">
                  <a href="#" data-part="remove"><i class="far fa-times"></i></a>
                </li>
                <li>
                  <img src="/assets/img/placeholder_square.svg" alt="">
                  <a href="#" data-part="remove"><i class="far fa-times"></i></a>
                </li>
                <li>
                  <img src="/assets/img/placeholder_square.svg" alt="">
                  <a href="#" data-part="remove"><i class="far fa-times"></i></a>
                </li>
                <li>
                  <img src="/assets/img/placeholder_square.svg" alt="">
                  <a href="#" data-part="remove"><i class="far fa-times"></i></a>
                </li>
              </ul>
            </div>
          </div>
          <div data-grid-cell>
            <div data-layout="arranger">
              <div data-position="left">
                <div data-component="toolbar">
                  <ul data-part="items">
                    <li>
                      <button data-styled data-appearance="icon" data-variant="ok ^contrast"><i class="fad fa-images"></i></button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>`,
      footer: `
        <div data-layout="arranger">
          <div data-position="right">
            <div data-component="button-group">
              <button data-styled data-component-role="close">閉じる</button>
              <button data-styled data-variant="ok" onclick="void(0);">OK</button>
            </div>
          </div>
        </div>`
    });

    dialog.show();
  });
});



/**
 * Timeline, 削除
 */
$('[data-function="remove"]').each(function (i, elem) {
  $(this).on('click', function () {
    var args = JSON.parse($(this).attr('data-function-args'));
    var dialog = new EFCCDialog({
      title: '投稿を削除',
      body: `
        <div data-grid data-variant="narrow">
          <div data-grid-cell>
            <p>この投稿を削除してもよろしいですか？<br>（この操作は元に戻せません。）</p>
          </div>
        </div>`,
      footer: `
        <div data-layout="arranger">
          <div data-position="right">
            <div data-component="button-group">
              <button data-styled data-component-role="close">閉じる</button>
              <button data-styled data-variant="warn" onclick="void(0);">削除</button>
            </div>
          </div>
        </div>`
    });

    dialog.show();
  });
});