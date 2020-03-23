import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import WorldCupContainer from './components/WorldCupContainer';
import { act } from 'react-dom/test-utils';
import useCountryFlag from './hooks/useCountryFlag';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("contains a header", () => {
  let container;
  act(() => {
    container = render(<WorldCupContainer />);
  });
  expect(container.getByText(/players/i));
});

test("can retrieve a valid country flag", () => {
  const url = useCountryFlag("United States")[0];
  expect(url).toBe("https://www.countryflags.io/US/flat/64.png");
});

test("throws an error for bad country names", () => {
  try {
    const url = useCountryFlag("Bluenited States")[0];
    //intentionally fail the test if the previous line doesn't throw an error
    expect(url).toContain("bananananananananana");    
  }
  catch(e){
    //look for the error message originating from the hook
    expect(e).toContain("not a valid country name");
  }
});