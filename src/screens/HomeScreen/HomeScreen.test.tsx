import React from 'react';
import HomeScreen from './HomeScreen';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';

const mockStore = configureMockStore();
const store = mockStore({});

describe('HomeScreen', () => {
  let component: unknown;

  beforeEach(() => {
    component = shallow(
      <Provider store={store}>
        <HomeScreen />
      </Provider>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render correctly', () => {
    expect(component).toBeDefined();
  });
});
