# Slidey McShowington

Life's easier when it takes place against a backdrop of soothing GIFs.

Create a webpage, the background of which is a GIF provided via the Giphy API, that follows a theme chosen by the user. The user chooses their theme by typing in a text field and hitting `return`.

Please touch only the `slidey_js.js` file.

See how far you can get through the "thens" below!

## Then...

Make it so that when the image is changing, the old image fades out, and the new image fades in.

## Then...

Make it so that the image changes on its own every 5 seconds or so.

## Then...

*(From this point forward, you can touch the `slidey.html` file, too!)*

Make it so the user can stop the slideshow.

## Then...

Make it so the user can change how much time passes between slides, and/or how the slides transition.

## Then...

GIFs can be pretty memory-heavy and may not load right away. Try to set up the timing of your API calls so that the slideshow isn't interrupted due to images not having loaded.

---

## The Giphy API

```
http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg&tag=funny+cat
```

To use the API, just replace `funny+cat` with the search terms you want.

Note that the API returns a JSON string, which you'll need to parse in order to get the URL of the image you want.

More documentation is available here:

https://github.com/Giphy/GiphyAPI
