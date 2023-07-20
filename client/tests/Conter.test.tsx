import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";
import Conter from "../src/components/Conter";

describe("Conter Group Functionalty And Render", () => {
  test("Conter Redner Success", async () => {
    // ARRANGE
    const { container } = render(<Conter />);
    // ACT
    // logRoles(container);
    // const el = await screen.getByText("In");
    const el = await screen.getByRole("button", {
      name: "Increment",
    });
    // ASSERT !
    expect(el).toBeInTheDocument();
  });

  test("Check Defualt Value To Counter", async () => {
    // ARRANGE
    const { container } = render(<Conter />);
    // ACT
    // logRoles(container);
    // const el = await screen.getByText("In");
    const el = await screen.getByRole("button", {
      name: "Increment",
    });
    // ASSERT !
    // userEvent.cl
    const conter = await screen.getByRole("heading");
    expect(conter).toHaveTextContent("0");
  });

  test("Increment Functionalty ", async () => {
    // ARRANGE
    const { container } = render(<Conter />);
    // ACT
    // logRoles(container);
    // const el = await screen.getByText("In");
    const el = await screen.getByRole("button", {
      name: "Increment",
    });
    // ASSERT !
    const conter = await screen.getByRole("heading");
    await userEvent.click(el);
    expect(conter).toHaveTextContent("1");
  });
});
