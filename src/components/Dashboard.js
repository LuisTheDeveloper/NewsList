import React from "react";
import { Route, Switch } from "react-router-dom";
import NewsBitcoin from "./NewsBitcoin";
import NewsCovid from "./NewsCovid";
import NewsML from "./NewsML";
import Home from "./Home";
import Navbar from "./Navbar";
import SaveList from "./SaveList";

export const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route
          path="/bitcoin"
          render={() => <NewsBitcoin article="bitcoin" />}
        />
        <Route path="/covid" render={() => <NewsCovid article="covid" />} />
        <Route
          path="/machinelearning"
          render={() => <NewsML article="machinelearning" />}
        />
        <Route path="/savelist" render={() => <SaveList />} />
      </Switch>
    </>
  );
};

export default Dashboard;
