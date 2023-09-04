import { createChunk } from "./createChunk";

const THREAD_COUNT = navigator.hardwareConcurrency || 4; // 设置为电脑最大线程数

export const curFileWebWork = (file: File, chunkSize: number) => {
  return new Promise((resolve) => {
    const result: any = [];
    const chunkCount = Math.ceil(file.size / chunkSize);
    const workerChunkCount = Math.ceil(chunkCount / THREAD_COUNT);
    let finishCount = 0;
    for (let i = 0; i < THREAD_COUNT; i++) {
      // 创建worker线程
      const worker = new Worker(new URL("./worker.ts", import.meta.url), {
        type: "module",
      });
      // 计算每个线程处理文件的起始值
      const startIndex = i * workerChunkCount;
      const endIndex = Math.min(startIndex + workerChunkCount, chunkCount);
      // 向线程发送执行任务需要的参数，线程文件使用onmessage接收参数（e.data中）
      worker.postMessage({
        file,
        chunkSize,
        startIndex,
        endIndex,
      });
      // 当线程任务执行完毕，会使用postMessage发回数据，此时使用onmessage进行接收，并将文件分片组合，最后关闭线程
      worker.onmessage = (e) => {
        for (let i = startIndex; i < endIndex; i++) {
          result[i] = e.data[i - startIndex];
        }
        worker.terminate();
        finishCount++;
        // 统计线程执行完毕的数量，当所有线程都执行完毕，就将分片结果resolve
        if (finishCount === THREAD_COUNT) {
          resolve(result);
        }
      };
    }
  });
};

export const curFileNormal = async (file: File, chunkSize: number) => {
  const result: any = [];
  const chunkCount = Math.ceil(file.size / chunkSize);
  for (let i = 0; i < chunkCount; i++) {
    const chunk = await createChunk(file, i, chunkSize);
    result.push(chunk);
  }
  return result;
};

const unitArray = [
  "B",
  "KB",
  "MB",
  "GB",
  "TB",
  "PB",
  "EB",
  "ZB",
  "YB",
] as const;

type TUnit = (typeof unitArray)[number];

interface IStorage {
  number: number;
  unit: TUnit;
}
export function formatStorageNumberToObj(
  size: number,
  decimal: number = 0
): IStorage {
  const base = 1024;

  const formatResult: IStorage = { number: size, unit: "B" };
  const index = Math.floor(Math.log(size) / Math.log(base));

  formatResult.unit = unitArray[index];
  formatResult.number = Number((size / Math.pow(base, index)).toFixed(decimal));
  return formatResult;
}
