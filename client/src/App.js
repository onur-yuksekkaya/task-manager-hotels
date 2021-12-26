import './App.css';

import { RouterConfig } from 'navigation/RouterConfig';
import { AuthProvider } from 'context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="bg-gradient-to-r from-slate-200 to-sky-100 w-screen h-screen">
        <RouterConfig />
      </div>
    </AuthProvider>
  );
}

export default App;
