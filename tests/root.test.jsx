import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Root from "../src/routes/root";
import { CartProvider } from "../src/context/CartContext";
import { BrowserRouter } from "react-router-dom";

describe("Root Component", () => {
  it("renders correct nav and footer", () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <Root />
        </CartProvider>
      </BrowserRouter>,
    );
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
  });
});
