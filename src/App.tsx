import React from 'react';
import Lifestyle from './components/LifestyleC';
import "./index.css"
import Form from './components/Form';

const App = () => {
  const appstyle: React.CSSProperties = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'100vh',
  };
  return (
    <div style={appstyle}>
      <Form />
      <Lifestyle/>
    </div>
  );
};

export default App;