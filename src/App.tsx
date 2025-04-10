import React from 'react';

type State = {
  pressedKey: string;
};

export class App extends React.Component<State> {
  state = {
    pressedKey: '',
  };

  handleKeyClick = (event: KeyboardEvent) => {
    event.preventDefault();
    this.setState({ pressedKey: event.key });
  };

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyClick);
  }

  shouldComponentUpdate(nextState: State): boolean {
    return this.state.pressedKey !== nextState.pressedKey;
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyClick);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressedKey === ''
            ? 'Nothing was pressed yet'
            : `The last pressed key is [${this.state.pressedKey}]`}
        </p>
      </div>
    );
  }
}
