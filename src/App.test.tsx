import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the main heading", () => {
    render(<App />);
    const heading = screen.getByText("Vite + React");
    expect(heading).toBeInTheDocument();
  });

  it("renders the count button", () => {
    render(<App />);
    const button = screen.getByText(/count is/i);
    expect(button).toBeInTheDocument();
  });
});
