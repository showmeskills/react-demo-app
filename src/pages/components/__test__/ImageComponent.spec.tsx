import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ImageComponent from "../ImageComponent";

const defaultProps = {
  src: "https://example.com/image.jpg",
  alt: "Example image",
  size: { width: "100px", height: "100px", objectFit: "cover" },
};

describe("ImageComponent", () => {
  it("renders the image with correct src and alt attributes", () => {
    render(<ImageComponent {...defaultProps} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", defaultProps.src);
    expect(imgElement).toHaveAttribute("alt", defaultProps.alt);
  });

  it("applies the correct styles based on the size prop", () => {
    render(<ImageComponent {...defaultProps} />);

    const imgElement = screen.getByRole("img");

    expect(imgElement).toHaveStyle("width: 100px");
    expect(imgElement).toHaveStyle("height: 100px");
  });
});
