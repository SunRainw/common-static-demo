import SparkMd5 from "spark-md5";
export const createChunk = (file: File, index: number, chunkSize: number) => {
  return new Promise((resolve) => {
    const start = index * chunkSize; // 分片开始的位置
    const end = Math.min(start + chunkSize, file.size); // 分片结束的位置
    const spark = new SparkMd5.ArrayBuffer();
    const fileReader = new FileReader(); // 文件读取器
    fileReader.onload = (e: ProgressEvent<FileReader>) => {
      spark.append(e.target?.result as ArrayBuffer);
      resolve({
        start,
        end,
        index,
        hash: spark.end(),
      });
    };
    fileReader.readAsArrayBuffer(file.slice(start, end)); // 读取对应位置的文件片段
  });
};