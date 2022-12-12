import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from './component';

describe('<Component />', () => {
  it('render Component with 在这里定义组件', () => {
    const msg = '在这里定义组件';

    render(<Component label={msg} options={[{value: '1', label: '选项'}]}/>);
    expect(screen.queryByText(msg)).toBeInTheDocument();
  });
});
