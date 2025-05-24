// client/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // 後で作成
import './index.css'; // グローバルスタイルを読み込む
import SidebarItem from './components/SidebarItem'; // SidebarItem をインポート
import { MdStorefront, MdLibraryBooks, MdOutlineCloudDownload, MdSettings, MdLogin } from 'react-icons/md'; // 例として Material Design Icons をインポート

// ダミーコンポーネント (後で実際のコンポーネントに置き換えます)
const StorePage: React.FC = () => (
  <div style={{ padding: '20px' }}>
    <h2>ストア</h2>
    <p>ゲームの購入や情報を閲覧するページです。</p>
  </div>
);
const LibraryPage: React.FC = () => (
  <div style={{ padding: '20px' }}>
    <h2>ライブラリ</h2>
    <p>所有しているゲームを管理するページです。</p>
  </div>
);
const DownloadsPage: React.FC = () => (
  <div style={{ padding: '20px' }}>
    <h2>ダウンロード</h2>
    <p>ゲームのダウンロード状況を確認するページです。</p>
  </div>
);
const SettingsPage: React.FC = () => (
  <div style={{ padding: '20px' }}>
    <h2>設定</h2>
    <p>ランチャーの設定を行うページです。</p>
  </div>
);
const LoginPage: React.FC = () => (
  <div style={{ padding: '20px' }}>
    <h2>ログイン</h2>
    <p>アカウントにログインまたは新規登録するページです。</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-layout">
        <nav className="sidebar">
          <ul>
            <SidebarItem to="/" icon={MdStorefront} label="ストア" end />
            <SidebarItem to="/library" icon={MdLibraryBooks} label="ライブラリ" />
            <SidebarItem to="/downloads" icon={MdOutlineCloudDownload} label="ダウンロード" />
            <SidebarItem to="/settings" icon={MdSettings} label="設定" />
            <SidebarItem to="/login" icon={MdLogin} label="ログイン" />
          </ul>
        </nav>
        <main className="content">
          <Routes>
            <Route path="/" element={<StorePage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/downloads" element={<DownloadsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;