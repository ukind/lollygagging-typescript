// generic interface
interface ISpeak<T> {
  shout: T;
  whisper(d: T): T;
}

const mounth: ISpeak<string> = {
  shout: 'ayeeee',
  whisper: (word: string): string => word,
};

mounth.whisper('ahoy');

interface filterX {
  <N, AR>(nominal: N, element: AR[]): AR[];
}

function filterNumber<N, AR>(searchValue: N, rawArr: AR[]): AR[] {
  const test = rawArr.filter((el) => Number(el) > Number(searchValue));
  return test;
}

const higherThan4: filterX = filterNumber;
const item: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result: number[] = higherThan4<number, number>(4, item);
console.log(result);
