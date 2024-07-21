<a href="https://www.npmjs.com/package/ngx-pipes-toolkit">
  <img src="https://img.shields.io/npm/v/ngx-pipes-toolkit.svg?style=for-the-badge" alt="NPM package">
</a>
<a href="http://packagequality.com/#?package=ngx-pipes-toolkit">
  <img src="https://npm.packagequality.com/shield/ngx-pipes-toolkit.svg?style=for-the-badge" alt="Package quality">
</a>
<a href="https://coveralls.io/github/SlyTed/ngx-pipes-toolkit?branch=main">
  <img src="https://img.shields.io/coveralls/SlyTed/ngx-pipes-toolkit.svg?style=for-the-badge" alt="Coveralls">
</a>
<a href="https://www.npmjs.com/package/ngx-pipes-toolkit">
  <img src="https://img.shields.io/npm/dm/ngx-pipes-toolkit.svg?style=for-the-badge" alt="NPM monthly downloads">
</a>
<a href="https://www.npmjs.com/package/ngx-pipes-toolkit">
  <img src="https://img.shields.io/npm/dt/ngx-pipes-toolkit?style=for-the-badge" alt="NPM total downloads">
</a>
<a href="https://github.com/SlyTed/ngx-pipes-toolkit/blob/main/LICENSE">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge" alt="MIT licensed">
</a>

# NGX Pipes Toolkit

