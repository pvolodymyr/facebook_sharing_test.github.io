import React from 'react'
import { HelmetMetaTags } from './helmet';

function App() {
  return (
    <div className="App">
      <HelmetMetaTags
        url='https://www.google.com/'
        description='This is some description inside meta tag'
        title='Title from meta'
        quote='Quote from meta'
        image='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
      />
      <h1>this is react page with helmet</h1>
    </div>
  );
}

export default App;
