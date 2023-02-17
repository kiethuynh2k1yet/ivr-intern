export const service = {
  getImageBase64: (url, ratio = 1) => {
    return new Promise((resolve, reject) => {
      var c = document.createElement("canvas");
      var ctx = c.getContext("2d");
      var img = new Image();
      img.src = url;
      img.onload = function (e) {
        c.width = this.naturalWidth * ratio;
        c.height = this.naturalHeight * ratio;
        ctx.drawImage(this, 0, 0, c.width, c.height);
        var base64String = c.toDataURL();
        resolve(base64String);
      };
    });
  },

  base64convert: (url) => {
    return new Promise((resolve) => {
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve(e.target.result);
          };
          reader.readAsDataURL(blob);
        });
    });
  },
};
