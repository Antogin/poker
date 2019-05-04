import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount} from "enzyme/build";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should mount state', () => {
    const app = mount(<App />);
    expect(app.state().deck).toHaveLength(42);
    expect(app.state().usedCards).toHaveLength(10);
    expect(app.state().players).toHaveLength(2);
});

it('should add a player', () => {
    const app = mount(<App />);
    const instance = app.instance();
    instance.addPlayer();
    expect(app.state().players).toHaveLength(3);
    expect(app.state().deck).toHaveLength(37);
    expect(app.state().usedCards).toHaveLength(15);
});

it('should remove a player', () => {
    const app = mount(<App />);
    const instance = app.instance();

    instance.deletePlayer(app.state().players[0].id);
    expect(app.state().players).toHaveLength(1);
    expect(app.state().deck).toHaveLength(47);
    expect(app.state().usedCards).toHaveLength(5);
});

it('should update a player', () => {
    const app = mount(<App />);
    const instance = app.instance();
    const event = {target: {value: 'update'}};
    instance.changeName(event , app.state().players[0].id);
    expect(app.state().players[0].name).toBe('update');
});
