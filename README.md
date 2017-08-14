# WindowDresser

**Generate icons, storefront graphics, screenshots and loading screens for Steam and Mobile**

## Before we get started
1) **You're going to need to install:**
Node.js (https://nodejs.org/en/download/)

2) **Download the WindowDresser zip, and extract it where you like on your computer.**

3) **Run the installer**
double click "install WindowDresser.bat" on windows
double click "install WindowDresser.command" on mac
Type "npm install" in terminal

*This task will take a while to run, as it downloads things. It'll close when it's finished*

---

# How WindowDresser works

1) **Run the compiler:**
double click "create images.bat" on windows
double click "create images.command" on mac
Type "node windowdresser.js" in terminal and press enter

## Icons
Replace the src/icon.png with your own (1024px x 1024px)

## Loading Screens
Replace the src/cover.png with your own (2048px x 2048px)

## Screenshots
Replace the src/screen[1-5].png files with your own
If your source file is portrait, the output will be portrait.

## Storefront Images
Save all of your individual elements as high-res PNG files
Edit the config.json file
Each "layer" in the file can have the following properties:
**file** - the path of the image file
**align** - the position to align the image to:

> **tl**	- align the layer to the top left
> **t**		- align the layer to the top
> **tr**	- align the layer to the top right
> **l**		- align the layer to the left
> **c**		- align the layer to the center
> **r**		- align the layer to the right
> **bl**	- align the layer to the bottom left
> **b**		- align the layer to the bottom
> **br**	- align the layer to the bottom right

**offsetX**: - offsets the image from the align point - if the value is between -1 and 1, it's interpreted as a percentage, otherwise as pixels
**offsetY**: - offsets the image from the align point - if the value is between -1 and 1, it's interpreted as a percentage, otherwise as pixels
**scaleX**: accepts a value between 0 and 1, scales the layer according to a percentage of the image width
**scaleY**: accepts a value between 0 and 1, scales the layer according to a percentage of the image height

*Layers are assembled from back to front.*