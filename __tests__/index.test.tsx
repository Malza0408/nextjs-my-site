import { render } from "@testing-library/react";
import Home from "@pages/index";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import { NextPage } from "next";

const HomeRender: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

describe("index", () => {
  it("Home Render", () => {
    const { container } = render(<HomeRender />);

    expect(container).toHaveTextContent(/Malza's Home/i);
  });
});
