import { render } from "@testing-library/react";
import { Button } from "../button";

describe("Button", () => {
  it("should render default", () => {
    const result = render(<Button>hi</Button>);
    expect(result.container).toMatchSnapshot();
  });

  it("should render destructive", () => {
    const result = render(<Button variant="destructive">hi</Button>);
    expect(result.container).toMatchSnapshot();
  });
});
