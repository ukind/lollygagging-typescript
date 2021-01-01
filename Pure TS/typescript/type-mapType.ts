// convert string type to object type
type color = 'red' | 'green';
type mapColor = {
  [P in color]: string | boolean;
};
// it becomes:
// type mapColor = {
//     red: string | boolean;
//     green: string boolean;
// }

// ===============================
// set properties of type by copying
type forthColor = 'white' | 'brown';
type mapThirdColorPropertiesWithValue<forthColor> = {
  [key in keyof forthColor]: forthColor[key];
  //   [key in keyof forthColor]: forthColor[key] | null; => make it nullable
  //   [key in keyof forthColor]?: forthColor[key]; => make properties optional
  //   readonly [key in keyof forthColor]: forthColor[key]; => make properties readonly
};

type colorWithExactPropertiesAndValue = mapThirdColorPropertiesWithValue<{
  nama: 'nama';
  umur: 'umur';
}>;
