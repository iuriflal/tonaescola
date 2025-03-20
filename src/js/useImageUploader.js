import { useState } from "react";

const useImageUploader = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  // Tamanho máximo permitido (40x40 pixels)
  const maxWidth = 40;
  const maxHeight = 40;

  // Manipula a escolha da imagem
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const img = new Image();
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > maxWidth || img.height > maxHeight) {
          setError(`A imagem deve ter no máximo ${maxWidth}px ${maxHeight}px.`);
          setImage(null);
        } else {
          setImage(img.src);
          setError(""); // Limpa o erro
        }
      };
    }
  };

  return { image, error, handleImageChange };
};

export default useImageUploader;