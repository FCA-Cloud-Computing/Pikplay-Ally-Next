/* eslint-disable import/no-unresolved */
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { app, storage } from "../lib/firebase";

async function uploadFileSrv(entity, file, folder = "undefined") {
  debugger;
  try {
    // Crea una referencia al archivo en el storage
    const storageRef = ref(storage, `${entity}/${folder}/${file.name}`);
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

export default uploadFileSrv;
