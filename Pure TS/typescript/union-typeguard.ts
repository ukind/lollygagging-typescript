function someFn(args: number | string | boolean) {
  if (typeof args === 'string') {
    return args.toUpperCase();
  }
  if (typeof args === 'number') {
    return args.toFixed();
  }
  return args;
}
