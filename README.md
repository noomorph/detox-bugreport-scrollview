# detox-bugreport-scrollview

**Software**: MacOS Sierra 10.12.6, XCode 9.20, Node 8.11.1 LTS

**Steps to run the project**:

```bash
yarn
yarn start # in the first terminal tab
yarn test  # in the second terminal tab
```

**NOTE:** make sure that `Simulator > Hardware > Keyboard > Connect Hardware Keyboard` is disabled.

Illustrates that `<ScrollView />` does not `.scrollTo('bottom')` when input is focused (there is an on-screen keyboard turned on).

Look at the second test in suite here:

https://github.com/noomorph/detox-bugreport-scrollview/blob/master/e2e/bug.spec.js#L9

It should pass. Why not? The first one passes at least.

Currently I get the error:

```json
Error Trace: [
  {
    "Description" : "Multiple elements were matched: (
    "<RCTCustomScrollView:0x7ffda48c8000; AX=N; AX.frame={{0, 0}, {375, 667}}; AX.activationPoint={187.5, 333.5}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {375, 667}}; opaque; alpha=1>",
    "<UIFieldEditor:0x7ffda7833000; AX=N; AX.frame={{1, 36}, {373, 38}}; AX.activationPoint={187.5, 55}; AX.traits='UIAccessibilityTraitNone'; AX.focused='N'; frame={{0, 0}, {373, 38}}; alpha=1; text=''>"
). Please use selection matchers to narrow the selection down to single element.",
    "Error Domain" : "com.google.earlgrey.ElementInteractionErrorDomain",
    "Error Code" : "5",
    "File Name" : "GREYElementInteraction.m",
    "Function Name" : "-[GREYElementInteraction grey_errorForMultipleMatchingElements:withMatchedElementsIndexOutOfBounds:]",
    "Line" : "956"
  }
]
```
