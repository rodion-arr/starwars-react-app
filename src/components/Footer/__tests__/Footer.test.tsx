import {render} from "@testing-library/react";
import {Footer} from "../Footer";

describe('Footer', () => {
  it('should render correctly', function () {
    const {container} = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
