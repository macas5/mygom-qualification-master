import React from "react";
import renderer from 'react-test-renderer';
import UsersManagement from "../UsersManagement";

it('renders correctly', () => {
  const tree = renderer
    .create(<UsersManagement/>).toJSON();
  expect(tree).toMatchSnapshot();
});