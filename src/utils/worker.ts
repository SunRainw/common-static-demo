import { createChunk } from "./createChunk";


onmessage = async (e) => {
  // 如果等待每次分片完成，耗费事件过多，可以使用promise.all同时进行分片，拿到最终的结果
  const pArr = [];
  const { file, chunkSize, startIndex, endIndex } = e.data;
  for (let i = startIndex; i < endIndex; i++) {
    pArr.push(createChunk(file, i, chunkSize));
  }
  const chunks = await Promise.all(pArr);
  postMessage(chunks);
};
