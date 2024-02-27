const cancellable = (fn, args, t) => {
    const timeout = setTimeout(fn, t, ...args);
    return () => clearTimeout(timeout);
}