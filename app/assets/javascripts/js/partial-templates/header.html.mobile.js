const PT_HEADER_MOBILE = `
<header id="header">
  <div class="wfx">
    <nav>
      <div data-layout="arranger" data-variant="main">
        <div>
          <nav class="align-center">
            <div data-component="inline-toolbar">
              <ul data-part="items">
                <li>
                  <a id="header-user-icon" href="#" data-styled data-appearance="icon" data-variant="">
                    <span class="fa-stack">
                      <i class="fas fa-square fa-stack-2x"></i>
                      <i class="fas fa-user fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <h1 id="site-name"><img src="/assets/img/logo.svg" alt="EyeFarm Cloud"></h1>
        </div>
        <div>
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
            </div>
          </nav>
        </div>
      </div>
    </nav>
  </div>
</header>
<header>
  <div class="wfx">
    <nav id="slide-over-menu">
      <div id="slide-over-menu-layout" data-grid>
        <div id="slide-over-menu-header" data-grid-cell>
          <header data-part="controls">
            <div data-layout="arranger">
              <div data-position="left">
                <button data-part="close"><i class="fal fa-times"></i></button>
              </div>
              <div data-position="right">
                <button id="switch-to-desktop" data-styled data-variant>デスクトップ表示に切り替え</button>
              </div>
            </div>
          </header>
        </div>
        <div id="slide-over-menu-body" data-grid-cell>
          <div data-grid>
            <div data-grid-cell>
              <header data-part="user-icon">
                <picture>
                  <img src="/assets/img/placeholder_square.svg" alt="">
                </picture>
                <div data-part="user-name">ユーザー名</div>
              </header>
            </div>
            <div data-grid-cell>
              <div id="main-menu-mobile"></div>
            </div>
            <div data-grid-cell style="display: none;">
              <ul>
                <li>
                  <a href="0401.html">
                    <span class="fa-stack fa-2x">
                      <i class="fas fa-circle fa-stack-2x"></i>
                      <i class="fas fa-flag fa-stack-1x fa-inverse"></i>
                    </span>04: グループ管理
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</header>
`;