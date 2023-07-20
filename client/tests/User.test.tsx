import { logRoles, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Header from "../src/components/Header";
import Conter from "../src/components/Conter";
import Users from "../src/components/Users";

describe("User Group Functionalty And Render", () => {
  test("User Redner Success", async () => {
    // ARRANGE
    const { container } = render(<Users />);
    logRoles(container);
    const userHidden = await screen.getByRole("heading", {
      name: "Users",
    });
    expect(userHidden).toBeInTheDocument();
  });

  test("Mocking User InterCept Redner Success", async () => {
    // ARRANGE
    const { container } = render(<Users />);
    logRoles(container);
    const userHidden = await screen.getByRole("heading", {
      name: "Users",
    });
    expect(userHidden).toBeInTheDocument();
  });
});
