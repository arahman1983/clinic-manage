import { useTranslation } from 'react-i18next';
import {Layout} from './components'

function App() {
  const {t} = useTranslation()
  return (
    <div className="App">
      <Layout>
        {
          t('siteName')
        }
      </Layout>
    </div>
  );
}

export default App;
