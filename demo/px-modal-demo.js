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
/* Common imports */
/* Common demo imports */
/* Imports for this component */
/* Demo DOM module */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-demo/px-demo-header.js';
import 'px-demo/px-demo-api-viewer.js';
import 'px-demo/px-demo-footer.js';
import 'px-demo/px-demo-configs.js';
import 'px-demo/px-demo-props.js';
import 'px-demo/px-demo-interactive.js';
import 'px-demo/px-demo-component-snippet.js';
import 'px-demo/css/px-demo-content-helper-styles.js';
import '../px-modal.js';
import '../px-modal-trigger.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
Polymer({
  _template: html`
    <style include="px-demo-content-helper-styles"></style>
    <!-- Header -->
    <px-demo-header module-name="px-modal" description="Modals are useful when a user needs to leave the normal application flow to focus on a specific message or workflow. Avoid using modals frequently or stacking modals." mobile="" tablet="" desktop="">
    </px-demo-header>

    <!-- Interactive -->
    <px-demo-interactive>
      <!-- Configs -->
      <px-demo-configs slot="px-demo-configs" configs="[[configs]]" props="{{props}}" chosen-config="{{chosenConfig}}"></px-demo-configs>

      <!-- Props -->
      <px-demo-props slot="px-demo-props" props="{{props}}" config="[[chosenConfig]]"></px-demo-props>

      <!-- Component ---------------------------------------------------------->
      <px-demo-component slot="px-demo-component">
        <div id="demoContainer">
          <px-modal id="demoModal" header-text="{{props.headerText.value}}" body-text="{{props.bodyText.value}}" accept-text="{{props.acceptText.value}}" reject-text="{{props.rejectText.value}}" hide-accept-button="{{props.hideAcceptButton.value}}" hide-reject-button="{{props.hideRejectButton.value}}" open-trigger="[[openTrigger]]" fill-container="{{props.fillContainer.value}}">
          </px-modal>
          <px-modal-trigger trigger="{{openTrigger}}">
            <button class="btn btn--tertiary">Open Modal</button>
          </px-modal-trigger>
        </div>
      </px-demo-component>
      <!-- END Component ------------------------------------------------------>

      <px-demo-component-snippet slot="px-demo-component-snippet" element-properties="{{props}}" links-includes="[&quot;px-modal/px-modal-trigger.html&quot;]" element-name="px-modal">
      </px-demo-component-snippet>
    </px-demo-interactive>

    <!-- API Viewer -->
    <px-demo-api-viewer source="px-modal"></px-demo-api-viewer>

    <!-- Footer -->
    <px-demo-footer></px-demo-footer>
`,

  is: 'px-modal-demo',

  observers: [
    'updateFitInto(props.fillContainer.value)'
  ],

  properties: {

    props: {
      type: Object,
      value: function(){ return this.demoProps; }
    },

    configs: {
      type: Array,
      value: function(){
        return [
          { configName: "Default" }
        ]
      }
    }
  },

  demoProps: {
    headerText: {
      type: String,
      defaultValue: 'Confirm delete',
      inputType: 'text'
    },

    bodyText: {
      type: String,
      defaultValue: 'Do you want to delete this record? The record will be deleted permanently.',
      inputType: 'text'
    },

    acceptText: {
      type: String,
      defaultValue: 'Delete Record',
      inputType: 'text'
    },

    rejectText: {
      type: String,
      defaultValue: 'Cancel',
      inputType: 'text'
    },

    fillContainer: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    hideAcceptButton: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },
    
    hideRejectButton: {
      type: Boolean,
      defaultValue: false,
      inputType: 'toggle'
    },

    openTrigger: {
      type: String,
      value: '[[trigger]]'
    },

    siblingElement: {
      type: String,
      defaultValue: '<px-modal-trigger trigger="{{trigger}}"><button class="btn btn--tertiary">Open Modal</button></px-modal-trigger>'
    }

  },

  updateFitInto(fillContainer) {
    var modal = this.$.demoModal;
    if(fillContainer === true) {
      var demoInteractive = this.$$('px-demo-interactive'),
          container = dom(demoInteractive.root).querySelector('.demo-component-container');
      modal.set('fitInto', container);
      modal.refit();
    }
    else {
      modal.set('fitInto', window);
      modal.refit();
    }
  }
});
