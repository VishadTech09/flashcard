import './App.css';
import AppHeader from './pages/components/header/index';
import AppTabs from './pages/components/app-tabs/index';

function App() {
  return (
    <div>
      <AppHeader />
      <AppTabs title="Create Flashcard Group" />
    </div>

  );
}

export default App;
