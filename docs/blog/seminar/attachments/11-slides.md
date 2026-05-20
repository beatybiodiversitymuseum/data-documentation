---
marp: true
theme: custom
---

# NLP: Indexing and Topics
Today we will talk about how to create an index and how that makes searching easier. If time, we will address how this can help to understand topic models.


---
# Basic tabular lookups
The most basic search would look like this:

| key   | record  |
| ----- | ------- |
| cat   | PET0001 |
| dog   | PET0002 |
| mouse | PET0003 |

```python
term = "dog"
for key, record in row:
    if term == key:
        return record
```

---
# Time for tabular lookups
- Estimated 500 nanoseconds per record for basic search
- (500 * 1,000,000) nanoseconds = 0.5 seconds
- Current Catalogue of Life has 7,000,000 records = 3.5 seconds

---
# Edit distance
Last time we talked about edit distance. A quick reminder:

`cat` is `1 edit` away from `cats`
`cut` is `1 edit` away from `cat`

---
# Edit distance search
- 1000 nanoseconds per edit distance check
- ((1000 + 500) * 7,000,000) nanoseconds = 10.5 seconds
- 10.5 seconds * 2,000,000 items in the Beaty = 243.055556 days

Can't do this!

---
# Input cleaning (stemming)
One approach is to simply clean the input.

```python

term = "doggies"
lookup = stem(term) # dog
for key, record in row:
    if lookup == key:
        return record
```

---
# Indexing: rank search
A better approach is to pre-compute a distance metric and build an index.

| term   | synonym | distance | 
| ------ | ------- | -------- |
| kitten | kittie  | 1        |
| kitten | cat     | 2        |

But how do we create this sense of semantic distance?

---
# Relatedness and search
In the Beaty, we have a few potential distance metrics:

1. Taxonomic proximity
2. Vernacular names co-occurence
3. Other relations (spatial, temporal, topical, etc.)

---
# Tree-based semantic distance
There is a semantic similarity between `cats` and `dogs`. If you have a tree like:

`pets` -> `cats`
`pets` -> `dogs`

You can say that `cats` are related to `dogs` via one parent, `pets`. There are big hand-developed dictionaries that relate concepts that can give you a distance.

---
# Taxonomic proximity

- `Allophrynidae Allophryne resplendens` is a `sibling` of `Allophrynidae Allophryne ruthveni`
- You could define proximity to be number of steps to a common `parent`.
- Therefore, this would be a distance of `1`.

---
# Vernacular name co-occurence
The Catalogue of Life gives us a list of vernacular names.

| ID    | Lang| Name                  |
| ----- | --- | --------------------- |
| 74YS2 | eng | slime membrane sponge |
| 74YS2 | fra | éponge poisseuse |
| 6SYS3 | deu | Feigenbohrschwamm |
| 6SYS3 | deu | Fleischschwamm |
| 6SYS3 | spa | esponja azul |
| 6SYS3 | eng | flesh sponge |
| 6SYS3 | eng | lobate fig sponge |

---
# Vernacular name co-occurence
We could define a vernacular distance.

| ID    | Lang| Name                  |
| ----- | --- | --------------------- |
| 74YS2 | eng | slime membrane sponge |
| 6SYS3 | eng | lobate fig sponge |

| ID_1  | ID_2  | Key    | Distance |
| ----  | ----- | ------ | -------- |
| 74YS2 | 6SYS3 | sponge | 1        |

---
# Beaty's special co-location metric

Let's define the following metrics:

- Collection event distance
- Collector distance
- Remarks distance

---
# Topic models
Topic models are basically automatically-generated groupings of similar records based on custom metrics.