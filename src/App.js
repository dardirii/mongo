import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Tambah from './pages/Tambah';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"; 

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client = {queryClient}>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact children={() => <Home />} />
          <Route path="/detail" children={() => <Detail />} />
          <Route path="/edit" children={() => <Edit />} />
          <Route path="/tambah" children={() => <Tambah />} />
        </Switch>
      </BrowserRouter>
      </QueryClientProvider>
  )
}

export default App;