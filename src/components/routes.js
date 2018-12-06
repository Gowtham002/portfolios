import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ListPage from "./listPage/ListPage";
import DetailsPage from "./detailsPage/DetailsPage";

const routes = (
  <Switch>
    <Route path="/portfolios/:id" component={DetailsPage}/>
    <Route path="/" exact component={ListPage}/>
    <Redirect to="/" />
  </Switch>
)

export default routes;