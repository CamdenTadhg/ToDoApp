import react from 'react';
import {render} from '@testing-library/react';
import NewTodoForm from './NewTodoForm.js';

it('should render correctly', function() {
    render(<NewTodoForm/>);
});

it('should match the snapshot', function() {
    const {asFragment} = render(<NewTodoForm/>);
    expect(asFragment()).toMatchSnapshot();
})