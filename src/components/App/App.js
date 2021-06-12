import React, { useState } from 'react';
import firebase from 'firebase';
import Main from '../Main';
import Header from '../Header';
import Article from '../Article';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [fireCollection, setFireCollection] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('data').get();
      setFireCollection(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchData();
  }, []);

  const articles = fireCollection.map((el) => {
    return (
      <Route path={`/article/${el.id}`} key={el.id}>
        <Article 
          description={el.description}
          src={el.imageUrl}
          title={el.title}
          сomment={el.expertComment} 
          />
      </Route>
    );
  });

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Redirect to='/article' />
        </Route>
        <Route exact path='/article'>
          <Main data={fireCollection} />
        </Route>
        {articles}
      </Switch>
    </Router>
  );
}

export default App;
