import axios from "axios";

const upload = async (file) => {
    try {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "fiverr");
        const res = await axios.post("https://api.cloudinary.com/v1_1/dimpfusov/image/upload", data);
        const { url } = await res.data;
        return url;
        
        // const fileUrl = await res.json();
        // return fileUrl.secure_url;
    } catch (err) {
        console.log(err);
    }
}

export default upload;