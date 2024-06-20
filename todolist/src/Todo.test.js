import react from 'react';
import {render} from '@testing-library/react';
import Todo from './Todo.js'

it('should render correctly', function() {
    render(<Todo/>);
});

it('should match the snapshot', function() {
    const {asFragment} = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot();
});