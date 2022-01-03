import MyWork from "@/components/MyWork/MyWork";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import { render } from "@testing-library/react";

const MyWorkRender = () => {
  return (
    <ThemeProvider theme={theme}>
      <MyWork />
    </ThemeProvider>
  );
};

describe("MyWork", () => {
  it("MyWrok Render", () => {
    const { container } = render(<MyWorkRender />);
    expect(container).toHaveTextContent(/My work/i);
  });
  it("Count Btns", () => {
    const { getAllByRole } = render(<MyWorkRender />);
    const buttons = getAllByRole("button");
    expect(buttons).toHaveLength(4);
  });
});
