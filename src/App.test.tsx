import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the main heading", () => {
    render(<App />);
    const heading = screen.getByText("🐲 Dragon Farm 🐲");
    expect(heading).toBeInTheDocument();
  });

  it("renders the hatch dragon button", () => {
    render(<App />);
    const button = screen.getByText("🥚 Hatch Dragon");
    expect(button).toBeInTheDocument();
  });

  it("renders the initial gold amount", () => {
    render(<App />);
    const goldAmount = screen.getByText("100");
    expect(goldAmount).toBeInTheDocument();
  });

  it("renders the dragons count", () => {
    render(<App />);
    const dragonsSection = screen.getByText("🐉 Dragons");
    expect(dragonsSection).toBeInTheDocument();
  });
});
