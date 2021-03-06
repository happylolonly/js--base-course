еще наверное не финальный вариант)

##

## Что такое переменная?

Переменная — именованная область памяти для хранения какого нибудь значения

## Как создать переменную? Примеры кода

```javascript
var myFaforiteLanguage = 'JS';

let one = 1, two, three;
```

## Виды циклов ( 3 вида ) ? Примеры использования

```javascript

// while
while(isHaveTime) {
  console.log('Learning JS');
}

// do/while
do {
  console.log('I will be shown!')
} while(false);

// for
for(i; i < 10; i++) {
  console.log('number:', i);
}
```

## Cколько и какие типы данных в javascript? Примеры создания переменных каждого типа

7 типов данных:

```javascript
var text = 'Some important info'; // строка
var number = 4; var anotherNumber = 5.359050; // число
var bool = true; // логическое значение
var obj = {name: 'Bob', age: 20}; // объект, функции и массивы тоже считаются объектами.
var error = null; // null
var name; // undefined, когда значение не присвоено, присваивать самому не рекомендуется
var symbol = Symbol("name"); // символ, для чего нужен пока не скажу)
```

## Как узнать тип переменной? Пример кода

используется typeof

```javascript
let text = 'Will check type now';

typeof(text) // string
typeof(null) // object
typeof(function() { }) // function, а функции - object
```

## Что такое область видимости?

место где видна переменная, бывает глобальная и локальная. глобальная это когда переменная достуна во всем коде, локальная ограничена функцией

## Как из javascript в брaузере вывести на экран строчку ? ( 4-ре способа ) Примеры кода

```javascript
alert()
prompt()
confirm()

console.log()
```

и при добавлении в html:

```javascript
document.write()
el.innerHTML()
```

наверное есть еще другие

## Каким образом можно реализовать условное выполнение кода ?

через условные конструкции и логические операторы

## Условные операторы в javascript - какие? Примеры использования

if/else, switch, тернарный оператор  
возможно что то еще...

```javascript
if() {

} else if() {

} else {

}

switch (x) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
  default:
    console.log('Is it a number?')
}
```
## Что такое тернарный оператор?

оператор который похож на if и принимает 3 значения:
```javascript
isHomeworkDone === true ? 'Отлично, в следующий раз будет больше' : 'Наверное придется отжиматься...';
```
первая часть выполняется если true, вторая если false

## Как обойтись без условных операторов если нужно сделать условное выполнение кода? С примером

через логические операторы || и &&

## Что такое функция? какими характеристиками можно описать функцию?

блок кода который можно выполнить для какой либо задачи

## Как можно создать функцию? 3 способа. C примерами кода

```javascript
function first() {
  // создание функции
  // создается до выполнения кода
}

let func = function() {
  // функциональное выражение
  // не видна до объявления
}

let dynamicFunc = new Function('name', 'return name'); // создание функции динамически
```

## Что такое объект? Как создать объект? ( 3 способа ) С примерами кода

структура данных с видом "ключ": "значение"

```javascript

let obj1 = {}; // через литерал
let obj2 = new Object(); // через конструктор
let obj3 = Object.create();

```

потом можно добавлять значения:

```javascript
obj1.name = 'Alex';
// или
obj1['age'] = 10;
```

## Что такое передача по ссылке / передача по значению?

передача по значению это когда при копировании переменной создается полностью новая  
по ссылке копируются объекты, когда переменные ссылаются на один и тот же объект

## Что такое минификация и зачем она нужна?

уменьшение js-файлов (сокращение/оптимизация кода, удаление пробелов, переносов строк), для уменьшения размера и времени загрузки браузером.

## Как можно добавить javascript код в html страницу? 2 способа. C примерами кода

подключив внешний скрипт:
```javascript
<script src="src/index.js"></script>
```

или написать внутри:
```javascript
<script>
  alert('Я тут!');
</script>
```

## Что такое массив?

массив это объект в котором все ключи пронумерованы

## Как создать массив? ( 3 способа ) С примером кода

```javascript
let firstArr = [1, 2, 3];

let secondArr = new Array(1, 2, 3);

let thirdArr = Array.from();
```

## Как запросить данные у пользователя? с примером кода

использовать prompt и confirm:
```javascript
let name = prompt('Как тебя зовут?', 'Не скажу'); // сохраняет в переменную то что ввел пользователь, или значение по дефолту.

let answer = confirm('Сделали домашку?;)') // сохраняет true или false
```
