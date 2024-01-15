import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import Header from "./Components/Header";
import {MemoryRouter} from "react-router-dom";

// Header에 대한 test
describe('Header', () => {
  test('"how it works" correct link', () => {
    // App 전체 렌더링
    render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
    );
    // Role을 사용하여 link DOM import
    const link = screen.getByRole('link', {name: /how it works/i});
      // eslint-disable-next-line testing-library/no-debugging-utils
      screen.debug(link);
    userEvent.click(link);
    // const expectLink = screen.getByRole('heading', {name: /works/i});
    // // eslint-disable-next-line testing-library/no-debugging-utils
    // screen.debug(expectLink);
    expect(
        screen.getByRole('heading', {name: /Find the top posts on Reddit/i})
    ).toBeInTheDocument();
  })
})