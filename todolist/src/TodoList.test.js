import react from 'react';
import {render} from '@testing-library/react';
import TodoList from './TodoList.js';

it('should render correctly', function() {
    render(<TodoList/>);
});

it('should match snapshot', function() {
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot();
});