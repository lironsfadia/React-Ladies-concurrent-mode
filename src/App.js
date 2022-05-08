// import Card from "./card";
import React, { Suspense } from 'react';
import Spinner from "./file";
import Error from "./Error";
const Card =  React.lazy(() => import('./card'));
// const Card = React.lazy(() => Promise.reject());


function App() {
  return (
    <div className="container">
      <Error fallback={<p>card failed to load</p>}>
        <header className="display-1">
          React Ladies Pro Edition | 2022
        </header>
      </Error>

      <Error fallback={<p>card failed to load</p>}>
        <Suspense fallback={<Spinner/>}>
          <Card/>
        </Suspense>
      </Error>
      <Error fallback={<p>card failed to load</p>}>
        <Suspense fallback={<Spinner/>}>
          <Card/>
        </Suspense>
      </Error>
      <Error fallback={<p>card failed to load</p>}>
        <Suspense fallback={<Spinner/>}>
          <Card/>
        </Suspense>
      </Error>

    </div>
  );
}


export default App;
