import React from 'react';
import { execDefaultTests, getElementNodeProps } from '../../core/testUtil.js';
import Badge from './Badge';
import reactTestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

execDefaultTests(Badge);

describe('variant attr', () => {
  describe('when it is specified', () => {
    it('should add the dot variant class to it', () => {
      const badge = reactTestRenderer.create(<Badge variant='dot' />);
      expect(getElementNodeProps(badge).className).toContain('lb-badge--dot');
    });
  });

  describe('when it is specified', () => {
    it('should add the standard variant class to it', () => {
      const badge = reactTestRenderer.create(<Badge variant='standard' />);
      expect(getElementNodeProps(badge).className).toContain('lb-badge--standard');
    });
  });

  describe('when it is not specified', () => {
    it('should add the standard variant as default class to it', () => {
      const badge = reactTestRenderer.create(<Badge>100</Badge>);
      expect(getElementNodeProps(badge).className).toContain('lb-badge--standard');
    });
  });
});

describe('overlap attr', () => {
  describe('when it is specified', () => {
    it('should add the circular overlap class to it', () => {
      const badge = reactTestRenderer.create(<Badge overlap='circular' />);
      expect(getElementNodeProps(badge).className).toContain('lb-badge--overlap-circular');
    });
  });

  describe('when it is specified', () => {
    it('should add the rectangular overlap class to it', () => {
      const badge = reactTestRenderer.create(<Badge overlap='rectangular' />);
      expect(getElementNodeProps(badge).className).toContain('lb-badge--overlap-rectangular');
    });
  });

  describe('when it is not specified', () => {
    it('should add the rectangular overlap as default class to it', () => {
      const badge = reactTestRenderer.create(<Badge>100</Badge>);
      expect(getElementNodeProps(badge).className).toContain('lb-badge--overlap-rectangular');
    });
  });
});

describe('max attr', () => {
  describe('when it is specified', () => {
    it('should limit the display value according to the max config', () => {
      const badge = render(<Badge variant='standard' max={15}>16</Badge>);
      const value = badge.queryByText('15+');
      expect(value).not.toBeNull();

      const badge2 = render(<Badge variant='standard' max={20}>20</Badge>);
      const value2 = badge2.queryByText('20+');
      expect(value2).toBeNull();
    });

    it('should limit to 99 as default', () => {
      const badge = render(<Badge>100</Badge>);
      const value = badge.queryByText('99+');
      expect(value).not.toBeNull();

      const badge2 = render(<Badge>99</Badge>);
      const value2 = badge2.queryByText('99');
      expect(value2).not.toBeNull();
    });
  });
});

describe('value display', () => {
  describe('when dot variant is set', () => {
    it('should not display any value', () => {
      const badge = render(<Badge variant='dot'>10</Badge>);
      const value = badge.queryByText('10');
      expect(value).toBeNull();
    });
  });
  describe('when standard variant is set', () => {
    it('should display the text when it is not a number', () => {
      const badge = render(<Badge variant='standard'>Test</Badge>);
      const value = badge.queryByText('Test');
      expect(value).not.toBeNull();
    });

    it('should display the given number', () => {
      const badge = render(<Badge variant='standard'>10</Badge>);
      const value = badge.queryByText('10');
      expect(value).not.toBeNull();
    });

    it('should limit the number according to max config', () => {
      const badge = render(<Badge variant='standard' max={9}>10</Badge>);
      let value = badge.queryByText('9+');
      expect(value).not.toBeNull();
      value = badge.queryByText('10');
      expect(value).toBeNull();
    });
  });
});

describe('showZero attr', () => {
  describe('when showZero is true', () => {
    it('should display the badge even if the value is 0', () => {
      const badge = render(<Badge showZero>0</Badge>);
      const value = badge.getByText('0');
      expect(value).not.toHaveClass('lb-badge--invisible');
    });

    describe('when showZero is false', () => {
      it('should not display the badge even the value is 0', () => {
        const badge = render(<Badge>0</Badge>);
        const value = screen.getByText('0');
        expect(value).toHaveClass('lb-badge--invisible');
      });
    });
  });
});

describe('invisible attr', () => {
  describe('when invisible is false', () => {
    it('should display the badge', () => {
      const badge = render(<Badge>50</Badge>);
      const value = badge.getByText('50');
      expect(value).not.toHaveClass('lb-badge--invisible');
    });

    describe('when invisible is false', () => {
      it('should not display the badge', () => {
        const badge = render(<Badge invisible>50</Badge>);
        const value = screen.getByText('50');
        expect(value).toHaveClass('lb-badge--invisible');
      });
    });
  });
});