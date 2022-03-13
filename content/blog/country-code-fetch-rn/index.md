---
title: Country Code Input with Auto Fetch Code based - React-Native
date: "2020-11-20"
description: Everyone at every point of time has implemented a country code input for your project or mobile application. There are multiple packages available which would help you provide different user experiences in interacting with the inputs.
tags:
  [
    "react",
    "js",
    "react-native",
    "cross-platform",
    "country code",
    "textinput",
    "phone number"
  ]
author: "Allan Jeo"
cover: "./preview.png"
---

## Country Code Input with Auto Fetch Code based on where user opens up the App in React-Native

Everyone at every point of time has implemented a country code input for your project or mobile application. There are multiple packages available which would help you provide different user experiences in interacting with the inputs. Most of them use a Dropdown with a list of codes to select, sectioned input with the same functionality as dropdown with search and many more different options.

All of them requires user interaction, and it's great, but there is a catch to it. How do you set different default country value for every other user who will be using the app? This post is all about this; you can take a simple input and make it an effective country code input.

## Question is, how do we do it?

We are going to use a library called [react-native-localize](https://github.com/zoontek/react-native-localize) and a set of datasets to match and fetch our dial code for all countries. react-native-localize has multiple different APIs to work with. Shout out to Mathieu Acthernoene. Let's start.

Install the package using

```bash
$ npm install --save react-native-localize
# --- or ---
$ yarn add react-native-localize
```

We will use the `getCountry()` API to get the country; it returns the value based on device locale, not on position. We do not need any android or ios permissions to get the value.

Usage:

```js
import * as RNLocalize from "react-native-localize";

console.log(RNLocalize.getCountry());
// -> "IN"
```

Now we need the dial code data sets to check the value we receive from the getCountry() API. Currently, we are using a JSON file with the datasets you can have your rest API where you can fetch and manipulate the data. You can get it [here](https://gist.github.com/kcak11/4a2f22fb8422342b3b3daa7a1965f4e4#file-countries-json). Below is an example of the data sets.

```js
const CountryCodes = [
  { name: "Israel", dial_code: "+972", code: "IL" },
  { name: "Afghanistan", dial_code: "+93", code: "AF" },
  { name: "Albania", dial_code: "+355", code: "AL" },
  { name: "Algeria", dial_code: "+213", code: "DZ" },
  { name: "India", dial_code: "+91", code: "IN" }
];
```

After you have the JSON added to your project, let's start with implementing the actual input in your project.

```js
import React, { useState } from "react";
import { SafeAreaView, TextInput } from "react-native";
import RNLocalize from "react-native-localize";
import CountryCodeData from "./src/data/CountryCodes"; //JSON data for country codes

const CountryCodeInput = () => {
  // Saving the return value
  const currentCountry = RNLocalize.getCountry();
  // Check the currentCountry and return dial code from the JSON data
  const getCountryCode = () => {
    return CountryCodeData.filter((item) => item.code === currentCountry)
      .map((item) => item.dial_code)
      .toString();
  };
  // Initializing state with the return value from getCountryCode function
  const [dialCode, setDialCode] = useState(getCountryCode());
  return (
    <>
      <SafeAreaView>
        <TextInput
          label="Country Code"
          value={dialCode}
          onChange={(code) => setDialCode(code)}
        />
      </SafeAreaView>
    </>
  );
};

export default CountryCodeInput;
```

The filter() method will loop through the array and returns the value where the condition is met. It will return this.

```bash
$ [{ name: "India", dial_code: "+91", code: "IN" }]
```

Then we will use map() method to look into the array value we got from the filter() method and we extract the "dial_code" from the object and convert it to a string using toString() method.

## Conclusion

This is a simple example where you can implement a simple text input for Country Dial code for a minimalist user experience. I hope this post opened your eyes a little bit. If you liked the post, feel free to share it to help others find it!

You can follow me on <a href="https://twitter.com/allan_jeo" target="_blank">Twitter</a> where I do some shit posting for fun.
