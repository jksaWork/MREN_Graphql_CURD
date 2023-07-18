import { logRoles, render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";

test("Header - 1 Rednered Sueecc", async () => {
  // ARRANGE
  const { container } = render(<Header />);
  // ACT
  // logRoles(container);
  // await userEvent.click(screen.getByText("Load Greeting"));
  const el = await screen.getByText("Projects Mangement");
  // ASSERT !
  expect(el).toBeInTheDocument();
  // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  // expect(screen.getByRole("button")).toBeDisabled();
});
