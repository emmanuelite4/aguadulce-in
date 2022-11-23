import { render, screen } from "../../testutils";
import { MemberAccountInfo } from "./Member";

describe("MemberAccountInfo / ", function () {
  it("", () => {
    render(<MemberAccountInfo address={"1"} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Account Address")).toBeInTheDocument();
  });
});
