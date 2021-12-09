import React from "react";
import renderer from 'react-test-renderer';
import ErrorBlock from "../ErrorBlock";

it('renders correctly with variable', () => {
  const tree = renderer
    .create(<ErrorBlock error="Error"/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without variable', () => {
  const tree = renderer
    .create(<ErrorBlock error=""/>).toJSON();
  expect(tree).toMatchSnapshot();
});