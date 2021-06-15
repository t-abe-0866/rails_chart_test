/**
 * Schedule, 
 */



function add_event() {
  var dialog = new EFCCDialog({
    title: '予定の登録',
    body: `
      <dl data-component="kv-list" data-columns="2" data-columns-mobile="1">
        <div data-span="2" data-span-mobile="1">
          <dt>タイトル</dt>
          <dd><input data-styled type="text"></dd>
        </div>
        <div data-span="2" data-span-mobile="1">
          <dt>日時</dt>
          <dd>
            <table data-styled="" data-variant-mobile="list-view ^controls">
              <tbody>
                <tr>
                  <td><input type="text" data-styled></td>
                  <td data-arrangement="text-align-center">から</td>
                  <td><input type="text" data-styled></td>
                  <td data-arrangement="text-align-center" data-part="controls">
                    <div data-component="inline-toolbar" data-variant="icons">
                      <ul data-part="items">
                        <li>
                          <a data-styled="" data-appearance="icon" href="#" title="編集"><i class="far fa-minus"></i></a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3"></td>
                  <td data-arrangement="text-align-center" data-part="controls">
                    <div data-component="inline-toolbar" data-variant="icons">
                      <ul data-part="items">
                        <li>
                          <a data-styled="" data-appearance="icon" href="#" title="編集"><i class="far fa-plus"></i></a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </dd>
        </div>
        <div>
          <dt>種類</dt>
          <dd>
            <select data-styled name="select-name">
              <option value="-">種類 1</option>
              <option value="-">種類 2</option>
              <option value="-">種類 3</option>
            </select>
          </dd>
        </div>
        <div>
          <dt>キーワード</dt>
          <dd><input type="text" data-styled></dd>
        </div>
        <div data-span="2" data-span-mobile="1">
          <dt>場所</dt>
          <dd><input data-styled type="text"></dd>
        </div>
        <div>
          <dt>内容</dt>
          <dd><textarea data-styled rows="4"></textarea></dd>
        </div>
        <div>
          <dt>画像</dt>
          <dd>
            <div data-grid data-variant="narrow" data-grid-columns="2" data-grid-columns-mobile="4">
              <div data-grid-cell>
                <picture>
                  <img src="/assets/img/placeholder_square.svg" alt="">
                </picture>
              </div>
              <div data-grid-cell data-grid-span-mobile="3" data-arrangement="align-self-center">
                <input data-styled type="file">
              </div>
            </div>
          </dd>
        </div>
      </dl>
      <dl data-component="kv-list" data-variant="nest-parent">
        <div>
          <dt>予定の追加先</dt>
          <dd>
            <dl data-component="kv-list" data-columns="2" data-columns-mobile="1">
              <div>
                <dt>グループ</dt>
                <dd>
                  <select data-styled name="select-name">
                    <option value="-">グループ 1</option>
                    <option value="-">グループ 2</option>
                    <option value="-">グループ 3</option>
                  </select>
                </dd>
              </div>
              <div>
                <dt>メンバー</dt>
                <dd>
                  <table data-styled data-variant-mobile="list-view ^controls">
                    <tbody>
                      <tr>
                        <td>メンバー 1</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-plus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>メンバー 2</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-plus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>メンバー 3</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-plus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </div>
              <div data-span="2" data-span-mobile="1">
                <dt>スケジュールの追加先</dt>
                <dd>
                  <table data-styled data-variant-mobile="list-view ^controls">
                    <tbody>
                      <tr>
                        <td>メンバー 4</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-minus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </dd>
        </div>
      </dl>
      `,
    footer: `
      <div data-layout="arranger">
        <div data-position="right">
          <div data-component="button-group">
            <button data-styled data-component-role="close">閉じる</button>
            <button data-styled data-variant="ok" onclick="void(0);">登録</button>
          </div>
        </div>
      </div>`
  });

  dialog.show();
  dev_behaviour_simulator_init();
}



