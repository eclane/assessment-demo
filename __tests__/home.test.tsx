import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import '@testing-library/jest-dom';

it("renders without crashing", () => {
  render(<Home />);
  expect(
    screen.getByRole("navigation", { name: "Global" })
  ).toBeInTheDocument();
});
