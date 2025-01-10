import { render } from "@testing-library/react"; // Correct import
import App from "./App"; // Assuming App is your component

test("should match snapshots", () => {
  const { container } = render(<App />); // Destructure to get the container
  expect(container).toMatchSnapshot(); // Create a snapshot of the rendered output
});
