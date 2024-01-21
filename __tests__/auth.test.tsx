// tests/auth.test.jsx
import { render, fireEvent, waitFor } from "@testing-library/react";
import { signIn } from "next-auth/react";
import Home from "@/app/page";

// Mock the signIn function from NextAuth
jest.mock("next-auth/react", () => ({
  ...jest.requireActual("next-auth/react"),
  signIn: jest.fn(() => Promise.resolve({ ok: true })),
}));

describe("NextAuth Authentication Flow", () => {
  it("should sign in the user when correct credentials are provided", async () => {
    const { getByText } = render(<Home />);

    // Assume you have a button with text 'Continue with Google'
    const signInButton = getByText("Continue with Google");

    // Simulate clicking the sign-in button
    fireEvent.click(signInButton);

    // Wait for the signIn function to be called
    await waitFor(() => {
      expect(signIn).toHaveBeenCalled();
    });

    // Check that the signIn function was called with the correct parameters
    expect(signIn).toHaveBeenCalledWith("google", { callbackUrl: "/app" });
  });
});
