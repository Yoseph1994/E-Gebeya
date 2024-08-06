// utils.ts or similar utility file

export function base64ToFile(base64Url: string, fileName: string): File {
  const mime = base64Url.match(/^data:(.+);base64/)![1];
  let dataStr = atob(base64Url.split(",")[1]);
  let n = dataStr.length;
  let dataArr = new Uint8Array(n);

  while (n--) {
    dataArr[n] = dataStr.charCodeAt(n);
  }

  return new File([dataArr], fileName, { type: mime });
}
