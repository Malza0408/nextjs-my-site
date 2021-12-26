import About from "@/components/About";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const AboutRender = () => {
  return (
    <ThemeProvider theme={theme}>
      <About />
    </ThemeProvider>
  );
};

describe("About", () => {
  it("Abount Render", () => {
    const { container } = render(<AboutRender />);
    expect(container).toHaveTextContent(/About Me/i);
  });
});
