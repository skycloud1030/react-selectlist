# react-selectlist

[![Travis](https://api.travis-ci.org/skycloud1030/react-selectlist.svg?branch=master)](https://travis-ci.org/skycloud1030/react-selectlist)
[![Coverage Status](https://coveralls.io/repos/github/skycloud1030/react-selectlist/badge.svg?branch=master)](https://coveralls.io/github/skycloud1030/react-selectlist?branch=master)
[![Version](https://img.shields.io/npm/v/react-selectlist.svg)](https://www.npmjs.com/package/react-selectlist)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![Donloads](https://img.shields.io/npm/dm/react-selectlist.svg)](https://www.npmjs.com/package/react-selectlist)

React component used for selecting multiple values or single statess from several options

## Install

```sh
npm i --save react-selectlist
```

## demo

[Live demo](http://skycloud1030.github.io/react-selectlist/html/checkbox.html)

## props

```js
import { ReactSelectList } from "react-selectlist";
<ReactSelectList
  data={data}
  disabled={[true, true]}
  value={selected}
  multiple={multiple}
  orientation={orientation}
  onChange={this._onSelectChange}
/>;
```

### data

```sh
data:[
  { value: 1, label: 'Nuggets'},
  { value: 2, label: 'Jazz'},
  { value: 3, label: 'Warriors' },
  { value: 4, label: 'Lakers' },
]

or

data:[0,1,2,3,4]
```

### value

```sh
array: [1,2,3]
```

### valueField & textField

```sh
string: default value & label
```

### multiple

```sh
type boolean: true|false
```

### orientation

```sh
string :horizontal|vertical
```

### onChange

```sh
call back function
The select value return in string array
return (["0","1"],id)
```

## License

```sh
MIT
```
