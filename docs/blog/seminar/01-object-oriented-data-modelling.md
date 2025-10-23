---
title: Object-oriented data modelling
date: 2025-10-22
categories:
  - General
search:
  # boost: 0.01  # Lower boost
  exclude: true
---

The Beaty’s main databasing system is Specify 7, a relational database developed for natural history museums. Relational databases are use an object-oriented metaphor, where the rows of the tables (think Excel table) in the database represent objects (whether physical or abstract) and the columns represent attributes of those objects. This object-oriented metaphor explains the database schema choices that the Specify 7 developers have made, but it also produces benefits and drawbacks for people who are trying to record and find data.

In this seminar, we will start with a tutorial on relational databases and object-oriented data modelling. We will discuss how this applies to specifically to Specify 7, but also modelling bioinformatics data in general. Attendees will have a chance to discuss their own data modelling challenges, and be empowered to make informed decisions about their own data models, whether in Specify 7 or another system. This will help with challenges you might behaving in data entry, querying, exporting, or the scientific validity of your data.

## Tutorial Notes 
Our basic model of data is just:

`key = value`

We might write that in a few different ways. Here is a tabular format:

|row| key   |
|---|-------|
|  1| value |

Here is a [JSON](https://en.wikipedia.org/wiki/JSON) format:

```json
{
  "key": value
}
```

If we have multiple keys, it might look like this:

|row| key1   | key2   |
|---|--------|--------|
|  1| value1 | value2 |

```json
{
  "key1": value1, 
  "key2": value2
}
```

Multiple objects in a list look like multiple table rows:

|row| key1   | key2   |
|---|--------|--------|
|  1| value1 | value2 |
|  2| value3 | value4 |

```json
[
  {
    "key1": value1, 
    "key2": value2
  },
  {
    "key1": value3, 
    "key2": value4
  }, 
]
```

Values can have different types:

| type    | example          | meaning             |
|---------|------------------|---------------------|
| integer | 28               | A whole number      |
| string  | "hello"          | A string characters |
| float   | 1.256            | a decimal number    |
| object  | { "key": value } | a collection of key-value pairs |

The power of object-oriented data modelling is in that last type. An object can reference other objects. Let's think of modelling a `Person` as an object. Here's a table that lists every who is a `Person`:

**Person**

|row| age    | name    |
|---|--------|---------|
|  1| 52     | "Sarah" |
|  2| 34     | "John"  |

```json
[
  {
    "age": 52, 
    "name": "Sarah"
  },
  {
    "age": 34, 
    "name": "John"
  }
]
```

What happens if another `"Sarah"` shows up? If we wanted to uniquely identify a specific `"Sarah"`, we could add a last name:


|row| age    | First name    | Last name     |
|---|--------|---------------|---------------|
|  1| 52     | "Sarah"       | "Conner"      |
|  2| 34     | "John"        | "Richards"    |
|  3| 52     | "Sarah"       | "Hu"          |

But if there's a big enough group of people, that might not be enough. So, we add unique IDs (UIDs):

|row| age    | First name    | Last name     | UID     |
|---|--------|---------------|---------------|---------|
|  1| 52     | "Sarah"       | "Conner"      | 241324  |
|  2| 34     | "John"        | "Richards"    | 241325  |
|  3| 52     | "Sarah"       | "Hu"          | 241326  |
|  4| 52     | "Sarah"       | "Conner"      | 241327  |

The maximum number of things our model can handle will be the width of the UID. For example, `241327` as a UID is six digits wide, so we can use the numbers from `000000-999999` inclusive, or 1000000 people.

Now, if everybody here had the same job, we'd be repeating ourselves a lot:

**Person**

|row| age    | First name    | Last name     | UID     | Title   | Pay      | Rate     |
|---|--------|---------------|---------------|---------|---------|----------|----------|
|  1| 52     | "Sarah"       | "Conner"      | 241324  | "Clerk" | $20      | "Hourly" |
|  2| 34     | "John"        | "Richards"    | 241325  | "Clerk" | $20      | "Hourly" |
|  3| 52     | "Sarah"       | "Hu"          | 241326  | "Clerk" | $20      | "Hourly" |
|  4| 52     | "Sarah"       | "Conner"      | 241327  | "Clerk" | $20      | "Hourly" |

So, instead, we make a new table for jobs:

**Job**

| Title     | Pay      | Rate     |
|-----------|----------|----------|
| "Clerk"   | $20      | "Hourly" |
| "Janitor" | $25      | "Hourly" |
| "CEO"     | $10000   | "Monthly |

And our original table just needs a reference to the job title:

**Person**

|row| age    | First name    | Last name     | UID     | Title   |
|---|--------|---------------|---------------|---------|---------|
|  1| 52     | "Sarah"       | "Conner"      | 241324  | "Clerk" |
|  2| 34     | "John"        | "Richards"    | 241325  | "Clerk" |
|  3| 52     | "Sarah"       | "Hu"          | 241326  | "Clerk" |
|  4| 52     | "Sarah"       | "Conner"      | 241327  | "Clerk" |

A lot of designs just use UIDs:

**Job**

| UID     | Title     | Pay      | Rate     |
|---------|-----------|----------|----------|
| 8234    | "Clerk"   | $20      | "Hourly" |
| 8235    | "Janitor" | $25      | "Hourly" |
| 8236    | "CEO"     | $10000   | "Monthly |

**Person**

|row| age    | First name    | Last name     | UID     | Job_UID |
|---|--------|---------------|---------------|---------|---------|
|  1| 52     | "Sarah"       | "Conner"      | 241324  | 8234    |
|  2| 34     | "John"        | "Richards"    | 241325  | 8234    |
|  3| 52     | "Sarah"       | "Hu"          | 241326  | 8234    |
|  4| 52     | "Sarah"       | "Conner"      | 241327  | 8234    |

You can have one-to-many relationships, like if someone has two jobs:

**Person**

|row| age    | First name    | Last name     | UID     | Job_UIDs       |
|---|--------|---------------|---------------|---------|----------------|
|  1| 52     | "Sarah"       | "Conner"      | 241324  | 8234, 8235     |

It all depends on your data model. Usually we try to keep a conceptual link between the data model and the real thing we're modelling.

The simplified version of the Specify data model looks like this:
![Specify Model Diagram](attachments/Specify%20Model%20Diagram%20(Overview).png)

A `Collection Object` has a many-to-one relationship with a `Collecting Event`, because, while you can only have a single event during which a specific object is collected, but during a single event, you can collect many objects.

Specify has created many tables that have slots for different values with different types and lengths. 

## Discussion Notes
After the tutorial, we discussed [delimiters and lists](https://en.wikipedia.org/wiki/Delimiter). Sometimes, people like to use large text values and put in their data in big semi-colon delimited lists, like this:

`"Big; round; shiny"`

The value is that you can be very unstructured and quick with your data entry. The problem is that then searching becomes difficult. The more structured the data is, the easier it is to query later. But, the more structured the data, the harder it is to enter it in the database.

We then talked about locations. The general problem identified is that the data model for locations is like a tree:

`Country > Province > City`

But there are other attributes that make locations a bit confusing, such as latitude-longitude values. There were a lot of problems identified with locations, so we decided to make this the major discussion topic of our next meeting.