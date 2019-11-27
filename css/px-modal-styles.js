const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="px-modal-styles">
<template>
<style>
@charset "UTF-8";/*! normalize.css v3.0.2 | MIT License | git.io/normalize */.heading--subsection,.label{letter-spacing:var(--px-headings-letter-spacing,.3px)}.btn,.truncate{white-space:nowrap}html{background-color:var(--px-base-background-color,#fff);font-size:15px;overflow-y:scroll;min-height:100%;box-sizing:border-box}:host,html{color:var(--px-base-text-color,#2c404c);line-height:1.33333;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}body,figure{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}address,blockquote,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,ol,p,pre,table,ul{margin-bottom:1rem}li>ol,li>ul{margin-bottom:0}dd,ol,ul{margin-left:2rem}img{max-width:100%;border:0}svg:not(:root){overflow:hidden}hr{box-sizing:content-box;height:0}pre{overflow:auto}*,:after,:before{box-sizing:inherit}a{background-color:transparent}a:link,a:visited{color:#007acc}a:hover{color:#005c99}a:active{color:#003d66}a:active,a:hover{outline:0}.float--right{float:right!important}.float--left{float:left!important}.float--none{float:none!important}.text--left{text-align:left!important}.text--center{text-align:center!important}.proceed,.text--right{text-align:right!important}.full-height{height:100%!important}.informative{cursor:help!important}.pointer{cursor:pointer!important}.muted{opacity:.5!important}.caps{text-transform:uppercase!important}.heading--section,.heading--subsection,.label{text-transform:uppercase}.hidden{display:none!important;visibility:hidden}.a11y,.visuallyhidden{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}.a11y.focusable:active,.a11y.focusable:focus,.visuallyhidden.focusable:active,.visuallyhidden.focusable:focus{position:static;overflow:visible;width:auto;height:auto;margin:0;clip:auto}@media screen and (min-width:45em) and (max-width:63.9375em){.a11y-lap,.visuallyhidden-lap{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (max-width:63.9375em){.a11y-portable,.visuallyhidden-portable{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (max-width:44.9375em){.a11y-palm,.visuallyhidden-palm{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (min-width:45em){.a11y-lap-and-up,.visuallyhidden-lap-and-up{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (min-width:64em){.a11y-desk,.a11y-desk-and-up,.visuallyhidden-desk,.visuallyhidden-desk-and-up{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media screen and (min-width:120em){.a11y-large-and-up,.visuallyhidden-large-and-up{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}@media (-webkit-min-device-pixel-ratio:2),(min-resolution:192dpi),(min-resolution:2dppx){.a11y-retina,.visuallyhidden-retina{position:absolute!important;overflow:hidden!important;width:1px!important;height:1px!important;margin:-1px!important;border:0!important;padding:0!important;clip:rect(0 0 0 0)!important}}.invisible{visibility:hidden!important}.truncate{overflow:hidden;text-overflow:ellipsis}.btn,.modal__box{overflow:visible}.alpha{font-size:5rem;line-height:1.06667;font-weight:400}.beta{font-size:4rem;line-height:1;font-weight:400}.delta,.gamma{line-height:1.33333;font-weight:400}.gamma{font-size:3rem}.delta{font-size:2rem}.epsilon{font-size:1.33333rem;line-height:1;font-weight:400}.zeta{font-size:.8rem;line-height:1.66667;font-weight:400}.heading--page{font-size:2rem;line-height:1.33333;color:var(--px-headings-heading-page-color,#2c404c)}.heading--section{font-size:1.33333rem;line-height:1;color:var(--px-headings-heading-section-color,#677e8c)}.heading--subsection{font-size:1rem;line-height:1.33333;color:var(--px-headings-heading-subsection-color,#2c404c);background-color:var(--px-headings-heading-subsection-background,rgba(136,154,165,.15));display:flex;padding-left:5px;padding-right:5px}.label{font-size:.8rem;line-height:1.66667;color:var(--px-headings-label-color,#677e8c)}.value{font-size:1rem;line-height:1.33333;color:var(--px-headings-value-color,#2c404c)}.btn{display:inline-block;height:var(--px-btn-height,2em);min-width:var(--px-btn-min-width,4.66667em);margin:0;border:1px solid var(--px-btn-border-color,transparent);border-radius:0!important;padding:0 calc(var(--px-btn-height,2em)/ 2);box-shadow:var(--px-btn-shadow--light,none);font:inherit;line-height:calc(var(--px-btn-height,2em) - 2px);-webkit-font-smoothing:antialiased;cursor:pointer;text-align:center;text-decoration:none;text-transform:none;background-color:var(--px-btn-background,#d8e0e5);transition:background .4s,border-color .4s,color .4s}.btn,.btn:active,.btn:hover,.btn:link,.btn:visited{color:var(--px-btn-color,#2c404c)}.btn:focus,.btn:hover{border-color:var(--px-btn-border-color--hover,transparent);box-shadow:var(--px-btn-shadow,none);background-color:var(--px-btn-background--hover,#a3b5bf)}.btn:active{border-color:var(--px-btn-border-color--pressed,transparent);box-shadow:none;background-color:var(--px-btn-background--pressed,#889aa5);outline:0}@-moz-document url-prefix(){.btn:not(button){line-height:1.8em}}button.btn{-webkit-appearance:button}.btn+.btn{margin-left:.66667rem}.btn--call-to-action{border-color:var(--px-btn-call-to-action-border-color,transparent);box-shadow:var(--px-btn-shadow,none);background-color:var(--px-btn-call-to-action-background,#007acc)}.btn--call-to-action,.btn--call-to-action:active,.btn--call-to-action:hover,.btn--call-to-action:link,.btn--call-to-action:visited{color:var(--px-btn-call-to-action-color,#fff)}.btn--call-to-action:focus,.btn--call-to-action:hover{background-color:var(--px-btn-call-to-action-background--hover,#005c99)}.btn--call-to-action:active{background-color:var(--px-btn-call-to-action-background--pressed,#003d66)}.btn--disabled,.btn--disabled:active,.btn--disabled:focus,.btn--disabled:hover,.btn--disabled:link,.btn--disabled:visited,.btn[disabled],.btn[disabled]:active,.btn[disabled]:focus,.btn[disabled]:hover,.btn[disabled]:link,.btn[disabled]:visited{color:var(--px-btn-disabled-color,rgba(0,0,0,.2));border:1px solid;border-color:var(--px-btn-disabled-border-color,rgba(0,0,0,.2));box-shadow:none;background-color:var(--px-btn-disabled-background,transparent);pointer-events:none}.shadow-component{box-shadow:0 1px 1px var(--px-shadow-component,rgba(0,0,0,.2))}.shadow-temporary{box-shadow:0 1px 3px var(--px-shadow-temporary,rgba(0,0,0,.2))}.shadow-navigation{box-shadow:0 2px 4px var(--px-shadow-navigation,rgba(0,0,0,.2))}.shadow-notification{box-shadow:0 4px 8px var(--px-shadow-notification,rgba(0,0,0,.2))}.shadow-modal{box-shadow:0 6px 12px var(--px-shadow-modal,rgba(0,0,0,.2))}:host{/*! Comment to prevent cssmin munging this rule with html above and borking Safari */box-sizing:border-box;width:100%;height:100%;pointer-events:none;z-index:var(--px-modal-z-index,1200)}.modal{position:fixed;top:0;right:0;bottom:0;left:0;visibility:hidden;background-color:transparent;opacity:0;transition:background-color .3s cubic-bezier(.78,.13,.16,.87),visibility .3s cubic-bezier(.78,.13,.16,.87),opacity .3s cubic-bezier(.78,.13,.16,.87)}@media screen and (max-width:44.9375em){.modal{position:initial;width:100%;height:100%}}:host([opened])>.modal{visibility:visible;background-color:var(--px-modal-overlay-color,rgba(0,0,0,.65));opacity:1;pointer-events:auto}:host([fill-container])>.modal{position:initial;width:100%;height:100%}.modal__box{position:fixed;top:50%;left:50%;flex-direction:column;justify-content:space-between;transform:translate(-50%,-50%);max-height:calc(100% - 2rem);max-width:calc(100% - 2rem);overflow-y:auto;white-space:normal;word-wrap:break-word;background-color:var(--px-modal-background-color,#fff);color:var(--px-modal-text-color,#000)}@media screen and (min-width:45em){.modal__box{min-width:26.66667rem}}:host([fill-container]) .modal__box{position:initial;transform:initial;height:100%;width:100%;max-height:100%;max-width:100%;overflow:auto;box-shadow:none;background-color:var(--px-modal-background-color--container,#fff);color:var(--px-modal-text-color--container,#000)}.modal__header__text{display:block;padding:1.33333rem}@media screen and (max-width:44.9375em){.modal__box{position:initial;transform:initial;height:100%;width:100%;max-height:100%;max-width:100%;box-shadow:none}.modal__header__text{text-align:center;box-shadow:0 2px 4px var(--px-shadow-navigation,rgba(0,0,0,.2))}}:host([fill-container]) .modal__header__text{padding:2rem}.modal__body__text{display:block;padding:0 1.33333rem;max-height:calc(100vh - 10rem);overflow:auto}@media screen and (max-width:44.9375em){.modal__body__text{padding:1.33333rem}}:host([fill-container]) .modal__body__text{padding:2rem}.modal__triggers{display:flex;flex-shrink:0;justify-content:flex-end;padding:1.33333rem}@media screen and (max-width:44.9375em){.modal__triggers{justify-content:space-between;box-shadow:0 -2px 4px var(--px-shadow-navigation,rgba(0,0,0,.2));background-color:var(--px-modal-contrast-background-color,#ebeff2)}}:host([fill-container]) .modal__triggers{box-shadow:0 -2px 4px var(--px-shadow-navigation,rgba(0,0,0,.2));padding:2rem;flex:0 0 auto}.modal__reject-trigger{flex-shrink:0}.modal__accept-trigger{flex-shrink:0;margin-left:1rem}
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

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
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;