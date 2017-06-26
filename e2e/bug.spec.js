/* global describe, before, after, beforeEach, it, device, element, expect, by */

describe('ScrollView bug', () => {
  it('should scroll if the input is not focused', async () => {
    await device.reloadReactNative();
    await element(by.id('scrollContainer')).scrollTo('bottom');
  });

  it('should scroll also if the input is focused', async () => {
    await device.reloadReactNative();
    await element(by.id('input')).tap();
    await element(by.id('scrollContainer')).scrollTo('bottom');
  });
});
