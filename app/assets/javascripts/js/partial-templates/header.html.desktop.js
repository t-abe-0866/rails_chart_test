const PT_HEADER_DESKTOP = `
<header id="header">
  <div class="wfx">
    <nav>
      <div data-flex data-flex-align="center">
        <div class="left" data-flex-item>
          <div data-flex>
            <div data-flex-item>
              <div>
                <h1 id="site-name"><img src="/assets/img/logo.svg" alt="EyeFarm Cloud"></h1>
              </div>
            </div>
            <div data-flex-item><i class="separator"></i></div>
            <div data-flex-item>
              <nav data-as-menu id="main-menu">
                <ul>
                  <li data-menu-root>
                    <a href="#">
                      <label>メニュー&nbsp;<i class="far fa-chevron-down"></i></label>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div data-flex-item><i class="separator"></i></div>
            <div data-flex-item>
              <nav data-as-menu id="lab-menu">
                <ul>
                  <li data-menu-root>
                    <a href="#">
                      <label><i class="far fa-function"></i>&nbsp;<i class="far fa-chevron-down"></i></label>
                    </a>
                    <ul>
                      <li>
                        <a href="#" onclick="sample_dialog();">
                          <span class="fa-stack">
                            <i class="fas fa-square fa-stack-2x"></i>
                            <i class="far fa-flask fa-stack-1x fa-inverse"></i>
                          </span>
                          <label>Dialog</label>
                        </a>
                      </li> 
                      <li>
                        <a href="#" onclick="sample_notification();">
                          <span class="fa-stack">
                            <i class="fas fa-square fa-stack-2x"></i>
                            <i class="far fa-flask fa-stack-1x fa-inverse"></i>
                          </span>
                          <label>Notification</label>
                        </a>
                      </li> 
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="right" data-flex-item>
          <nav id="personal-menu">
            <div data-flex>
              <div data-flex-item>
                <nav data-as-menu="notification">
                  <ul>
                    <li data-menu-root>
                      <a href="#">
                        <label><i class="fal fa-bell"></i></label>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div data-flex-item>
                <nav data-as-menu="messages">
                  <ul>
                    <li data-menu-root> 
                      <a href="#">
                        <label><i class="fal fa-envelope"></i></label>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div data-flex-item>
                <nav data-as-menu="user">
                  <ul>
                    <li data-menu-root>
                      <a href="#">
                        <span class="icon"><img src="/assets/img/user-icon.jpg" alt=""></span>
                        <label>ニッポー太郎</label>
                      </a>
                      <ul>
                        <li>
                          <a id="switch-to-mobile" href="#">
                            <span class="fa-stack">
                              <i class="fas fa-square fa-stack-2x"></i>
                              <i class="fas fa-mobile fa-stack-1x fa-inverse"></i>
                            </span>
                            <label>モバイル版を表示する</label>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span class="fa-stack">
                              <i class="fas fa-square fa-stack-2x"></i>
                              <i class="fal fa-print fa-stack-1x fa-inverse"></i>
                            </span>
                            <label>印刷</label>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  </div>
</header>
`;

