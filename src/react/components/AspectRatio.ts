// [@celement/cli] THIS FILE IS AUTO GENERATED - SEE `celement.config.ts`

import '../../define/vds-aspect-ratio.ts';
import * as React from 'react';
import { createComponent } from './createComponent';
import { AspectRatioElement } from '../../ui/aspect-ratio';

const EVENTS = {} as const;

/** This element creates a container that will hold the dimensions of the desired aspect ratio. This
container is useful for reserving space for media (img, video, etc.) as it loads over the
network.

💡  If your browser matrix supports the
[`aspect-ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio) CSS property
then you can skip using this component, and set the desired aspect ratio directly on the
element.

💡 By default it respects the browser's default width and height for media. This is not specific
to the loaded media but instead a general setting of `1:2`. */
const AspectRatio = createComponent(
  React,
  'vds-aspect-ratio',
  AspectRatioElement,
  EVENTS,
  'AspectRatio'
);

export default AspectRatio;