## Table of contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage](#usage)
- [Content](#content)
  - [Array](#array)
    - [Enumerate](#enumerate)
  - [Math](#math)
    - [Convert](#convert)
    - [MeanBy](#mean-by)
    - [SumBy](#sum-by)
    - [MinBy](#min-by)
    - [MaxBy](#max-by)
- [Contributing](#contributing)

## Motivation

**ngx-pipes-toolkit** library was born from the need to "wrap" the utility functions of [Lodash](https://lodash.com/docs) for a direct usage in the templates, especially the mathematical ones.

Typically, we manipulate collections of objects fetched from a REST API, and we want to display to the users some statistics based on a property of those objects. For example, we might want to display the mean age for a collection of users.

However, native Angular pipes or ones from other NPM packages like [NGX Pipes](https://www.npmjs.com/package/ngx-pipes) or [Angular Pipes](https://www.npmjs.com/package/angular-pipes) handle **only** data from native types (i.e. `number`, `string`, or `boolean`). Consequently, it is not possible to compute directly in the template the mean age. Therefore, we need to declare a derived value from the fetched collection in the component class (signals are used for convenience):

```typescript
import { meanBy } from 'lodash';

export type User = {
  id: string;
  age: number;
};

@Component({
  template: `
    <p>Mean age: {{ $meanAge() }}
  `,
})
export class DashboardComponent {
  readonly $users: Signal<User[]> = this.userApiService.fetchUsers();

  readonly $meanAge = computed<number>(() => {
    return meanBy(this.$users(), 'age');
  });
}
```

Even if this derived value `$meanAge` is relatively simple, it adds an extra layer for a straightforward computation using utility functions.

The primary motivation behind **ngx-pipes-toolkit** is to allow direct manipulation of collection of objets without declaring intermediate fields in the component class, thereby simplifying the code:

```typescript
import { MeanByPipe } from 'ngx-pipes-toolkit';

export type User = {
  id: string;
  age: number;
};

@Component({
  imports: [MeanByPipe],
  template: `
    <p>Mean age: {{ $users() | meanBy:'age' }}
  `,
})
export class DashboardComponent {
  readonly $users: Signal<User[]> = this.userApiService.fetchUsers();
}
```

Moreover, the aim of **ngx-pipes-toolkit** is **not** to replace other libraries, but to complement them. That's why there are no duplicate pipes with the other main Angular pipes library: [NGX Pipes](https://www.npmjs.com/package/ngx-pipes).

## Installation

Use NPM to install the package

```bash
$ npm install ngx-pipes-toolkit --save
```

## Usage

All pipes in **ngx-pipes-toolkit** are implemented as standalone pipes. There are no Angular modules that wrap the pipes. Therefore, you can directly use them in your components or templates by importing them where needed. Furthermore, all pipes are pure.

- In templates:

```html
<p>{{ 1_000 | convert:'m':'km' }}</p> <!-- Returns "1" -->
```

- In components:

```typescript
import { ConvertPipe } from 'ngx-pipes-toolkit';

@Component({
  providers: [ConvertPipe],
})
export class MyComponent {
  readonly convertPipe = inject(ConvertPipe);

  readonly conversion = this.meanPipe.transform(1_000, 'm', 'km'); // Returns "1"
}
```

## Content

### Array

#### Enumerate

Allows to use `*ngFor` directive or `@for` control flow block like a classic `for` loop (sometimes we just want to render something in the template a certain number of times, independently from a collection of objets)

```html
@for (index of $loadingCount() | enumerate; track index) {
  <!-- Display skeletons while loading... -->
}
<ngx-skeleton *ngFor="let index of $loadingCount() | enumerate" />
```

### Math

#### Convert

Converts a value with its current unit to the final unit

```html
<p>{{ 1000 | convert:'m':'km' }}</p> <!-- Output: "1" -->
<p>{{ 32 | convert:'F':'C' }}</p> <!-- Output: "0" -->
```

#### Mean by

Calculates the mean of an array of objects based on one of their numeric property

```typescript
const users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 30 },
]
const games = [
  { name: 'Mass Effect 1', price: 30 }
  { name: 'Mass Effect Andromeda', price: 40 }
]
```
```html
<p>{{ users | meanBy:'age' }}</p> <!-- Output: "25" -->
<p>{{ games | meanBy:'price' }}</p> <!-- Output: "35" -->
```

#### Sum by

Calculates the sum of an array of objects based on one of their numeric property

```typescript
const users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 30 },
]
const games = [
  { name: 'Mass Effect 1', price: 30 }
  { name: 'Mass Effect Andromeda', price: 40 }
]
```
```html
<p>{{ users | sumBy:'age' }}</p> <!-- Output: "50" -->
<p>{{ games | sumBy:'price' }}</p> <!-- Output: "70" -->
```

#### Min by

Returns the item with the smallest value of an array of object based on one of their numeric property

```typescript
const users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 30 },
]
const games = [
  { name: 'Mass Effect 1', price: 30 }
  { name: 'Mass Effect Andromeda', price: 40 }
]
```
```html
<p>{{ users | minBy:'age' }}</p> <!-- Output: "{ name: 'Alice', age: 20 }" -->
<p>{{ games | minBy:'price' }}</p> <!-- Output: "{ name: 'Mass Effect 1', price: 30 }" -->
```

#### Max by

Returns the item with the largest value of an array of object based on one of their numeric property

```typescript
const users = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 30 },
]
const games = [
  { name: 'Mass Effect 1', price: 30 }
  { name: 'Mass Effect Andromeda', price: 40 }
]
```
```html
<p>{{ users | maxBy:'age' }}</p> <!-- Output: "{ name: 'Bob', age: 30 }" -->
<p>{{ games | maxBy:'price' }}</p> <!-- Output: "{ name: 'Mass Effect Andromeda', price: 40 }" -->
```

## Contributing

- Any contribution is appreciated
- If you are planning to add a new pipe (or any new other feature) or make a fix, please open an issue before
- Follow the [conventional commit message format](https://www.conventionalcommits.org/en/v1.0.0/)

1. Clone the project

```bash
$ git clone https://github.com/SlyTed/ngx-pipes-toolkit.git
```

2. Install the dependencies

```bash
$ npm install
```

3. Make your changes in a new branch

```bash
$ git checkout -b <my-branch>
```

4. Add appropriate tests (cover all cases) and make sure everything is running properly (don't forget to lint)

```bash
$ npm run test:coverage
$ npm run lint
```

5. Push your branch

6. Make a pull request
