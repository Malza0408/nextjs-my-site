import Main from "@/components/Main";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const onClickContactBtn = jest.fn();

const MainRender = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main onClickContactBtn={onClickContactBtn} />
    </ThemeProvider>
  );
};

describe("Main", () => {
  it("Main Render", () => {
    const { container } = render(<MainRender />);
    expect(container).toHaveTextContent(/Hello/i);
  });

  it("Btn render", () => {
    const { getByRole } = render(<MainRender />);
    const btn = getByRole("button");
    expect(btn).toHaveTextContent(/Contact me/i);
  });

  it("Click the Contact Btn", () => {
    render(<MainRender />);
    userEvent.click(screen.getByText(/Contact/i));
    expect(onClickContactBtn).toBeCalledTimes(1);
  });
});
