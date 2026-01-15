---
marp: true
theme: custom
---

# Review
Today we'll review key ideas from last year's seminars to set up this upcoming year.

---
# Relational Databases
Specify is a relational database. Each object is a row, but the rows have references to each other

![bg w:800px right:70% schema](assets/schema.png)

---
# Data standards keep models uniform and usable

![darwin](assets/darwin.png)


---
# Updating data models and schemas
![model](assets/model.png)

---
# Markup can help us structure text

```html
<html>
    <body>
        Hello, world!
    </body>
</html>
```

---
# Turn Relational Databases into Spreadsheets

How do we get our data back into a spreadsheet form?

![bg w:800px right:65% schema](assets/schema.png)

---
# Querying the database

Demo for queries.

---
# Basic transformations
- Filter
- Sort
- Aggregate

---
# Filtering with boolean logic as set logic
- **Intersection**: property1 `AND` property2
- **Union**: property1 `OR` property2
- **Complement**: `NOT` property1
- **Select**: ranges, lists, etc.


---
# Sort
- Sorted vs. ordered
- Unsorted vs. not possible to order

---
# Aggregate
- Merge different rows by keys
- Concatenate lists

---
# Data cleaning
The previous operations are at the "row" level. Once you have your data in a "good enough" spreadsheet, you often need to transform each cell.

---
# Regular expressions
If a regular text pattern exists, it's very easy for a computer to perform split or find operation on it using regular expressions.

- `\d\d\d-\d\d\d-\d\d\d\d` is the form of `604-822-2301`
- `Paul.*Bucci` is the form of both `Paul Alexander Hendrik Bucci` and `Paul A. H. Bucci`

---
# Dictionaries
If you can structure data in a `key`-`value(s)` pair, it is easy for computers to perform find-replace operations.

- `"P. Bucci": {"Paul Bucci", "Paul A. H. Bucci"}`

| Item | Synonym |
| ---- | ------- |
| Paul | Paul Bucci |


---
# Classifiers
Sometimes you can give the computer examples of well-labeled "correct" and "incorrect" data, and it will make a guess as to whether the item is correct or incorrect. Most AI will be in this format.

---
# Pipelines
Chaining together multiple operations is called a pipeline. For example, Sheila's work learn student needed something that looked like this:
- PDF -> Text
- Text -> Excel spreadsheet based on regular expressions to extract names
- Excel -> Excel spreadsheet of aliases for people (P. Bucci is Paul Bucci)
- Excel -> Excel of all extracted names based on aliases