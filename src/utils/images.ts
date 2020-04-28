export function getBase64(img: File | Blob): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(img)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
