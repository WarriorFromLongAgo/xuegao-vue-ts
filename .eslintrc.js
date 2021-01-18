module.exports = {
  root: true,
  env: {
    node: 1
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  // Severity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '0').
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    "quotemark": 0, // 字符串文字需要单引号或双引号。
    "indent": 0, // 使用制表符或空格强制缩进。
    "member-access": 0, // 需要类成员的显式可见性声明。
    "interface-name": 0, // 接口名要求大写开头
    "ordered-imports": 0, // 要求将import语句按字母顺序排列并进行分组。
    "object-literal-sort-keys": 0, // 检查对象文字中键的排序。
    "no-consecutive-blank-lines": 0, // 不允许连续出现一个或多个空行。
    "no-shadowed-variable": 0, // 不允许隐藏变量声明。
    "no-trailing-whitespace": 0, // 不允许在行尾添加尾随空格。
    "semicolon": 0, // 是否分号结尾
    "trailing-comma": 0, // 是否强象添加逗号
    "eofline": 0, // 是否末尾另起一行
    "prefer-conditional-expression": 0, // for (... in ...)语句必须用if语句过滤
    "curly": 1, //for if do while 要有括号
    "forin": 0, //用for in 必须用if进行过滤
    "import-blacklist": 1, //允许使用import require导入具体的模块
    "no-arg": 1, //不允许使用 argument.callee
    "no-bitwise": 1, //不允许使用按位运算符
    "no-construct": 1, //不允许使用 String/Number/Boolean的构造函数
    "no-duplicate-super": 1, //构造函数两次用super会发出警告
    "no-empty": 1, //不允许空的块
    "no-eval": 1, //不允许使用eval
    "no-floating-promises": 0, //必须正确处理promise的返回函数
    "no-for-in-array": 0, //不允许使用for in 遍历数组
    "no-implicit-dependencies": 0, //不允许在项目的package.json中导入未列为依赖项的模块
    "no-inferred-empty-object-type": 0, //不允许在函数和构造函数中使用{}的类型推断
    "no-invalid-template-strings": 1, //警告在非模板字符中使用${
    "no-invalid-this": 1, //不允许在非class中使用 this关键字
    "no-misused-new": 1, //禁止定义构造函数或new class
    "no-null-keyword": 0, //不允许使用null关键字
    "no-object-literal-type-assertion": 0, //禁止object出现在类型断言表达式中
    "no-return-await": 1, //不允许return await
    "arrow-parens": 0, //箭头函数定义的参数需要括号
    "adjacent-overload-signatures": 0, //  Enforces function overloads to be consecutive.
    "ban-comma-operator": 1, //禁止逗号运算符。
    "no-any": 0, //不需使用any类型
    "no-empty-interface": 1, //禁止空接口 {}
    "no-internal-module": 1, //不允许内部模块
    "no-magic-numbers": 0, //不允许在变量赋值之外使用常量数值。当没有指定允许值列表时，默认允许-1,0和1
    "no-namespace": [1, "allpw-declarations"], //不允许使用内部modules和命名空间
    "no-non-null-assertion": 1, //不允许使用!后缀操作符的非空断言。
    "no-parameter-reassignment": 1, //不允许重新分配参数
    "no-reference": 1, // 禁止使用/// <reference path=> 导入 ，使用import代替
    "no-unnecessary-type-assertion": 0, //如果类型断言没有改变表达式的类型就发出警告
    "no-var-requires": 0, //不允许使用var module = require("module"),用 import foo = require('foo')导入
    "prefer-for-of": 1, //建议使用for(..of)
    "promise-function-async": 0, //要求异步函数返回promise
    "max-classes-per-file": [1, 2], // 一个脚本最多几个申明类
    "variable-name": 0,
    "prefer-const": 0 // 提示可以用const的地方
  }
};