function edit_event() {
  temp = edit_event.caller;
  var dialog = new EFCCDialog({
    title: '予定の編集',
    body: `
      <dl data-component="kv-list" data-columns="2" data-columns-mobile="1">
        <div data-span="2" data-span-mobile="1">
          <dt>タイトル</dt>
          <dd><input data-styled type="text" value="EyeFarm Cloud について打ち合わせ"></dd>
        </div>
        <div data-span="2" data-span-mobile="1">
          <dt>日時</dt>
          <dd>
            <table data-styled="" data-variant-mobile="list-view ^controls">
              <tbody>
                <tr>
                  <td><input type="text" data-styled value="2019/09/06 09:00"></td>
                  <td data-arrangement="text-align-center">から</td>
                  <td><input type="text" data-styled value="2019/09/06 10:00"></td>
                  <td data-arrangement="text-align-center" data-part="controls">
                    <div data-component="inline-toolbar" data-variant="icons">
                      <ul data-part="items">
                        <li>
                          <a data-styled="" data-appearance="icon" href="#" title="削除"><i class="far fa-minus"></i></a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3"></td>
                  <td data-arrangement="text-align-center" data-part="controls">
                    <div data-component="inline-toolbar" data-variant="icons">
                      <ul data-part="items">
                        <li>
                          <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-plus"></i></a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </dd>
        </div>
        <div>
          <dt>種類</dt>
          <dd>
            <select data-styled name="select-name">
              <option value="-">種類 1</option>
              <option value="-">種類 2</option>
              <option value="-">種類 3</option>
            </select>
          </dd>
        </div>
        <div>
          <dt>キーワード</dt>
          <dd><input type="text" data-styled value="#keyword_1, #keyword_2, ..."></dd>
        </div>
        <div data-span="2" data-span-mobile="1">
          <dt>場所</dt>
          <dd><input data-styled type="text" value="第一会議室"></dd>
        </div>
        <div>
          <dt>内容</dt>
          <dd><textarea data-styled rows="4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas voluptas blanditiis itaque vero suscipit quidem impedit. Alias libero deserunt est veritatis, officiis natus animi explicabo tempora magnam, sed at!</textarea></dd>
        </div>
        <div>
          <dt>画像</dt>
          <dd>
            <div data-grid data-variant="narrow" data-grid-columns="2" data-grid-columns-mobile="4">
              <div data-grid-cell>
                <picture>
                  <img src="/assets/img/placeholder_square.svg" alt="">
                </picture>
              </div>
              <div data-grid-cell data-grid-span-mobile="3" data-arrangement="align-self-center">
                <input data-styled type="file">
              </div>
            </div>
          </dd>
        </div>
      </dl>
      <dl data-component="kv-list" data-variant="nest-parent">
        <div>
          <dt>予定の追加先</dt>
          <dd>
            <dl data-component="kv-list" data-columns="2" data-columns-mobile="1">
              <div>
                <dt>グループ</dt>
                <dd>
                  <select data-styled name="select-name">
                    <option value="-">グループ 1</option>
                    <option value="-">グループ 2</option>
                    <option value="-">グループ 3</option>
                  </select>
                </dd>
              </div>
              <div>
                <dt>メンバー</dt>
                <dd>
                  <table data-styled data-variant-mobile="list-view ^controls">
                    <tbody>
                      <tr>
                        <td>メンバー 1</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-plus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </div>
              <div data-span="2" data-span-mobile="1">
                <dt>スケジュールの追加先</dt>
                <dd>
                  <table data-styled data-variant-mobile="list-view ^controls">
                    <tbody>
                      <tr>
                        <td>メンバー 2</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-minus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>メンバー 3</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-minus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>メンバー 4</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-minus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </dd>
        </div>
      </dl>
      `,
    footer: `
      <div data-layout="arranger">
        <div data-position="left">
          <div data-component="button-group">
            <button data-styled data-variant="warn">削除</button>
          </div>
        </div>
        <div data-position="right">
          <div data-component="button-group">
            <button data-styled data-component-role="close">閉じる</button>
            <button data-styled data-variant="ok" data-dev-behaviour="save">更新</button>
          </div>
        </div>
      </div>`
  });

  dialog.show(true);
  dev_behaviour_simulator_init();
}



