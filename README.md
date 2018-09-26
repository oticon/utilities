# @oticon/utilities

#### Chunk

Use `Array.from()` to create a new array, that fits the number of chunks that will be produced. Use `Array.slice()` to map each element of the new array to a chunk the length of `size`. If the original array can't be split evenly, the final chunk will contain the remaining elements.

```javascript
chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], 5]
```

#### countOccurrences

Use `Array.reduce()` to increment a counter each time you encounter the specific value inside the array.

```javascript
countOccurrences([1, 1, 2, 1, 2, 3], 1);
// 3
```

#### Difference

Create a `Set` from `b`, then use `Array.filter()` on `a` to only keep values not contained in `b`.

```javascript
difference([1, 2, 3], [1, 2]);
// [3]
```

#### Flatten

Use `Array.reduce()` to get all values inside the array and `concat()` to flatten them.

```javascript
flatten([1, [2], 3, 4]);
// [1, 2, 3, 4]
```

#### Intersection

Create a `Set` from `b`, then use `Array.filter()` on `a` to only keep values contained in `b`.

```javascript
intersection([1, 2, 3], [4, 3, 2]);
// [2, 3]
```

#### Shuffle

Use `Array.sort()` to reorder elements, using `Math.random()` in the comparator.

```javascript
shuffle([1, 2, 3]);
// [2, 3, 1]
```

#### Similarity

Use `Array.filter()` to remove values that are not part of `values`, determined using `includes()`.

```javascript
similarity([1, 2, 3], [1, 2, 4]);
// [1, 2]
```

#### Union

Create a `Set` with all values from `a` and `b`, then convert values to an array.

```javascript
union([1, 2, 3], [4, 3, 2]);
// [1, 2, 3, 4]
```

#### Unique

Use `Set` and the `...rest` operator to discard all duplicated values.

```javascript
unique([1, 2, 2, 3, 4, 4, 5]);
// [1, 2, 3, 4, 5]
```

#### Parameters

Use `match()` with an appropriate regular expression to get all key-value pairs, `Array.reduce()` to map and combine them into a single object. Pass `location.search` as the argument to apply to the current `url`.

```javascript
parameters('https://oticon.com/?firstname=Sadi&lastname=Kaya');
// { firstname: "Sadi", lastname: "Kaya" }
```

#### Redirect

Use `window.location.href` or `window.location.replace()` to redirect to `url`.
Pass a second argument to simulate a link click (default is `true`) or an HTTP redirect.

```javascript
redirect('https://oticon.com', true);
```

#### Asset

Use `process.env.NODE_ENV` to return a string from an object.

```javascript
asset({obj}, "mediapath", "mediaurl");
// if (prod) { mediapath } else { mediaurl }
```

#### Log (Sentry.io)

If you're using React 16 or above, [Error Boundaries](https://reactjs.org/blog/2017/07/26/error-handling-in-react-16.html) are an important tool for defining the behavior of your application in the face of errors. Be sure to send errors they catch to Sentry using `Raven.captureException`.

```javascript
log(ex, extra);
```
 
 #### Parse
 
 ```javascript
 parse(xml);
 // xml -> js
 ```

#### XMLParser

```javascript
XMLParser(xml);
// xml -> js
```

#### Preload Images

```
preloadImages(arr);
```

#### UUID

Use the `crypto` API to generate a UUID, compliant with [RFC4122](https://www.ietf.org/rfc/rfc4122.txt) version 4.

```javascript
uuid();
// "7982fcfe-5721-4632-bede-6000885be57d"
```
