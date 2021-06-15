function sample_dialog() {
  var dialog = new EFCCDialog({
    title: 'サンプル',
    body: `
      <p>登録メールアドレスを入力してください。<br>ログインパスワードをリセットするメールをお客様の元へ送信します。</p>
      <dl data-component="kv-list">
        <dt>メールアドレス</dt>
        <dd>
          <input data-styled type="text" placeholder="登録メールアドレスを入力してください" value="">
        </dd>
      </dl>
    `,
    footer: `
      <div data-layout="arranger">
        <div data-position="right">
          <div data-component="button-group">
            <button data-styled data-component-role="close">キャンセル</button>
            <button data-styled data-variant="credential" onclick="void(0);">送信</button>
          </div>
        </div>
      </div>
    `
  });

  dialog.show();
}



function sample_notification() {
  var notification = new EFCCNotification({
    body: '通知はこのように表示されます。'
  });

  notification.show();
}
