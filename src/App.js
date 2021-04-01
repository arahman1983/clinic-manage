import { useTranslation } from 'react-i18next';
import {Layout} from './components'
import { Clinics } from './pages';

function App() {
  const {t} = useTranslation()
  return (
    <div className="App">
      <Layout>
        <Clinics />
      </Layout>
    </div>
  );
}

export default App;
