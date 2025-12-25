/**
 * ImageCropService.js
 * Service complet pour le rognage automatique d'images en React
 */

const autoCropCanvas = (url, targetWidth, targetHeight) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute("crossOrigin", "anonymous"); 
    img.src = url;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const imgRatio = img.width / img.height;
      const targetRatio = targetWidth / targetHeight;
      let sx, sy, sWidth, sHeight;

      if (imgRatio > targetRatio) {
        sWidth = img.height * targetRatio;
        sHeight = img.height;
        sx = (img.width - sWidth) / 2;
        sy = 0;
      } else {
        sWidth = img.width;
        sHeight = img.width / targetRatio;
        sx = 0;
        sy = (img.height - sHeight) / 2;
      }

      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, targetWidth, targetHeight);
      canvas.toBlob((blob) => {
        if (blob) resolve(URL.createObjectURL(blob));
        else reject(new Error("Erreur conversion Blob"));
      }, "image/jpeg", 0.9);
    };
    img.onerror = () => reject(new Error(`Erreur chargement : ${url}`));
  });
};

import { useState, useEffect } from 'react';

export const useAutoCrop = (urls, width = 400, height = 400) => {
  const [croppedImages, setCroppedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!urls || urls.length === 0) return;
    let isMounted = true;
    setLoading(true);

    const processImages = async () => {
      try {
        const promises = urls.map(u => autoCropCanvas(u, width, height));
        const results = await Promise.all(promises);
        if (isMounted) {
          setCroppedImages(results);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) setLoading(false);
      }
    };

    processImages();
    return () => {
      isMounted = false;
      croppedImages.forEach(url => URL.revokeObjectURL(url));
    };
  }, [urls, width, height]);

  return croppedImages;
};