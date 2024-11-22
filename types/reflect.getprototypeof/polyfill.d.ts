declare module 'reflect.getprototypeof/polyfill' {
    function getPolyfill(): typeof Reflect.getPrototypeOf;

    export = getPolyfill;
}
