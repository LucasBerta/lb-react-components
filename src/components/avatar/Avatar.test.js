import React from 'react';
import { render } from '@testing-library/react';
import TestRenderer from 'react-test-renderer';
import Avatar from './Avatar.js';
import { execDefaultTests } from '../../core/TestUtil.js';

const imgAltText = 'Avatar image';
const imgSrc = '`https://www.ligue1.com/-/media/Project/LFP/Ligue1-COM/Images/Articles-Assests/2021/10/01/Desktop_2122_UK_UCL_PSG_City_Messi_roar_celebs.jpg?h=1035&la=en&w=2000&hash=EE16DED64C18B6D2291B4FA7870BDE3D`';

execDefaultTests(Avatar);

describe('When no component attr specified', () => {
  it('should render an image when src attr is specified', () => {
    const avatar = render(<Avatar src={imgSrc} />);
    const img = avatar.getByAltText(imgAltText);
    expect(img).toHaveAttribute('src', imgSrc);
  });
});

describe('When component attr specified', () => {
  it('should not render the img element', () => {
    const avatar = render(<Avatar src={imgSrc}><h1>My Avatar</h1></Avatar>);
    const img = avatar.queryByAltText(imgAltText);
    expect(img).toBeNull();
  });

  it('should render the specified component', () => {
    const avatar = render(<Avatar src={imgSrc}><h1>My Avatar</h1></Avatar>);
    const component = avatar.getByText('My Avatar');
    expect(component).not.toBe(null);
  });
});

describe('When an attr is specified', () => {
  it('should attribute the given size', () => {
    let avatar = TestRenderer.create(<Avatar src={imgSrc} size="lg" />);
    let classes = avatar.toJSON().props.className;
    expect(classes).toContain('lb-avatar--lg');
    avatar = TestRenderer.create(<Avatar src={imgSrc} size="sm" />);
    classes = avatar.toJSON().props.className;
    expect(classes).toContain('lb-avatar--sm');
  });

  it('should attribute the given variant', () => {
    let avatar = TestRenderer.create(<Avatar src={imgSrc} variant="rounded" />);
    let classes = avatar.toJSON().props.className;
    expect(classes).toContain('lb-avatar--rounded');
    avatar = TestRenderer.create(<Avatar src={imgSrc} variant="square" />);
    classes = avatar.toJSON().props.className;
    expect(classes).toContain('lb-avatar--square');
  });
});