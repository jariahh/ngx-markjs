
# ngx-markjs

It is Angular 20 wrapper for very cool text highlighting lib [Mark.js](https://markjs.io)

## Compatibility

| ngx-markjs | Angular |
|---|---|
| 20.x.x | 20.x.x |
| 19.x.x | 19.x.x |
| 18.x.x | 18.x.x |


## How to use

### Install
```
npm i mark.js
npm i ngx-markjs
```

### Import module

```
...
import {NgxMarkjsModule} from 'ngx-markjs';

@NgModule({
...
  imports: [
...
    NgxMarkjsModule
  ],
...
})
export class AppModule { }
```
### Use directive
```
<div class="content_wrapper" 
     [markjsHighlight]="searchText"
     [markjsConfig]="config"
     [scrollToFirstMarked]="true"
>

### Configuration

The `markjsConfig` input allows you to customize the behavior of `mark.js`. You can find a list of available options on the [mark.js website](https://markjs.io/configurator.html).

Here's an example of how to use the `markjsConfig` input to change the highlight color:

```html
<div class="content_wrapper"
     [markjsHighlight]="searchText"
     [markjsConfig]="{ 'className': 'highlight' }"
>
</div>
```

```css
.highlight {
  background-color: yellow;
}
```

### Demo

A live demo of the library is available [here](https://stackblitz.com/edit/ngx-markjs-demo).

## Contributing

Contributions are welcome! Please feel free to submit a pull request.


```

### If you want to use it from source code

Incase of some compilation issues you can try to import ngxMarkjsModule directly in your application from .ts file

```
import {NgxMarkjsModule} from 'ngx-markjs/src/public-api'; 
```

But in that case you should include path to module in tsconfig.json ('include' section).

### Start demo project

Clone this repo and do install

```
npm install

ng serve
```
![demo app](ngx-markjs.gif)

Additional mark.js config params can be found on its [officail site](https://markjs.io)

Did you Like this lib? Follow me on [Twitter](https://twitter.com/El_Extremal) for more Angular and RxJS staff!

Need a mentorship for Angular and RxJS? Find me on [codementor.io](https://www.codementor.io/alexanderposhtaruk)

## License

This project is licensed under the MIT License.

