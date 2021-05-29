import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

it("renders! Smoke Test", () => {
  render(<Card />);
});

it("Matches Card Snapshot", () => {
  const { asFragment } = render(<Card />);
  expect(asFragment()).toMatchSnapshot()
});



