---
title: Learning how to batch edit for the first time
date: 2025-07-09
authors: [phb]
slug: learning-to-batch-edit
description: >
    Batch edits are included in the latest Specify.
categories:
  - General
---

Notes from today's Specify 7.11 release with the new Batch Edit feature:

- Queries are required to be saved before running a batch edit
- There is a limit to the number of characters in a SEM# query (likely same as Acession#, 65 000 chars)
- Validation is required before committing, revalidation is applied to all cells again after error fixing (I've requested this be limited to modified cells)
- After a commit it asks you to potentially create a Record Set (big blue button), but this is not necessary to make the commit complete. You can just press close.
- There is only one worker for uploads (running a separate docker instance) so it stops other users from uploading
- I broked the Entomology updates into batches of 3000 on Excel by just highlighting the cell I'm currently on. It's slow and annoying and I'll consider using the API later, but for now it's probably useful to go through a frustrating process to work out the bugs for end users.
- Highlighting became annoying, so I ended up making a column on the far right and put an "X" in it, scrolled 3000 cells down, put another "X" there, then, pressed command-up to get to the first "X", paste overtop of the second "X", so it basically gave me an automatic 3000 cell length marker.
- Copied the SEM#s into a text document and find-replaced return with comma to get into the SEM In field
- Queries -> New -> `<Make the query>` -> Save Query -> `<Paste in changes>` -> Validate -> Fix Errors -> Validate -> Commit
- This scary-looking message:
> Commiting the Data Set will update, add, and delete the data from the spreadsheet to the Specify database.
actually means "overwrite" for delete.
- I can press back on the Batch Edit results page and get back to the query non-destructively
- Longer pastes than existing cells in the Batch Editor seem to just cut off extra values, no warning or overwrite that I can see.
- I'm spot-checking data alignment using Excel's Go To command (e.g., ctrl-G A1003)
- Made a secondary batch edit sheet next to my current active Excel sheet to prep the current batch paste.
- Ended up writing a script to chunk the file:
```vb
Sub SplitSheetIntoChunks_OneBased()
    Dim wsSource As Worksheet
    Dim wb As Workbook
    Dim lastRow As Long
    Dim chunkSize As Long
    Dim i As Long
    Dim wsNew As Worksheet
    Dim startRow As Long
    Dim endRow As Long
    
    Set wb = ThisWorkbook
    Set wsSource = wb.Sheets("all-records") ' <-- change if needed
    chunkSize = 3000

    ' Get last row in column A
    lastRow = wsSource.Cells(wsSource.Rows.Count, 1).End(xlUp).Row

    For i = 1 To lastRow Step chunkSize
        Set wsNew = wb.Sheets.Add(After:=wb.Sheets(wb.Sheets.Count))
        
        startRow = i
        endRow = Application.Min(i + chunkSize - 1, lastRow)

        wsNew.Name = CStr(startRow) & "-" & CStr(endRow)
        
        ' Copy the chunk (no header)
        wsSource.Rows(startRow & ":" & endRow).Copy _
            Destination:=wsNew.Rows(1)
    Next i

    MsgBox "Done! Split into 3000-row chunks."
End Sub
```
- Unclear whether the query has cross references