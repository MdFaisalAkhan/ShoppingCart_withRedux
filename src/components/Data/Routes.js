import React from "react";
import { Route, Switch } from "react-router-dom";
import Products from "./Products";

const Routes = ({ productItem }) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products productItem={productItem} />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
