const cloud = `dkap9vgv4`;

const uploadImage = async (file) => {
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "echoch");
    data.append("cloud_name", cloud);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud}/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const res = await response.json();
    return { link: res.secure_url };
  } catch (err) {
    return { err: err };
  }
};

export default {
  uploadImage,
};
