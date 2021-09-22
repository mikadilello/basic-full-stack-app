/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Entry from '../pages/[id]'

describe('heading', () => {
  it('renders a heading', () => {
    render(<Entry />)

    const heading = screen.getByRole('heading', {
      name: /Person Detail/i,
    })

    expect(heading).toBeInTheDocument()
  })
})