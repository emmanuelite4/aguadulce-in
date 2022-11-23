import { render, screen } from "../../testutils";
import Header from "./Header";

describe("Header / ", function () {
  it("has the correct title", () => {
    render(<Header />);
    expect(screen.getByText("Role Manager")).toBeInTheDocument();
  });

  it("has the correct member link correctly", () => {
    render(<Header />);

    expect(screen.getByTestId("member")).toBeInTheDocument();
    expect(screen.getByTestId("member").getAttribute("href")).toEqual(
      "/members"
    );
  });

  it("has the correct roles link correctly", () => {
    render(<Header />);

    expect(screen.getByTestId("roles")).toBeInTheDocument();
    expect(screen.getByTestId("roles").getAttribute("href")).toEqual("/");
  });
});
