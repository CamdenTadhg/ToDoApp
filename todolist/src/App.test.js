import {fireEvent, render} from '@testing-library/react';
import App from './App';

it('should render correctly', function () {
  render(<App/>);
})

it('should match the snapshot', function() {
  const {asFragment} = render(<App/>);
  expect(asFragment()).toMatchSnapshot();
});

it('should add a new todo from form', function() {
  const {queryByText, getByPlaceholderText, getByTestId} = render(<App/>)
  expect(queryByText('Massage')).not.toBeInTheDocument();
  const taskInput = getByPlaceholderText('task');
  fireEvent.input(taskInput, {target: {value: 'Massage'}});
  fireEvent.submit(getByTestId('todoform'));
  expect(queryByText('Massage')).toBeInTheDocument();

});

it('should delete a todo', function() {
  const {getByText, getByTestId} = render(<App/>);
  const task = getByText('Breakfast with yogurt');
  expect(task).toBeInTheDocument();
  const button = getByTestId('Breakfast with yogurt');
  fireEvent.click(button);
  expect(task).not.toBeInTheDocument();
});
