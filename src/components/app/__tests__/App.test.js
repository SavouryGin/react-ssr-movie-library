import { render, screen } from "@testing-library/react";
import App from "../index";

test("renders learn react link", () => {
  render(<App />);
  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