/*
`<ul style="display: none;">
  <li>
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>メニュー項目</label>
    </a>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>04: グループ</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="0401.html">
          <label>01: グループ一覧</label>
        </a>
      </li>
      <li>
        <a href="0402.html">
          <label>02: グループ一覧（タイル表示）</label>
        </a>
      </li>
      <li>
        <a href="0403.html">
          <label>03: グループの新規登録</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>05: メッセージ</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="0501.html">
          <label>01: 受信メッセージ一覧</label>
        </a>
      </li>
      <li>
        <a href="0502.html">
          <label>02: 受信メッセージの詳細</label>
        </a>
      </li>
      <li>
        <a href="0503.html">
          <label>03: 送信メッセージ一覧</label>
        </a>
      </li>
      <li>
        <a href="0504.html">
          <label>04: 送信メッセージの詳細</label>
        </a>
      </li>
      <li>
        <a href="0505.html">
          <label>05: メッセージの新規登録</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>06: フレンド</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="0601.html">
          <label>01: フレンドリスト</label>
        </a>
      </li>
      <li>
        <a href="0602.html">
          <label>02: フレンドリスト（タイル）</label>
        </a>
      </li>
      <li>
        <a href="0603.html">
          <label>03: フレンド検索</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>08: 圃場</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="0801.html">
          <label>01: 圃場一覧</label>
        </a>
      </li>
      <li>
        <a href="0802.html">
          <label>02: 圃場一覧（タイル）</label>
        </a>
      </li>
      <li>
        <a href="0803.html">
          <label>03: 新規登録</label>
        </a>
      </li>
      <li>
        <a href="0804.html">
          <label>04: 表示</label>
        </a>
      </li>
      <li>
        <a href="0805.html">
          <label>05: 編集</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>09: エリア</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="0901.html">
          <label>01: 一覧</label>
        </a>
      </li>
      <li>
        <a href="0902.html">
          <label>02: 一覧（タイル）</label>
        </a>
      </li>
      <li>
        <a href="0903.html">
          <label>03: 新規</label>
        </a>
      </li>
      <li>
        <a href="0904.html">
          <label>04: 表示</label>
        </a>
      </li>
      <li>
        <a href="0905.html">
          <label>05: 編集</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>11: 通信ボックス</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="1101.html">
          <label>01: 一覧</label>
        </a>
      </li>
      <li>
        <a href="1102.html">
          <label>02: 新規</label>
        </a>
      </li>
      <li>
        <a href="1103.html">
          <label>03: 編集</label>
        </a>
      </li>
      <li>
        <a href="1104.html">
          <label>04: 表示</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>12: 配信先アドレス</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="1201.html">
          <label>01: 一覧</label>
        </a>
      </li>
      <li>
        <a href="1202.html">
          <label>02: 登録・編集</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>13: 日報・週報設定 (CSV)</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href=".html">
          <label>01: 一覧</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>14: CSV</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="1406.html">
          <label>06: 取り込み観測グラフ - 一覧</label>
        </a>
      </li>
      <li>
        <a href="1407.html">
          <label>07: 取り込み観測グラフ - 表示</label>
        </a>
      </li>
      <li>
        <a href="1408.html">
          <label>08: アップロード</label>
        </a>
      </li>
      <li>
        <a href="1409.html">
          <label>09: アップロード削除</label>
        </a>
      </li>
      <li>
        <a href="1410.html">
          <label>10: ダウンロード - 一覧</label>
        </a>
      </li>
      <li>
        <a href="1411.html">
          <label>11: ダウンロード - 新規</label>
        </a>
      </li>
      <li>
        <a href="1412.html">
          <label>12: ダウンロード - 編集</label>
        </a>
      </li>
      <li>
        <a href=".html">
          <label>01: 一覧</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>15: スケジュール</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="1501.html">
          <label>01: 一覧</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>16: ユーザー操作履歴</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="1601.html">
          <label>01: 一覧</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>17: 品目</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="1701.html">
          <label>01: 一覧</label>
        </a>
      </li>
      <li>
        <a href="1702.html">
          <label>02: 新規</label>
        </a>
      </li>
      <li>
        <a href="1703.html">
          <label>03: 編集</label>
        </a>
      </li>
      <li>
        <a href="1704.html">
          <label>04: 表示</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>18: タイムライン</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="1801.html">
          <label>01: メイン</label>
        </a>
      </li>
      <li>
        <a href="1802.html">
          <label>02: 入力と画像投稿</label>
        </a>
      </li>
      <li>
        <a href="1803.html">
          <label>03: 検索結果など</label>
        </a>
      </li>
      <li>
        <a href="1809.html">
          <label>09: マイページ</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>19: 故障通知設定</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="1901.html">
          <label>01: 一覧</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>20: 警報メール</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="2001.html">
          <label>01: 一覧</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>21: 遠隔操作</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="2101.html">
          <label>01: 一覧</label>
        </a>
      </li>
      <li>
        <a href="2102.html">
          <label>02: 設定</label>
        </a>
      </li>
      <li>
        <a href="2103.html">
          <label>03: 設定 - 暖房</label>
        </a>
      </li>
      <li>
        <a href="2106.html">
          <label>06: 設定 - 手動操作</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>22: アカウント管理</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="2201.html">
          <label>01: 一覧</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>23: 機器グループ管理</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="2301.html">
          <label>01: 一覧</label>
        </a>
      </li>
    </ul>
  </li>
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>90: ユーザー</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="9001.html">
          <label>01: 個人設定</label>
        </a>
      </li>
    </ul>
  </li>
  <!-- Samples: -->
  <li class="has-sub-menu">
    <a href="#">
      <span class="fa-stack">
        <i class="fas fa-square fa-stack-2x"></i>
        <i class="far fa-chart-line fa-stack-1x fa-inverse"></i>
      </span>
      <label>Samples</label>
    </a>
    <ul class="sub-menu">
      <li>
        <a href="sample.fullcalendar.html">
          <label>fullcalendar</label>
        </a>
      </li>
    </ul>
  </li>
</ul>
` */