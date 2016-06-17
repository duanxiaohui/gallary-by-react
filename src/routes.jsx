/*
 *
 * `routes.jsx`
 *
 * Defines the available URL routes in this single page application (SPA). It uses
 * the battle-tested `react-router` component, which allows all the rounting
 * defintions via a declarative set of custom tags. Those tags (ex: <Route>)
 * can be nested to be able to implement master/detail views.
 *
 */
//==============================================================================
// External dependencies
//==============================================================================

//==============================================================================
// Internal dependencies
//==============================================================================
import Main from './components/Main';
import Shop from './components/shop/Index';
import AddressManage from './components/pay/AddressManage';
import AddressAdd from './components/pay/AddressAdd';
//import global from  './common/global';
//==============================================================================
// Module definition
//==============================================================================

// function requireAuth(nextState, replaceState) {
//   if(!global.hasLogin()){
//      replaceState({ nextPathname: nextState.location.pathname }, '/login'+nextState.location.search);
//   }
// }

const routes = {
  path: '/',
  component: Main,
  indexRoute: {component: Main},
  childRoutes: [
    // {
    //   path: 'inbox',
    //   component: Inbox,
    //   childRoutes: [{
    //     path: 'messages/:id',
    //     onEnter: ({ params }, replace) => replace(`/messages/${params.id}`)
    //   }]
    // },
    {path: 'productDetail', component: Shop},
    {path: 'addressManage', component: AddressManage},
    {path: 'addressAdd', component: AddressAdd},
    // {path: 'video', component: VideoCourse},
    // {path: 'login', component: Login},
    // {path: 'experience', component: Experience},
    // {path: 'about', component: About}

  ]
};

export default routes;
