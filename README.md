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
  disabled={[true,true]}
  value={selected}
  multiple={multiple}
  orientation={orientation}
  onChange={this._onSelectChange}
/>

```


### data
```
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
```
array: [1,2,3]

```

### valueField & textField
```
string: default value & label

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
