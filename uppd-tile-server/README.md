# uppd-tile-server

Tile server for the UPPD project.

## requests
```
/
```
Shows a basic interactive map with several layers on it. Can be tweaked via `/html/index.html`.

NOTE: A valid mapbox API key is required for the index.html to work properly. Simply insert it in the place of `<INSERT MAPBOX TOKEN HERE>` in the file. 

---
```
/layers/{table:str}/fields
```
Shows all available fields for the given table.

---
```
/upload
```
Allows for a shapefile to be uploaded to the database the tile server is connected to. Example usage:
`curl -X POST -F "file=@my-shapefile.zip" http://localhost:8000/upload`.

---
```
/{column:str}/{year:int}
```
Returns an array of values for the given column and year from the view_data view.

---
```
/data-years
```
Returns the available years of data from the view_data view.

---
### NOTE: For the remainder of the endpoints, `?fields=` can be appended to the end of the request and include additional required fields. By default, only `gid` is included.
```
/layers/assets/{table:str}/{z:int}/{x:int}/{y:int}
```
provides the specified asset table in tile format.

---
```
/layers/indices/{data_year:int}/{z:int}/{x:int}/{y:int}
```
Returns the indices data for a specified year.
