# Sudoku visualizer
A simple sudoku visualizer API

## API
### GET
To generate a visualization of the dataset currently held in memory, send a `GET` request to the process.

If a valid dataset is in memory at the time of the request, the API will return an HTML string.

### PUT
To upload a dataset into the visualizer, send a `PUT` request which meets the following criteria.

#### Headers
- `Content-Type: application/json`

#### Body (raw JSON)
- Must consist of a single object, with a single property called `data`, which is an array.
- The `data` array must contain 9 unnamed arrays, which must have 9 numbers each.

Each array inside the `data` array will be seen as a row of the sudoku, and each number in the inner arrays will be seen as a cell in the sudoku.

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

Numbers must be an integer between 0 and 9, where 0 represents an empty cell, and numbers less than 0 or greater than 9 invalidate the request.

### DELETE
To delete the current dataset held in memory, send a `DELETE` request.

The API will simply delete the dataset that is currently in memory, and return `200 OK`.