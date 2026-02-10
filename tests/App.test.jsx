import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import App from '../src/App'

test('renders heading', () => {
  render(<App />)
  expect(
    screen.getByText(/react ci pipeline works/i)
  ).toBeInTheDocument()
})
