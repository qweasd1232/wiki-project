/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '@site/src/components/Highlight';
import Mindmap from '@theme/Mindmap';
// import Admonition from '@site/src/components/Admonition';

export default {
  ...MDXComponents,
  Highlight: Highlight,
  Mindmap: Mindmap,
  // Admonition: Admonition,
};
