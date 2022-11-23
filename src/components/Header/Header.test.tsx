import { render, screen } from "../../testutils";
import Header from "./Header";

describe("Header / ", function () {
  it("it contains the correct title", () => {
    render(<Header />);
    expect(screen.getByText("Role Manager")).toBeInTheDocument();
  });
});
