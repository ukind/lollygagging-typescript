// record<key, value>

interface IArtistBio {
  name: string;
  age: number;
}

const song: Record<number | string, IArtistBio> = {
  12: {
    name: 'Bob Dylan',
    age: 45,
  },
  'The Used': {
    name: 'Bert McCracken',
    age: 45,
  },
};

song[12];
song['The Used'];
