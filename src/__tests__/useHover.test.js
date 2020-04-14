import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { toBeInTheDocument, toHaveClass } from '@testing-library/jest-dom/matchers'
import useHover from '../useHover'

expect.extend({ toBeInTheDocument, toHaveClass })

describe('usehover', () => {
  test('hovering works', () => {
    const callback = jest.fn()
    function Component() {
      const [hoverRef, isHover] = useHover(callback)
      return (
        <div data-testid="test-id" ref={hoverRef}>
          {isHover ? 'yes' : 'no'}
        </div>
      )
    }
    const { getByText, getByTestId } = render(<Component />)

    fireEvent.mouseOver(getByTestId('test-id'))
    expect(getByText('yes')).toBeInTheDocument()

    fireEvent.mouseOut(getByTestId('test-id'))
    expect(getByText('no')).toBeInTheDocument()

    expect(callback).toHaveBeenCalled()
  })
})
