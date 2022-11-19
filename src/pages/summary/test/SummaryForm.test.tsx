import { getByText, render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from "@testing-library/user-event";

test("Checkbox enable/disable button", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });
  expect(button).toBeDisabled();
  expect(checkBox).not.toBeChecked();
  await user.click(checkBox);
  expect(button).toBeEnabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  //popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be deliver/i
  );
  expect(nullPopover).not.toBeInTheDocument();

  //popover appears on mouseover of checkbox label
  const termsAndConditions = screen.getByText(
    /I agree to Terms and Conditions/i
  );
  await user.hover(termsAndConditions);
  const popover = screen.getByPlaceholderText("no ice cream");
  expect(popover).toBeInTheDocument();
  //popover disable when mouse goes out

  await user.unhover(termsAndConditions);
  const nonpopoveragain = screen.queryByPlaceholderText(/no ice creama/);
  expect(nonpopoveragain).not.toBeInTheDocument();
});
