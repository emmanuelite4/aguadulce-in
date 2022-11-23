import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header / ", function () {
  it("it contains the correct title", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText("Role Manager")).toBeInTheDocument();
  });
});
