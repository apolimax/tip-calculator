import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App, { tipAmountPerPerson, totalAmountPerPerson } from "./App";

beforeEach(() => {
  render(<App />);
});

test("should render inputs", () => {
  const billInput = screen.getByPlaceholderText("Bill");
  const nPeopleInput = screen.getByPlaceholderText("Number of people");

  expect(billInput).toBeInTheDocument();
  expect(nPeopleInput).toBeInTheDocument();
});

test("should render 'Number of People' input with value of 1", () => {
  const nPeopleInput = screen.getByPlaceholderText(/number of people/i);

  expect(nPeopleInput).toHaveValue(1);
});

test("should calculate the correct bill", () => {
  const tip = tipAmountPerPerson(125, 4, 10);
  const total = totalAmountPerPerson(125, 4);

  expect(tip).toBe(3.125);
  expect(total).toBe(31.25);
});

test("should be able to write in the bill input", () => {
  const billInput = screen.getByLabelText(/bill/i);

  userEvent.type(billInput, "5");

  expect(billInput.value).toBe("5");
});
