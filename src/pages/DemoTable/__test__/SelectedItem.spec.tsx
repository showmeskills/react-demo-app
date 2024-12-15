import { render, screen, fireEvent, findAllByText } from "@testing-library/react";
import SelectedItem from "../SelectedItem";
import { SelectedItemProps } from "../../../interface/DemoTable/SelectedItem.interface";

describe("SelectedItem component", () => {
  const mockItem = {
    guid: "12345",
    properties: {
      propString: "Test Property",
      propNumber: 42,
      date: "2023-12-16",
    },
  } as any;

  it("should render tabs correctly", () => {
    render(<SelectedItem currentItem={mockItem} />);

    expect(screen.getByText("Properties")).toBeInTheDocument();
    expect(screen.getByText("Image")).toBeInTheDocument();
  });

  it("should display properties when 'Properties' tab is selected", () => {
    render(<SelectedItem currentItem={mockItem} />);

    expect(screen.getByText("Test Property")).toBeInTheDocument();
    expect(screen.getByText("42")).toBeInTheDocument();
    expect(screen.getByText("2023-12-16")).toBeInTheDocument();
  });

  it("should switch to image tab and display image", () => {
    render(<SelectedItem currentItem={mockItem} />);

    fireEvent.click(screen.getByText("Image"));

    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("should show 'No Selected Item' when currentItem is null", () => {
    render(<SelectedItem currentItem={null} />);

    expect(screen.findAllByText("No Selected Item")).toBeTruthy();
  });

  it("should handle missing properties gracefully", () => {
    const incompleteItem = { guid: "12345", properties: {} };

    render(<SelectedItem currentItem={incompleteItem} />);
    expect(screen.findAllByText("-")).toBeTruthy();
  });
});
