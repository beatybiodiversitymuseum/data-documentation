---
marp: true
theme: custom
---

# Natural Language Processing
Many collections have unstructured text, or partially-structured text, or even incorrectly structured text. Natural language processing (NLP) is a set of techniques oriented towards taking unstructured text and turning it into something computable.

---
# What is natural language?
Natural language is speech and prose, i.e., the way people naturally speak and write. In the Beaty, this is most often in verbatim fields, but also includes semi-structured text.

---
# Semi-structured text
Some text has a bit of structure, but may be unreliable. For example:

```
First Middle Last
```
Is well-structured, but only if everyone very strictly follows the convention. Just yesterday I saw: 

```
J. (Billy) Billy Johnson
```

Which is semi-structured in that both follows a convention and breaks it at the same time. 

---
# Semi-structured text (continued)
Other semi-structured examples might be free text fields with little labels like:

```
Found: Crecent beach at noon with the sun peeking through clouds next to a rock.
Number: 0123
```

In that case, we have a little bit of a `key-value` pair, and probably a little bit of structure across a corpus where this person likely always put a location name first, but everything else may or may not have a pattern.

---
# Delimiters
Structure usually comes with regular patterns. Delimiters show when a structured field begins and ends. We're so used to `space` as a delimiter we forget it was once an invention!

```
1. INNOVAFERTANIMVSMVTATASDICEREFORMASCORPORA​DICOEPTISNAMVOSMVTASTISETILLAS​ADSPIRATEMEISPRIMAQVE​ABORIGINEMVNDIADMEAPERPETVVMDEDVCITETEMPORACARMEN
2. In nova fert animvs mvtatas dicere formas corpora; di, coeptis (nam vos mvtastis et illas) adspirate meis primaqve ab origine mvndi ad mea perpetvvm dedvcite tempora carmen![2]
3. I want to speak about bodies changed into new forms. You, gods, since you are the ones who alter these, and all other things, inspire my attempt, and spin out a continuous thread of words, from the world's first origins to my own time.
```

In free text, we use `space` for a delimiter.
In `CSV`, we use `,` for a delimiter.
In `TSV`, we use `tab` for a delimiter.
In `DarwinCore` we CSVs, and then use `|` for a delimiter within a field.

---
# Using delimters
If we know the delimiters, we can `parse` text easily. Parsing means to take a string of characters "abcd efg" and structure it. So, if we know that a `,` is a delimiter, we can write a program that says "take everything until the comma and call it the first cell":

```python
cells = []
cell = ""
for character in line:
    if character == ",":
        cells.append(cell)
        cell = ""
    else:
        cell = cell + character
```

---
# Regular Expressions
Regular expressions can express regular patterns. See demo for details.

[Regex Cheatsheet](https://www.rexegg.com/regex-quickstart.php)
[Regex Tester](https://regex101.com/)

---
# Multi-character delimiters
HTML and other markup languages use Regex to make multi-character delimiters. For example: `We found <i>Orcinus orca</i> were playful.`

Is matched by: `.*<([a-zA-Z][a-zA-Z0-9]*[^>]*)>(.*?)<\/(\1*)>.*`

Looks crazy! But actually:

`.*` any character zero or more times
`[a-zA-Z0-9]*` any a-z character lower or uppercase or number
`[^>]*` any character that isn't a `>`
`(.*?)` shortest form of any character but make a special group
`<\/(\1*)>` closing tag must match the first tag
`.*` any character zero or more times

---
# Mixing structure with semi-structure
Tags allow us to embed special instructures inside free text. If a parser reads:

`We found <i>Orcinus orca</i> were playful.`

With the previous regex, we can know that `<i>` means italic. This can be text formatting instructions, links, or even much more complex stuff!

---
# Excel Regex Demo data

```
Canada; British Columbia; S. Gulf Islands, Sear Island, Strait of Georgia, off east coast of Vancouver Island                    
Canada; British Columbia; Arab cove, Vancouver Island                    
Canada; British Columbia; Arab cove, Vancouver Island                    
Canada; British Columbia; Southeast side of cohoe point, east side of langara island    54° 13.54' N    132° 57.5' W    54° 13.54' N    132° 57.5' W    
Canada; British Columbia; Bartlett island, west coast of Vancouver Island    49° 13' N    126° 6' W    49° 13' N    126° 6' W    
Canada; British Columbia; Minute creek    48° 30' 20'' N    124° 19' 44'' W    48° 30' 20'' N    124° 19' 44'' W    
Canada; British Columbia; Minute creek    48° 30' 20'' N    124° 19' 44'' W    48° 30' 20'' N    124° 19' 44'' W    
United States; California; Pescadero point, san mateo county    36° 33.8' N    121° 57' W    36° 33.8' N    121° 57' W    
United States; California; Pescadero point, san mateo county    36° 33.8' N    121° 57' W    36° 33.8' N    121° 57' W    
United States; California; White gulch, western shore of tomales bay, marin county    38° 11' 38'' N    122° 56' 45'' W    38° 11' 38'' N    122° 56' 45'' W    
United States; California; Second sled road, dillon beach, marin county    38° 15' 6'' N    122° 58' 3'' W    38° 15' 6'' N    122° 58' 3'' W    
```

---
# Excel Regex Demo solutions

```
=REGEXEXTRACT(A1,"(?<=;\s)[^;]+(?=;\s)")
=REGEXEXTRACT(A1,"^(\d{1,3})°")
=REGEXEXTRACT(A1,"°\s*(\d{1,2}(?:\.\d+)?)'")
=REGEXEXTRACT(A1,"'\s*(\d{1,2}(?:\.\d+)?)''")
=REGEXEXTRACT(A1,"([NSEW])$")
```

---
# Word stems
Now that we can use regex, we can start to think about word stems. If we think about common verbs:

`look`
`push`
`stack`

There are common patterns to understand the stem:

`looked -> look`
`looking -> look`
`looks -> look`

Captured by `look.*`


---
# Word Stem Dictionaries
English is a messy enough language that many verbs have very different forms:

`hidden` -> `hide`
`ran` -> `run`
`spoke` -> `speak`

For exceptions to patterns, we can simply make a look-up table called a `dictionary`.



