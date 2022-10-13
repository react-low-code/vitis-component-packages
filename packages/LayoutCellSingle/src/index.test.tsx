import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './component';

describe('<Component />', () => {
  it('render Component with 在这里定义组件', () => {
    const msg = '一行一栏布局';

    render(<Component children={msg}/>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
