import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import reactTestRenderer from 'react-test-renderer';
import { execDefaultTests, getElementNodeProps } from '../../core/TestUtil';

execDefaultTests(Button);

describe('fullWidth attr', () => {
  describe('When it is specified', () => {
    it('should add a specific class to it', () => {
      const button = reactTestRenderer.create(<Button fullWidth>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--full-width');
    });
  });

  describe('When it is not specified', () => {
    it('should not add the fullWidth class to it', () => {
      const button = reactTestRenderer.create(<Button>Click me</Button>);
      expect(getElementNodeProps(button).className).not.toContain('lb-button--full-width');
    });
  });
});

describe('size attr', () => {
  describe('When it is specified', () => {
    it('should add the sm class to it', () => {
      const button = reactTestRenderer.create(<Button size='sm'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--sm');
    });

    it('should add the md class to it', () => {
      const button = reactTestRenderer.create(<Button size='md'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--md');
    });

    it('should add the lg class to it', () => {
      const button = reactTestRenderer.create(<Button size='lg'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--lg');
    });
  });

  describe('When it is not specified', () => {
    it('should add the md class to it as default', () => {
      const button = reactTestRenderer.create(<Button>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--md');
    });
  });
});

describe('variant attr', () => {
  describe('when it is specified', () => {
    it('should add the contained class to it', () => {
      const button = reactTestRenderer.create(<Button variant='contained'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--contained');
    });

    it('should add the outlined class to it', () => {
      const button = reactTestRenderer.create(<Button variant='outlined'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--outlined');
    });

    it('should add the text class to it', () => {
      const button = reactTestRenderer.create(<Button variant='text'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--text');
    });
  });

  describe('when it is not specified', () => {
    it('should add the text class to it as default', () => {
      const button = reactTestRenderer.create(<Button variant='text'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--text');
    });
  });
});

describe('color attr', () => {
  describe('when it is specified', () => {
    it('should add the primary class to it', () => {
      const button = reactTestRenderer.create(<Button color='primary'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--primary');
    });

    it('should add the accent class to it', () => {
      const button = reactTestRenderer.create(<Button color='accent'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--accent');
    });

    it('should add the success class to it', () => {
      const button = reactTestRenderer.create(<Button color='success'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--success');
    });

    it('should add the info class to it', () => {
      const button = reactTestRenderer.create(<Button color='info'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--info');
    });
  });

  describe('when it is not specified', () => {
    it('should add the primary class to it as default', () => {
      const button = reactTestRenderer.create(<Button color='primary'>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--primary');
    });
  });
});

describe('circular attr', () => {
  describe('when it is specified', () => {
    it('should add the circular class to it', () => {
      const button = reactTestRenderer.create(<Button circular>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--circular');
    });
  });

  describe('when it is not specified', () => {
    it('should not add the circular class to it', () => {
      const button = reactTestRenderer.create(<Button>Click me</Button>);
      expect(getElementNodeProps(button).className).not.toContain('lb-button--circular');
    });
  });
});

describe('disabled attr', () => {
  describe('when it is specified', () => {
    it('should add the disabled class to it', () => {
      const button = reactTestRenderer.create(<Button disabled>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--disabled');
    });
  });

  describe('when it is not specified', () => {
    it('should not add the disabled class to it', () => {
      const button = reactTestRenderer.create(<Button>Click me</Button>);
      expect(getElementNodeProps(button).className).not.toContain('lb-button--disabled');
    });
  });
});

describe('staticButton attr', () => {
  describe('when it is specified', () => {
    it('should add the staticButton class to it', () => {
      const button = reactTestRenderer.create(<Button staticButton>Click me</Button>);
      expect(getElementNodeProps(button).className).toContain('lb-button--static');
    });
  });

  describe('when it is not specified', () => {
    it('should not add the staticButton class to it', () => {
      const button = reactTestRenderer.create(<Button>Click me</Button>);
      expect(getElementNodeProps(button).className).not.toContain('lb-button--static');
    });
  });
});

describe('When an onClick fn is given', () => {
  it('should call the given fn as a callback on click event', () => {
    const fn = jest.fn(() => 'It works!');
    const r = render(<Button onClick={fn}>Click me</Button>);
    const button = r.getByText('Click me');
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });

  it('should not call the given fn when button is disabled', () => {
    const fn = jest.fn(() => 'It works!');
    const r = render(<Button onClick={fn} disabled>Click me</Button>);
    const button = r.getByText('Click me');
    fireEvent.click(button);
    expect(fn).not.toHaveBeenCalled();
  });
});