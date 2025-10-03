import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Result from '../pages/Result/Index';
import Home from '../pages/Home/Index';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/result" component={Result} />
      <MyRoute exact path="/" component={Home} />
      \\Para rendizarar uma rota. EXACT para rendizarar a rota com caminho especifico
      <MyRoute path="*" component={Page404} />
      \\Qualquer rota que não existir/configurada vai cair numa pagina de erro
    </Switch>
  );
}
