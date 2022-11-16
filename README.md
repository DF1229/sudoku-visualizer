# Sudoku visualizer
A simple CLI sudoku visualizer

## API
### Get


### Post
To upload a dataset into the visualizer, send a `POST` request to the process with the following criteria.

#### Headers
- `Content-Type: application/json`

#### Body (raw JSON)
- Must consist of a single object, with a single property called `data`, which is an array.
- The `data` array must contain 9 unnamed arrays, which must have 9 numbers each.

Each array inside the `data` array will be seen as a row of the sudoku, and each number in the inner arrays will be seen as a column.

Example body content:
```
{
    "data": [
        [1,2,3,4,5,6,7,8,9],
        [2,3,4,5,6,7,8,9,1],
        [3,4,5,6,7,8,9,1,2],
        [4,5,6,7,8,9,1,2,3],
        [5,6,7,8,9,1,2,3,4],
        [6,7,8,9,1,2,3,4,5],
        [7,8,9,1,2,3,4,5,6],
        [8,9,1,2,3,4,5,6,7],
        [9,1,2,3,4,5,6,7,8]
    ]
}
```