import {render} from "@testing-library/react";
import {CharacteristicsTable} from "../CharacteristicsTable";

describe('CharacteristicsTable', () => {
  it('should render correctly', function () {
    const {container} = render(<CharacteristicsTable rows={{
      'test': 'value',
      'test2': 'value2',
    }} />);

    expect(container).toMatchSnapshot();
  });

  it('should not render on empty rows', function () {
    const {container} = render(<CharacteristicsTable rows={{}} />);

    expect(container).toMatchSnapshot();
  });
});
