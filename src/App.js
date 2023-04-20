import { AuthProvider } from './components/RoleValue/RoleValue';
import Router from './routes/Routes';


function App() {

  return (
    <>
    <AuthProvider>
      <Router />
    </AuthProvider>
    </>
  );

}

export default App;
