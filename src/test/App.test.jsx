import { test, expect } from 'vitest'
import App from '../App'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../utils/store'

test('renders App component and Title', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const appComponent = screen.getByTestId('app-component');
  expect(appComponent).toBeTruthy();
  expect(screen.getByTestId('app-component')).toBeInstanceOf(HTMLElement);
  expect(screen.getByText('Tetris Redux')).toBeTruthy();
});
