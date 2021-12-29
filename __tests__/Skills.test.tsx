import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Skills from "@/components/Skills/Skills";

const SkillsRender = () => {
  return (
    <ThemeProvider theme={theme}>
      <Skills />
    </ThemeProvider>
  );
};

describe("Skills", () => {
  it("Skills Render", () => {
    const { container } = render(<SkillsRender />);
    expect(container).toHaveTextContent(/Skills & Attributes/i);
  });
});
