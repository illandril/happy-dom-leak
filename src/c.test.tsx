import { render, screen } from "@testing-library/react";

it('a', () => {
  render(<div data-testid="node">a</div>)
  expect(screen.getByTestId('node').textContent).toBe('a')
})