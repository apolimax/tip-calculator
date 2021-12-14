import { render, screen } from "@testing-library/react";

import App, { tipAmountPerPerson, totalAmountPerPerson } from "./App";

test("should render inputs", () => {
  render(<App />);
  const billInput = screen.getByPlaceholderText("Bill");
  const nPeopleInput = screen.getByPlaceholderText("Number of people");

  expect(billInput).toBeInTheDocument();
  expect(nPeopleInput).toBeInTheDocument();
});

test("should render 'Number of People' input with value of 1", () => {
  render(<App />);
  const nPeopleInput = screen.getByPlaceholderText(/number of people/i);

  expect(nPeopleInput).toHaveValue(1);
});

test("should calculate the correct bill", () => {
  const tip = tipAmountPerPerson(125, 4, 10);
  const total = totalAmountPerPerson(125, 4);

  expect(tip).toBe(3.125);
  expect(total).toBe(31.25);
});
