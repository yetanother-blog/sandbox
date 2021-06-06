import 'prismjs';
import 'prismjs/plugins/file-highlight/prism-file-highlight.js';

import { previewHtml, previewCss, previewJs, result } from './constants';
import { initNavigation } from './navigation/navigation';

export function initSandbox() {
  const params = new URLSearchParams(document.location.search.substring(1));
  const decodedUrl = params.get('url');
  const url = decodeURIComponent(decodedUrl);

  result.src = url;
  previewHtml.dataset.src = `${url}/index.html`;
  previewCss.dataset.src = `${url}/styles.css`;
  previewJs.dataset.src = `${url}/main.js`;
}

initNavigation();
initSandbox();