function copy_event() {
  temp = edit_event.caller;
  var dialog = new EFCCDialog({
    title: '予定の複製',
    body: `
      <dl data-component="kv-list" data-columns="2" data-columns-mobile="1">
        <div data-span="2" data-span-mobile="1">
          <dt>タイトル</dt>
          <dd><input data-styled type="text" value="EyeFarm Cloud について打ち合わせ"></dd>
        </div>
        <div data-span="2" data-span-mobile="1">
          <dt>日時</dt>
          <dd>
            <table data-styled="" data-variant-mobile="list-view ^controls">
              <tbody>
                <tr>
                  <td><input type="text" data-styled value="2019/09/06 09:00"></td>
                  <td data-arrangement="text-align-center">から</td>
                  <td><input type="text" data-styled value="2019/09/06 10:00"></td>
                  <td data-arrangement="text-align-center" data-part="controls">
                    <div data-component="inline-toolbar" data-variant="icons">
                      <ul data-part="items">
                        <li>
                          <a data-styled="" data-appearance="icon" href="#" title="削除"><i class="far fa-minus"></i></a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3"></td>
                  <td data-arrangement="text-align-center" data-part="controls">
                    <div data-component="inline-toolbar" data-variant="icons">
                      <ul data-part="items">
                        <li>
                          <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-plus"></i></a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </dd>
        </div>
        <div>
          <dt>種類</dt>
          <dd>
            <select data-styled name="select-name">
              <option value="-">種類 1</option>
              <option value="-">種類 2</option>
              <option value="-">種類 3</option>
            </select>
          </dd>
        </div>
        <div>
          <dt>キーワード</dt>
          <dd><input type="text" data-styled value="#keyword_1, #keyword_2, ..."></dd>
        </div>
        <div data-span="2" data-span-mobile="1">
          <dt>場所</dt>
          <dd><input data-styled type="text" value="第一会議室"></dd>
        </div>
        <div>
          <dt>内容</dt>
          <dd><textarea data-styled rows="4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas voluptas blanditiis itaque vero suscipit quidem impedit. Alias libero deserunt est veritatis, officiis natus animi explicabo tempora magnam, sed at!</textarea></dd>
        </div>
        <div>
          <dt>画像</dt>
          <dd>
            <div data-grid data-variant="narrow" data-grid-columns="2" data-grid-columns-mobile="4">
              <div data-grid-cell>
                <picture>
                  <img src="/assets/img/placeholder_square.svg" alt="">
                </picture>
              </div>
              <div data-grid-cell data-grid-span-mobile="3" data-arrangement="align-self-center">
                <input data-styled type="file">
              </div>
            </div>
          </dd>
        </div>
      </dl>
      <dl data-component="kv-list" data-variant="nest-parent">
        <div>
          <dt>予定の追加先</dt>
          <dd>
            <dl data-component="kv-list" data-columns="2" data-columns-mobile="1">
              <div>
                <dt>グループ</dt>
                <dd>
                  <select data-styled name="select-name">
                    <option value="-">グループ 1</option>
                    <option value="-">グループ 2</option>
                    <option value="-">グループ 3</option>
                  </select>
                </dd>
              </div>
              <div>
                <dt>メンバー</dt>
                <dd>
                  <table data-styled data-variant-mobile="list-view ^controls">
                    <tbody>
                      <tr>
                        <td>メンバー 1</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-plus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </div>
              <div data-span="2" data-span-mobile="1">
                <dt>スケジュールの追加先</dt>
                <dd>
                  <table data-styled data-variant-mobile="list-view ^controls">
                    <tbody>
                      <tr>
                        <td>メンバー 2</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-minus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>メンバー 3</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-minus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>メンバー 4</td>
                        <td data-arrangement="text-align-center" data-part="controls">
                          <div data-component="inline-toolbar" data-variant="icons">
                            <ul data-part="items">
                              <li>
                                <a data-styled="" data-appearance="icon" href="#" title="追加"><i class="far fa-minus"></i></a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </dd>
        </div>
      </dl>
      `,
    footer: `
      <div data-layout="arranger">
        <div data-position="left">
        </div>
        <div data-position="right">
          <div data-component="button-group">
            <button data-styled data-component-role="close">閉じる</button>
            <button data-styled data-variant="ok" onclick="void(0);">登録</button>
          </div>
        </div>
      </div>`
  });

  dialog.show(true);
}


function show_event() {
  var dialog = new EFCCDialog({
    title: '予定の詳細',
    body: `
      <dl data-component="kv-list" data-columns="2" data-columns-mobile="1">
        <div data-span="2" data-span-mobile="1">
          <dt>タイトル</dt>
          <dd>EyeFarm Cloud について打ち合わせ</dd>
        </div>
        <div data-span="2" data-span-mobile="1">
          <dt>日時</dt>
          <dd>
            <ol data-component="list-view">
              <li>2019/09/06 09:00 から 2019/09/06 10:00</li>
            </ol>
          </dd>
        </div>
        <div>
          <dt>種類</dt>
          <dd>
            <ul data-component="legend">
              <li>
                <span data-part="marker"><i class="fas fa-square-full"></i></span>
                <label>作業</label>
              </li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>キーワード</dt>
          <dd>#keyword_1, #keyword_2, ...</dd>
        </div>
        <div data-span="2" data-span-mobile="1">
          <dt>場所</dt>
          <dd>第一会議室</dd>
        </div>
        <div>
          <dt>内容</dt>
          <dd>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quas voluptas blanditiis itaque vero suscipit quidem
          impedit. Alias libero deserunt est veritatis, officiis natus animi explicabo tempora magnam, sed at!</dd>
        </div>
        <div>
          <dt>画像</dt>
          <dd data-arrangement="text-align-center">
            <picture>
              <img src="/assets/img/placeholder_square.svg" alt="">
            </picture>
          </dd>
        </div>
      </dl>
      <dl data-component="kv-list" data-variant="nest-parent">
        <div>
          <dt>予定の追加先</dt>
          <dd>
            <dl data-component="kv-list" data-columns="2" data-columns-mobile="1">
              <div data-span="2" data-span-mobile="1">
                <dt>スケジュールの追加先</dt>
                <dd>
                  <ol data-component="list-view">
                    <li>メンバー 2</li>
                    <li>メンバー 3</li>
                    <li>メンバー 4</li>
                  </ol>
                </dd>
              </div>
            </dl>
          </dd>
        </div>
      </dl>
      `,
    footer: `
      <div data-layout="arranger">
        <div data-position="left">
          <div data-component="button-group">
            <button data-styled data-variant="ok" onclick="copy_event(true);">複製</button>
          </div>
        </div>
        <div data-position="right">
          <div data-component="button-group">
            <button data-styled data-component-role="close">閉じる</button>
            <button data-styled data-variant="ok" onclick="edit_event(true);">編集</button>
          </div>
        </div>
      </div>`
  });

  dialog.show();
  dev_behaviour_simulator_init();
}



$('[data-function="add"]').on('click', function () {
  add_event();
});



$('[data-function="show"]').on('click', function () {
  show_event();
});



$('[data-function="edit"]').on('click', function (test) {
  edit_event();
});