# px-modal [![Build Status](https://travis-ci.org/predixdesignsystem/px-modal.svg?branch=master)](https://travis-ci.org/predixdesignsystem/px-modal)

## Overview

`Px-modal` is a Predix UI component which opens a modal window that overlays the page.

## Usage

### Prerequisites
1. node.js
2. npm
3. bower
4. [webcomponents-lite.js polyfill](https://github.com/webcomponents/webcomponentsjs)

Node, npm, and bower are necessary to install the component and dependencies. webcomponents.js adds support for web components and custom elements to your application.

### Getting Started

First, install the component via bower on the command line:

```
bower install https://github.com/predixdesignsystem/px-modal.git --save
```

Second, import the component to your application with the following tag in your head:

```
<link rel="import" href="/bower_components/px-modal/px-modal.html"/>
```

Finally, use the component in your application:

#### Examples

```
<px-modal
    header-text="Confirm delete"
    body-text="Do you want to delete this record? The record will be deleted permanently."
    accept-text="Permanently Delete Record"
    reject-text="Cancel"
    opened>
</px-modal>
```

## Documentation

Read the full API and view the demo [here](https://www.predix-ui.com/#/elements/px-modal).

### Local Development
From the component's directory...

```
$ npm install
$ bower install
$ gulp sass
```

### API and examples

From the component's directory

```
$ gulp serve
```

Starts a local server. Navigate to the root of that server (e.g. http://localhost:8080/) in a browser to open the API documentation page, with link to the "Demo" / working examples.


### GE Coding Style Guide
[GE JS Developer's Guide](https://github.com/GeneralElectric/javascript)

<br />
<hr />

## Known Issues

Please use [Github Issues](https://github.com/predixdesignsystem/px-modal/issues) to submit any bugs you might find.
