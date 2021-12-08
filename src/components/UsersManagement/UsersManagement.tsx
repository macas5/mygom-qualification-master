import List from './components/List/List';
import useItemsProvider from './useItemsProvider';
import ErrorBlock from '../ErrorBlock';
import Filter from './components/Filter/Filter';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import Header from './components/Header/Header';
import {Route, Switch} from "react-router-dom";
import {Routes} from '~/constants';
import itemHasWeakPassword from "~/utils/itemHasWeakPassword";
import itemHasReusedPassword from "~/utils/itemHasReusedPassword";
import itemIsOld from '~/utils/itemIsOld';
import { useUserContext } from '../UserContext';

const UsersManagement = () => {
  const {
    errorMessage: userProviderErrorMessage,
    isLoading: userDataIsLoading,
    username,
  } = useUserContext();

  const {
    items,
    isLoading,
    errorMessage,
  } = useItemsProvider();

  if (isLoading || userDataIsLoading) {
    return <LoadingScreen isLoading={isLoading || userDataIsLoading}/>
  }

  if (userProviderErrorMessage || errorMessage) {
    return <ErrorBlock error={userProviderErrorMessage || errorMessage}/>
  }

  return (
    <div className="container">
      <Header items={items} username={username} />
      <Filter items={items}/>
      <Switch>
        <Route exact path={Routes.Users}>
          <List items={items}/>
        </Route>
        <Route path={Routes.Weak}>
          <List items={items.filter((item) => itemHasWeakPassword(item))}/>
        </Route>
        <Route path={Routes.Reused}>
          <List items={items.filter((item) => itemHasReusedPassword(item, items))}/>
        </Route>
        <Route path={Routes.Old}>
          <List items={items.filter((item) => itemIsOld(item))}/>
        </Route>
      </Switch>
    </div>
  );
};

export default UsersManagement;
