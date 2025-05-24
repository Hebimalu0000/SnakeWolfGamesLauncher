const { app, BrowserWindow, protocol } = require('electron');
const path = require('path');
const { URL } = require('url');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 後ほど作成
      nodeIntegration: false, // セキュリティのため無効
      contextIsolation: true, // セキュリティのため有効
      webSecurity: false, // 開発時にCORSを一時的に回避するため。本番ではtrueに戻すか、適切なCORS設定を行う
    },
    backgroundColor: '#262a2f', // 指定された背景色
    titleBarStyle: 'hiddenInset' // Macのタイトルバーを隠す
  });

  // 開発モードと本番モードで読み込むURLを切り替える
  const isDev = process.env.NODE_ENV === 'development';
  const port = process.env.PORT || 5173; // Viteのデフォルトポート

  if (isDev) {
    win.loadURL(`http://localhost:${port}`);
    win.webContents.openDevTools(); // 開発ツールを開く
  } else {
    win.loadFile(path.join(__dirname, 'client/dist/index.html'));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});