import './App.css';
import React from 'react';
import Article from '../Article';
import Main from '../Main';
import Header from '../Header';
import data from '../../data/data.json';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

function App() {
  const articles = data.map((el) => {
    return (
      <Route exact path={`/articles/${el.id}`} key={el.id}>
        <Article 
          src={el.img} 
          description={el.articleDescr} 
          title={el.description}
          {...el}
        />
      </Route>
    )
  });
  return (
    <>
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/">
              <Redirect to="/article"/>
            </Route>
            <Route exact path="/article/" component={Main} />
            {articles}
          </Switch>
      </Router>
    </>
  )
}

export default App;
