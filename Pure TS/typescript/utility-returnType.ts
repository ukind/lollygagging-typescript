const sample = () => 'Hello World';
const sampleObject = (): { name: string } => ({
  name: 'hisana',
});

type sampleType = ReturnType<typeof sample>;
// return : string

type sampleObj = ReturnType<typeof sampleObject>;
// return : object
