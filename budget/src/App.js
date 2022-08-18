import logo from './logo.svg';
import './App.css';
import Check from './components/scene/form';

function App() {
  return (
    <>
      <p>¿Qué quieres hacer?</p>
      <form action="">
        <div>
        <Check service="web" value={500}></Check>
        <label>Una pàgina web (500€)</label>
        </div>
        <div>
        <Check service="seo" value={300}></Check>
        <label>Una consultoria SEO (300€)</label>
        </div>
        <div>
        <Check service="adds" value={200}></Check>
        <label>Una campaña de Google Ads (200€)</label>
        </div>
      </form>
    </>
  );
}

export default App;
