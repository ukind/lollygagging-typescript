function someFn(args) {
    if (typeof args === 'string') {
        return args.toUpperCase();
    }
    if (typeof args === 'number') {
        return args.toFixed();
    }
    return args;
}
