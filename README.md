# \<fancy-carousel\>

[![Build Status](https://travis-ci.org/annsonn/fancy-carousel.png?branch=master)](https://travis-ci.org/annsonn/fancy-carousel)
[![Issue Count](https://codeclimate.com/github/annsonn/fancy-carousel/badges/issue_count.svg)](https://codeclimate.com/github/annsonn/fancy-carousel)

Carousel which gives you options for multiple fancy transistions and different ways to include images.

## Example

```
<fancy-carousel>
    <img src="https://app-layout-assets.appspot.com/assets/bg1.jpg">
    <img src="https://app-layout-assets.appspot.com/assets/bg2.jpg">
    <img src="https://app-layout-assets.appspot.com/assets/bg3.jpg">
    <img src="https://app-layout-assets.appspot.com/assets/bg4.jpg">
</fancy-carousel>
```

| Properties      | Type    | Comment                                                                                  |
| --------------- |:-------:| ---------------------------------------------------------------------------------------- |
| apiKey          | String  | API key for Google image search                                                          |
| imageTopic      | String  | The topic for image search                                                               |
| noControls      | Boolean | Do not display control buttons for left/right (Default: false)                           |
| searchEngineCx  | String  | CX key for Google                                                                        |
| transitionTimer | Number  | Timer for transitioning to the next slide                                                |
| transitionType  | String  | Type of transition animation (Currently available types: spread, paint, shift, collapse) |


## Running 
Use the 'polymer-cli' to test/demo component

### To Demo/Test Component
```
polymer serve
```
Then go to 'localhost:8080/components/fancy-carousel' to view component

### To run tests:
```
polymer test
```
