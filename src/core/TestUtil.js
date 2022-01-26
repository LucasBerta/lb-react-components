import { fireEvent, render } from "@testing-library/react";
import reactTestRenderer from "react-test-renderer";

export function execDefaultTests(Component) {
  describe('When a classname is given', () => {
    it('should add the given class to the component and keep the default classes', () => {
      const element = reactTestRenderer.create(<Component className="my-class">Custom classes</Component>)
      const classes = getElementNodeProps(element).className;
      expect(classes).toContain('my-class');
      expect(classes).toContain('lb-');
    });
  });

  describe('When a standard button attr event fn is given', () => {
    it('should call the fn when the event is fired', () => {
      const fn = jest.fn(() => 'It works!');
      const r = render(<Component onMouseEnter={fn}>Enter the cursor</Component>);
      const button = r.getByText('Enter the cursor');
      fireEvent.mouseEnter(button);
      expect(fn).toHaveBeenCalled();
    });
  });
}

export function getElementNodeProps(elementNode) {
  return elementNode.toJSON().props;
}