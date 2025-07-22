类JSON格式  
可以为字符串、数字、布尔值、键值对和数组

> !p @proOnly JSONValue = string | number | boolean | {
    [x: string]: JSONValue
} | Array< JSONValue>