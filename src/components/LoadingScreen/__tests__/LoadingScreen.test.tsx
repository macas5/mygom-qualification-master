import React from "react";
import renderer from 'react-test-renderer';
import LoadingScreen from "../LoadingScreen";

it('renders correctly if loading', () => {
  const tree = renderer
    .create(<LoadingScreen isLoading={true}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly if not loading', () => {
  const tree = renderer
    .create(<LoadingScreen isLoading={false}/>).toJSON();
  expect(tree).toMatchSnapshot();
});