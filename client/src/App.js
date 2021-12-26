import './App.css';

import { RouterConfig } from 'navigation/RouterConfig';
import { AuthProvider } from 'context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterConfig />
      </AuthProvider>
    </div>
  );
}

export default App;
