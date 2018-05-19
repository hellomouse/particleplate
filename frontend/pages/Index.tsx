import * as React from 'react';

import { withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store, { State } from '../store';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import './Index.css'

class IndexPage extends React.Component {
  render() {
    return (
      <Paper className="app-paper">
        <Typography component="p">Counter: {(this.props as any).counter}</Typography>
        <Button className="app-button" variant="raised" color="primary" onClick={this.increment}>+</Button>
        <Button className="app-button" variant="outlined" color="primary" onClick={this.decrement}>-</Button>
      </Paper>
    );
  }

  increment() {
    store.dispatch({ type: 'INCREMENT' });
  }

  decrement() {
    store.dispatch({ type: 'DECREMENT' });
  }
}

const mapStateToProps = (state: State) => {
  return {
    counter: state.counter
  }
};

export default withRouter(connect(mapStateToProps, null)(IndexPage));
