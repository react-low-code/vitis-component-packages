# vitis-lowcode-select

这是一个下拉框

## Demo: 静态数据

```tsx
import React from 'react';
import Select from 'vitis-lowcode-select';
const options = [{value: 1, label: '12'}, {value: 2, label: '14'}]
export default () => <Select label='年龄' options={options} value={2}/>;
```

<API src="component.tsx"></API>
