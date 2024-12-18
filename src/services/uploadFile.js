import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { app, storage } from "@/lib/firebase";

async function uploadFile(file, folder = "userNoDefined") {
  try {
    // Crea una referencia al archivo en el storage
    const storageRef = ref(storage, `invoices/${folder}/${file.name}`);
    // Sube el archivo
    const snapshot = await uploadBytes(storageRef, file);

    // Obtén la URL de descarga del archivo subido
    const downloadURL = await getDownloadURL(snapshot.ref);

    console.log("Archivo subido exitosamente. URL:", downloadURL);
    return downloadURL;
  } catch (error) {
    console.error("Error al subir archivo:", error);
    throw error;
  }
}

export default uploadFile;
