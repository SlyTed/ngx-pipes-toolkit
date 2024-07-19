# ngx-pipes-toolkit

## Table of contents

- [Motivation](#motivation)
- [Installation](#installation)
- [Contributing](#contributing)
- [Content](#content)
  - [Math](#math)
    - [mean](#mean)

## Motivation

**ngx-pipes-toolkit** library was born from the need to "wrap" the utility functions of [Lodash](https://lodash.com/docs) for a direct usage in the templates, especially the mathematical ones.

Typically, we manipulate collections of objects fetched from a REST API, and we want to display to the users some statistics based on a property of those objects. For example, we might want to display the mean age for a collection of users.

However, native Angular pipes or ones from other NPM packages like [NGX Pipes](https://www.npmjs.com/package/ngx-pipes) or [Angular Pipes](https://www.npmjs.com/package/ngx-pipes) handle **only** data from native types (i.e. `number`, `string`, or `boolean`). Consequently, it is not possible to compute directly in the template the mean age. Therefore, we need to declare a derived value from the fetched collection in the component class (signals are used for convenience):

```typescript
import { meanBy } from 'lodash';

export type User = {
  id: string;
  age: number;
};

@Component({ /* ... */ })
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

## Installation

1. Use NPM to install the package

```bash
$ npm install ngx-pipes-toolkit --save
```

## Usage

- In templates:

```html
<p>{{ [0, 1] | mean }}</p> <!-- Returns "0.5" -->
```

- In components:

```typescript
import { MeanPipe } from 'ngx-pipes-toolkit';

@Component({
  // ...
  providers: [
    // ...
    MeanPipe,
  ],
})
export class MyComponent {
  readonly meanPipe = inject(MeanPipe);

  readonly mean = this.meanPipe.transform([0, 1]); // Returns "0.5"
  // ...
}
```

## Content

### Math

#### Mean

Calculates the mean of an array of numbers

## Contributing

TODO
