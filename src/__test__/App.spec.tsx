import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import App from '../App';

describe('App component', () => {
  it('should render app component with redux', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText(/Test Demo/)).toBeInTheDocument();
  });
});
