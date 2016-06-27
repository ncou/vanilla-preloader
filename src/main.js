class VanillaPreloader {
    /**
     * Constructor.
     *
     * @param  {Array}    images
     * @param  {Callback} callback
     */
    constructor(images, callback) {
        if (!images) {
            return
        }

        this.images       = images
        this.callback     = callback
        this.loadedImages = []

        this.start()
    }

    /**
     * Start loading the images.
     */
    start() {
        let _this = this

        this.images.forEach(function (image) {
            var imgElement     = new Image
            imgElement.src     = image
            imgElement.onload  = _this.loaded(image)
        })
    }

    /**
     * Called when an image is loaded.
     *
     * @param {String} image URL of the loaded image.
     */
    loaded(image) {
        this.loadedImages.push(image)

        if (!this.imagesFinishedLoading()) {
            return
        }

        if (!this.callback) {
            return
        }

        this.callback(this.loadedImages)
    }

    /**
     * Check if all images have finished loading.
     *
     * @return {Bool}
     */
    imagesFinishedLoading() {
        return this.loadedImages.length == this.images.length
    }
}

window.VanillaPreloader = VanillaPreloader
