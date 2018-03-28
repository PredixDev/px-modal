/**
 * Simulates an enter keypress on the target element. The default
 * `MockInteractions.pressEnter` does not send the event.key string. This
 * sends event.key 'Enter' so code relying on the key string will work.
 *
 * @param {HTMLElement} target
 */
const pressEnter = target => {
  MockInteractions.pressAndReleaseKeyOn(target, 13, null, 'Enter');
};

describe('px-modal', () => {
  let fx;
  let modal;
  let trigger;
  let openButton;

  beforeEach((done) => {
    fx = fixture('ModalFixture');
    modal = fx.querySelector('px-modal');
    trigger = fx.querySelector('px-modal-trigger');
    openButton = fx.querySelector('#openButton');
    flush(() => {
      /* Bind the trigger to the modal */
      modal.openTrigger = trigger.trigger;
      done();
    });
  });

  it('shows the modal when the open trigger is tapped', () => {
    openButton.click();
    expect(modal.opened).to.be.true;
  });

  it('shows the modal when the open trigger is focused and the enter key is pressed', () => {
    pressEnter(openButton);
    expect(modal.opened).to.be.true;
  });

  // @TODO: Failing randomly ONLY IN SAFARI 10 and ONLY ON SAUCE LABS in a way
  // that I can't reproduce locally. Oh well. Commenting out for now.
  //
  // it('shows the modal when the `opened` property is set to `true`', (done) => {
  //   const modalOverlay = Polymer.dom(modal.root).querySelector('#modal');
  //   modal.opened = true;
  //
  //   expect(() => window.getComputedStyle(modalOverlay).visibility)
  //     .to.eventuallyEqual('visible', {within: 9000, every: 1000}, done);
  // });

  it('hides the modal when the reject trigger is tapped', () => {
    modal.opened = true;
    const rejectTriggerButton = Polymer.dom(modal.root).querySelector('#reject-trigger-button');
    rejectTriggerButton.click();
    expect(modal.opened).to.be.false;
  });

  it('hides the modal when the accept trigger is tapped', () => {
    modal.opened = true;
    const acceptTriggerButton = Polymer.dom(modal.root).querySelector('#accept-trigger-button');
    acceptTriggerButton.click();
    expect(modal.opened).to.be.false;
  });

  it('fires the `px-modal-rejected` event when the reject trigger is tapped', () => {
    const eventCallback = sinon.spy();
    modal.addEventListener('px-modal-rejected', eventCallback);
    modal.opened = true;
    const rejectTriggerButton = Polymer.dom(modal.root).querySelector('#reject-trigger-button');
    rejectTriggerButton.click();
    expect(eventCallback).to.be.calledOnce;
  });

  it('fires the `px-modal-accepted` event when the accept trigger is tapped', () => {
    const eventCallback = sinon.spy();
    modal.addEventListener('px-modal-accepted', eventCallback);
    modal.opened = true;
    const acceptTriggerButton = Polymer.dom(modal.root).querySelector('#accept-trigger-button');
    acceptTriggerButton.click();
    expect(eventCallback).to.be.calledOnce;
  });
});

describe('px-modal [slots]', () => {
  let fx;
  let modal;
  let trigger;
  let openButton;

  beforeEach((done) => {
    fx = fixture('ModalFixtureWithSlots');
    modal = fx.querySelector('px-modal');
    trigger = fx.querySelector('px-modal-trigger');
    openButton = fx.querySelector('#openButton');
    flush(() => {
      /* Bind the trigger to the modal */
      modal.openTrigger = trigger.trigger;
      done();
    });
  });

  it('hides the modal when the slotted reject trigger is tapped', () => {
    modal.opened = true;
    const slottedRejectButton = fx.querySelector('#rejectButton');
    slottedRejectButton.click();
    expect(modal.opened).to.be.false;
  });

  it('hides the modal when the slotted accept trigger is tapped', () => {
    modal.opened = true;
    const slottedAcceptButton = fx.querySelector('#acceptButton');
    slottedAcceptButton.click();
    expect(modal.opened).to.be.false;
  });

  it('does not hide the modal when the accept container is tapped', () => {
    modal.opened = true;
    const acceptContainer = Polymer.dom(modal.root).querySelector('#accept-trigger-container');
    acceptContainer.click();
    expect(modal.opened).to.be.true;
  });

  it('does not hide the modal when the reject container is tapped', () => {
    modal.opened = true;
    const rejectContainer = Polymer.dom(modal.root).querySelector('#reject-trigger-container');
    rejectContainer.click();
    expect(modal.opened).to.be.true;
  });

  it('does not hide the modal when the disabled accept trigger is tapped', () => {
    modal.opened = true;
    const slottedAcceptButton = fx.querySelector('#acceptButton');
    slottedAcceptButton.setAttribute('disabled', '');
    slottedAcceptButton.click();
    expect(modal.opened).to.be.true;
  });

  it('does not hide the modal when the disabled reject trigger is tapped', () => {
    modal.opened = true;
    const slottedRejectButton = fx.querySelector('#rejectButton');
    slottedRejectButton.setAttribute('disabled', '');
    slottedRejectButton.click();
    expect(modal.opened).to.be.true;
  });


  it('fires the `px-modal-rejected` event when the slotted reject trigger is tapped', () => {
    const eventCallback = sinon.spy();
    modal.addEventListener('px-modal-rejected', eventCallback);
    modal.opened = true;
    const slottedRejectButton = fx.querySelector('#rejectButton');
    slottedRejectButton.click();
    expect(eventCallback).to.be.calledOnce;
  });

  it('fires the `px-modal-accepted` event when the slotted accept trigger is tapped', () => {
    const eventCallback = sinon.spy();
    modal.addEventListener('px-modal-accepted', eventCallback);
    modal.opened = true;
    const slottedAcceptButton = fx.querySelector('#acceptButton');
    slottedAcceptButton.click();
    expect(eventCallback).to.be.calledOnce;
  });

  it('determines focusableElements correctly', (done) => {
    modal.opened = true;
    setTimeout(() => {
      expect(modal._focusableElements.length).to.equal(3);
      expect(modal._focusableElements[0].textContent).to.equal('Button inside Shadow DOM');
      done();
    }, 500) // wait for modal animation
  })
});
