# react-selectlist
react-selectlist

## Install
```
npm i --save react-selectlist
```

## demo
[Live demo](http://skycloud1030.github.io/react-selectlist/html/checkbox.html)

## props
```
import {ReactSelectList} from 'react-selectlist';
<ReactSelectList
  data={data}
  multiple={multiple}
  orientation={orientation} onChange={this._onSelectChange}
/>

```

### defaultValue
```
array: [1,2,3]

```
### data
```
data:[
  { id: 1, name: 'Nuggets'},
  { id: 2, name: 'Jazz'},
  { id: 3, name: 'Warriors' },
  { id: 4, name: 'Lakers' },
]

or

data:[0,1,2,3,4]

```

### valueField & textField
```
string: default id & name

```

### multiple
```
type boolean: true|false

```

### orientation
```
string :horizontal|vertical

```

### onChange
```
call back function
The select value return in string array
return (["0","1"],id)

```

## License

```
MIT
```
