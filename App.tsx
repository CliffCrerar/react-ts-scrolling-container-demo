import * as React from 'react';
import { ScrollingContainer } from './components/ScrollingContainer';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <ScrollingContainer heading="Scrolly Container" />
    </div>
  );
}
