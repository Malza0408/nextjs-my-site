import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import Navbar from "@pages/Navbar";

const NavbarRender = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
};

describe("Navbar", () => {
  it("Title render", () => {
    const { container } = render(<NavbarRender />);
    expect(container).toHaveTextContent(/Malza's Home/i);
  });
  it("List render", () => {
    const { getAllByRole, container } = render(<NavbarRender />);
    const lists = getAllByRole("list");
    expect(lists).toHaveLength(1);
    expect(container).toHaveTextContent(/Home/i);
  });
});
