---
marp: true
theme: custom
---

# Automated Publishing
Right now, collections publish by request. New data does not automatically propagate to GBIF. Both sides of the Herbarium requested automatic publishing. Here's how that works, and why you might consider it.


--- 
## What is GBIF?
GBIF is the Global Biodiversity Information Facility. 
- GBIF is an `index` of locations for biodiversity data. 
- GBIF also provides some data downloading services.


--- 
## Does GBIF have my data?
Sort of. They have an `index` of your data.
- An `index` is not a `host`. Someone else stores your data and provides it to the world.
- GBIF provides an easy way to find and download your data from the `host`.


--- 
## Canadensys: a GBIF IPT
In the Beaty's case, Canadensys, a non-profit organization, hosts our text-based data.
- IPT means integrated publishing toolkit
- They "hold" our data for us, but we update the data and press publish


---
## What about images?
Our images are very large and Canadensys can't host them. We make small copies instead and host them on a Content Delivery Network. GBIF indexes those, too.


--- 
## Why can we do this automated publishing only now?
We needed a few service architectures in place. Now that Paul can control **apps.beatymuseum.ubc.ca**, we have the ability to make arbitrary web services, e.g.:
- https://apps.beatymuseum.ubc.ca/labels
- https://apps.beatymuseum.ubc.ca/ocr
- https://apps.beatymuseum.ubc.ca/map
- https://apps.beatymuseum.ubc.ca/metadata
- https://apps.beatymuseum.ubc.ca/data

---
## What is the metadata service?
Go to https://apps.beatymuseum.ubc.ca/metadata to follow along.

The metadata service:
1. Pulls your schema from Specify once per day
2. Updates this website
3. Allows you to search as a user. 

But the computational power is in the lookup service (demo).

---
## Why did we need a metadata service?
Previously, there was no way to resolve internal Specify names and descriptions. Different features used different naming schemes.

The practical upshot for you is:
1. You can look up your schema "live" (with a day of a change)
2. You can look up complex things like XML tags.

---
## What is the data service?
Go to https://apps.beatymuseum.ubc.ca/data to follow along.

The data service:
1. Reads your DWCA query
2. Reconciles your query with Bunny and DWCA
3. Publishes your data on a Beaty-controlled site
4. Allows Canadensys to pull from our site

---
## Why did we need a data service?
Previously, there was no way to make our fully-resolved data public, so Canadensys only could use direct uploads. Now, we can say "pull from this URL every so often". Practical upshot:
1. You can control the shape of your published data (mostly) yourself with a query.
2. You can inspect the published data directly instead of going through Paul.

---
## Why should I care?
Getting all publication automated would help:
1. Make Specify and GBIF look more like each other
2. Force us to be disciplined about data cleanliness and upload processes
3. Allow us to answer questions from the public about why data does or does not show up
4. Provide live analysis and reporting tools ontop of our data

---
## What do I need to do to get my data publication automated?
1. Work with Paul to confirm that you have a DWCA export query that you're happy with.
2. Ensure that your GBIF metadata is up to date.
3. Do a test automated publication with Paul and review.
4. Set an update schedule.