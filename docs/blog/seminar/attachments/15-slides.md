---
marp: true
theme: custom
---

# Image Segmentation
Digitization at the Beaty often just means inputing text and numerical data to create a record. The goal is to get all of our specimens not only recorded but imaged.

Today we'll talk about imaging and how AI can use images to support databasing.

---
## Imaging at the Beaty
Imaging at the Beaty can mean lots of different things. There are many processes and considerations:
- Camera type and setup
- Lighting type and setup
- Staging (fixtures, color correction, measurement, etc.)
- Object standardization and prep
- Object size and dimensions
- Object movement and indexing


---
## Setup for Vascular and Algae
Here is an example of the Vascular and Algae imaging setup.
![w:500px vascular-setup-1](assets/vascular-setup-1.jpg) ![w:282px vascular-setup-2](assets/vascular-setup-2.jpg)


---
## Setup for Bryophytes
Here is an example of the Bryophytes imaging setup.
![w:500px bryo-setup-1](assets/bryo-setup-1.jpg) ![w:500px bryo-setup-2](assets/bryo-setup-2.jpg)


---
## Microscopy
Entomology uses a microscope as a camera with a light ring (image similar but not exact):
![w:500px microscope](assets/microscope.jpg)


---
## 3D Imaging
Tetrapods are starting to make use of 3D imaging with combined laser and RGB setups and turntable autoindexing:
![w:500px turntable](assets/turntable.jpg)


---
## Indexing and Fixtures
Setups usually require staging 
elements to index color and measurements.
![bg w:550px right:50% vascular-specimen-fixtures](assets/vascular-specimen-fixtures.jpg)


---
## Standarization and Prep
Some collections have standard sheet or package sizes:
![w:500px vascular-specimen](assets/vascular-specimen.jpg) ![w:500px bryo-specimen](assets/bryo-specimen.jpg)
But some do not, since their specimens might be of any size.


---
## Image Concepts: RGB
Most images are RGB raster images. That means that each pixel includes brightness values for `Red`, `Green`, and `Blue` LEDs that make up your screen.

![w:500px lcdrgb](assets/lcdrgb.jpg) ![w:300px bayer](assets/bayer.png) ![w:300px camera-sensor](assets/camera-sensor.png) 


---
## Image Concepts: Depth Map
Some images are depth maps where pixel brightness corresponds to a distance from the camera.
![w:400px depth](assets/depth.webp) ![bg w:600px right:50% texture](assets/texture.ppm) 


---
## Image Concepts: Complex Imaging
Some imaging processes, like RTI, take tens or hundreds of images to be interactively reconstructed later.

https://vcg.isti.cnr.it/~palma/webrtiviewer/viewercoin.html


By the way, I want one of these domes! https://www.rti-dome.com/


---
## Image Processing
With AI, we can now label sections of an image easily. Using a simple prompt like `"plant specimen"` or `label` we can get the following:

![w:500px V062710](assets/V062710.png) ![w:500px mask](assets/mask.png) 



---
## Demo
