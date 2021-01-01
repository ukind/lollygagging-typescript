(function () {
  interface IArtist {
    name: string;
    label: string;
    releaseData: number;
  }

  // pick only needed key of interface
  //   only available in interface
  const dataWithOnlyName: Pick<IArtist, 'name'> = {
    name: 'Bert McCracken',
  };
  // { name: 'Bert McCracken' }
}());
