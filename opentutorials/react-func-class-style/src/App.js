import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [funcShow, setFuncShow] = React.useState(true);
  const [classShow, setClassShow] = React.useState(true);

  return (
    <div className="container">
      <h1>Components</h1>
      <input type="button" value="remove func" onClick={
        function() {
          setFuncShow(false);
        }
      }></input>
      <input type="button" value="remove class" onClick={
        function() {
          setClassShow(false);
        }
      }></input>
      { funcShow === true ? <FunctionComponent initNumber={2}></FunctionComponent> : null }
      { classShow === true ? <ClassComponent initNumber={2}></ClassComponent> : null }
    </div>
  );
}

function FunctionComponent(props) {
  const [number, setNumber] = React.useState(props.initNumber);
  const [date, setDate] = React.useState(new Date().toString());

  React.useEffect(function() {
    console.log('useEffect')
  });

  return (
    <div className="container">
      <h2>Function Component</h2>
      <p>This is Function component</p>
      <p>Date : {date}</p>
      <p>Number : {number}</p>
      <input type="button" value="random" onClick={
        function() {
          setNumber(Math.random());
        }
      }></input>
      <input type="button" value="date" onClick={
        function() {
          setDate(new Date().toString());
        }
      }></input>
    </div>
  );
}

class ClassComponent extends React.Component {
  state = {
    number: this.props.initNumber,
    date: new Date().toString(),
  }
  render() {
    return(
      <div className="container">
        <h2>Class Component</h2>
        <p>This is Class component</p>
        <p>Date : {this.state.date}</p>
        <p>Number : {this.state.number}</p>
        <input type="button" value="random" onClick={
          function() {
            this.setState({ number: Math.random() });
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function() {
            this.setState({ date: new Date().toString() });
          }.bind(this)
        }></input>
      </div>
    );
  }
}

export default App;
