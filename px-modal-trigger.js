/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/**
Creates a wrapper around an HTML element that users can tap to show
a `<px-modal>`. Pass any content into the `<px-modal-trigger>` tag and data-bind
the element's `trigger` property to the modal's `openTrigger` property.

### Usage

    <px-modal open-trigger="[[openTrigger]]"></px-modal>
    <px-modal-trigger trigger="{{openTrigger}}">
      <button>Open Modal</button>
    </px-modal-trigger>

@element px-modal-trigger
@blurb Wraps a trigger button to open a px-modal
@homepage index.html
@demo index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './css/px-modal-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <slot></slot>
`,

  is: 'px-modal-trigger',

  properties: {
    /**
     * Reference to the HTML element wrapping around the user-tappable
     * content. Makes it easy to data-bind a tappable element to the
     * px-modal `openTrigger` property.
     */
    trigger: {
      type: HTMLElement,
      notify: true
    }
  },

  ready() {
    this.trigger = this;
  }
});
