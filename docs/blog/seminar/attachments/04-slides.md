---
marp: true
theme: custom
---


# Why Markup Languages?
Sometimes, we need to embed data in our text. Usually, we choose an uncommon character sequence to denote a special command, like make this bold:

```html
<b>Hello</b> everybody!
```

```md
**Hello** everybody!
```

---
# XML and HTML
XML (eXtensible Markup Langauge) and HTML (HyperText Markup Language) use a syntax of tags:

```html
<tag>content</tag>
```

The inside **content** is read as text, and the **tag** is the instruction to the compiler.

--- 
# Attributes
The tag might also have attributes. For example, the `<a>` tag is a link. But, we need a reference point `href` to link (anchor) to:

```html
<a href="https://beatymuseum.ubc.ca">The Beaty Website</a>
```

<br />
<br />
<br />

<small>Why `<a>` and not `<l>`? The anchor is at the end of the link, and also refers to links within a page.</small>


---
# Styles
A special type of attribute is the `style`.

```html
<span style="color: red">Hello</span>, world!

```
<span style="color: red">Hello</span>, world!


---
# HTML pages

An HTML page is just a text file with a special markup structure. It is convention to indent tags so that it's easier to read.

```html
<html>
    <body>
        Hello, world!
    </body>
</html>
```

Copy the above into a text file (using Notepad or TextEdit) and save with a `.html` extension rather than `.txt` then open with a browser.

---
# Play with HTML tags
Here are some HTML tags. Try using them to make your own content.

<!-- class: split -->

- Tags

    ```html
    <h1>Heading</h1>
    <p>Paragraph</p>
    <ul>Unordered list</ul>
    <ol>Ordered list</ol>
    <li>List item</li>
    ```

- Example
    ```html
    <h1>This is my grocery list</h1>
    <p>Groceries</p>
    <ul>
        <li>Bananas</li>
        <li>Tahini</li>
    </ul>
    <p>Stores</p>
    <ol>
        <li>Save-on</li>
        <li>Donald's</li>
    </ol>
    ```

---
# Example from Specify
<!-- class: split -->
- Example
    ```html
    <viewdef name="Collection Object" >
        <desc>The Collection Object form</desc>
        <rows>
            <row>
                <cell 
                    type="label" labelfor="1" 
                    label="Catalog Number" />
                <cell 
                    type="field" id="1" 
                    name="catalogNumber"
                    uitype="formattedtext" />
            </row>
            <row>
                <cell 
                    type="label" labelfor="4" 
                    label="Cataloger" />
                <cell 
                    type="field" 
                    id="4" name="cataloger" 
                    uitype="querycbx" isrequired="true" />
            </row>
        </rows>
    </viewdef>
    ```
- Tags
    ```html
    <viewdef> View definition
    <desc> Description
    <rows> A container for rows
    <row> A single row
    <cell> A single cell
    ```

---
# Other Markup Language Uses

<!-- class: split -->

- A Word doc is XML in a compressed folder.
    ```tree
    └── Unzipped Informatics Report
        ├── [Content_Types].xml
        ├── _rels
        ├── docProps
        │   ├── app.xml
        │   └── core.xml
        └── word
            ├── _rels
            │   └── document.xml.rels
            ├── document.xml
            ├── fontTable.xml
            ├── settings.xml
            ├── styles.xml
            ├── theme
            │   └── theme1.xml
            └── webSettings.xml
    ```
- Example from `document.xml`
    ```xml
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <w:body>
    <w:t>Informatics Report</w:t>
    <w:t>Automatic Backup System</w:t>
    <w:t>Until now, backups were done...</w:t>
    </w:body>
    ```