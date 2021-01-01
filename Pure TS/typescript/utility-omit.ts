(function () {
  // only omit only availble in interface
  interface IArtistOmited {
    name: string;
    label: string;
    releaseData: number;
  }

  // remove interface key based on second parameter
  // only available in interface
  const dataWithoutName: Omit<IArtistOmited, 'name'> = {
    label: 'sangkun',
    releaseData: 2005,
  };
}());
