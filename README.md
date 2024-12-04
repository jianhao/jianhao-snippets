# JianHao 的代码片段

剑豪日常开发中常用的代码片段

## 支持的语言类型

- Vue (.vue)
- JavaScript (.js)
- TypeScript (.ts)
- JavaScript React (.jsx)
- TypeScript React (.tsx)
- CSS/Less/SCSS (.css/.less/.scss)

## 一、基础代码片段

### `clg` - 打印日志

```typescript
console.log("$0");
```

### `imd` - import 导入整个模块

```typescript
import ${2:moduleName} from ${1:module};
```

### `imf` - 解构形式 import 导入

```typescript
import { $2 } from "${1:module}";
```

### `const` - 定义常量

```typescript
const $1 = $2;
```

### `let` - 定义变量

```typescript
let $1 = $2;
```

### `if` - 条件语句

```typescript
if ($1) {
  $0;
}
```

### `interface` - 定义接口

```typescript
interface $ {
  1: Props;
}
{
  $0;
}
```

### `keyof` - 定义对象 key 的类型

```typescript
type ${2:Type} = keyof typeof ${1:Object};
```

### `options` - 创建枚举数组

```typescript
export const $1 = [
  { label: ${2:""}, value: $3 }
];
```

### `map` - 创建枚举对象

```typescript
export const $1 = {
  $0,
} as const;
```

### `todo` - TODO 注释

```typescript
// TODO: 待完善
```

### `fixme` - FIXME 注释

```typescript
// FIXME: 待修复
```

### `tr` - try-catch 语句

```typescript
try {
  ${0:handle}()
} catch (e) {
  console.error(e);
}
```

### `handle` - 创建箭头函数

```typescript
const handle${1} = ($2) => {
  ${3}
};
```

## 二、Vue 代码片段

### `ref` - 创建 ref

```typescript
const $1 = ref<$2>($3);
```

### `reactive` - 创建 reactive

```typescript
const $1 = reactive<$2>({
  $3,
});
```

### `computed` - 创建计算属性

```typescript
const $1 = computed(() => {
  $2;
});
```

### `watch` - 创建监听器

```typescript
watch(
  () => $1,
  (newVal, oldVal) => {
    $2;
  },
  { deep: true }
);
```

### `watchEffect` - 创建副作用监听

```typescript
watchEffect(() => {
  $1;
});
```

### `mounted` - 创建 onMounted 钩子

```typescript
onMounted(() => {
  $1;
});
```

### `props` - 定义 Props

```typescript
const props = defineProps<{
  ${1:propName}: ${2:type}
}>();
```

### `emits` - 定义 Emits

```typescript
const emit = defineEmits<{
  ${1:eventName}: [$2]
}>();
```

### `setup` - 创建 setup script

```vue
<script setup lang="ts">
$0;
</script>
```

### `style` - 创建样式块

```vue
<style scoped lang="less">
$1
</style>
```

### `v-for` - 循环指令

```vue
v-for="(item, index) in $1" :key="${2:index}"
```

### `validate` - 表单验证

```typescript
await formRef.value?.validate();
message.success("操作成功！");
$1;
```

### `submit` - 表单提交

```typescript
const handleSubmit = async () => {
  await formRef.value?.validate();
  message.success("操作成功！");
  $1;
};
```

## 三、React 代码片段

### `useState` - 创建状态

```typescript
const [$1, set${1/(.*)/${1:/capitalize}/}] = useState<$2>($3);
```

### `useMemo` - 创建记忆值

```typescript
const $1 = useMemo(() => {
  $2;
}, [$3]);
```

### `useRef` - 创建引用

```typescript
const $1 = useRef<$2>();
```

### `useEffect` - 创建副作用

```typescript
useEffect(() => {
  $1;
}, [$2]);
```

### `ims` - 引入样式

```typescript
import styles from "./index.less";
```

### `class` - 定义类名

```typescript
className={styles.$1}
```

### `useRequest` - 创建请求

```typescript
const { data: ${1:data}, loading, run: ${2:runFetch} } = useRequest(${3:api}, {
  manual: true,
  onSuccess: (res) => {
    $4
  }
});
```

### `col` - 创建表格列

```typescript
const columns: ColumnsType<${1:type}>[] = [
  {
    title: "${2:标题}",
    dataIndex: "${3:key}"
  }
];
```

### `fv` - Form 表单验证

```typescript
form.validateFields().then((values) => {
  $1;
});
```

### `useQueryParam` - URL 参数管理

```typescript
import { useQueryParam } from "hooks";
const { query, updateQuery } = useQueryParam<${1:IQuery}>(${2:initQuery});
```

## 四、CSS 代码片段

### `flex-center` - Flex 居中布局

```css
display: flex;
align-items: center;
justify-content: center;
```

### `vertical-center` - 垂直居中

```css
position: absolute;
top: 50%;
transform: translate(0, -50%);
```

### `horizontal-center` - 水平居中

```css
position: absolute;
left: 50%;
transform: translate(-50%, 0);
```

### `ell1` - 单行文本溢出

```css
overflow: hidden;
white-space: nowrap;
text-overflow: ellipsis;
```

### `ell2` - 多行文本溢出

```css
display: -webkit-box;
width: $ {
  1: 100%;
}
overflow: hidden;
text-overflow: ellipsis;
-webkit-line-clamp: $ {
  2: 2;
}
-webkit-box-orient: vertical;
word-wrap: break-word;
word-break: break-all;
```

### `border1px` - 1px 边框实现

```css
position: relative;

&::before {
  position: absolute;
  top: $ {
    1: 0;
  }
  left: $ {
    2: 0;
  }
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-color: $ {
    3: @color;
  }
  border-style: solid;
  border-width: $ {
    4: 0 0 1px 0;
  }
  border-radius: $ {
    5: 0;
  }
  transform-origin: left top;
  content: "";
  pointer-events: none;
}
```

## 五、其他

### `mss` - 成功提示信息

```typescript
message.success("$1");
```

### `msr` - 错误提示信息

```typescript
message.error("$1");
```

### `ell` - 文本省略组件

```typescript
<Ellipsis value={${1:""}} lineClamp={${2:1}} />
```
