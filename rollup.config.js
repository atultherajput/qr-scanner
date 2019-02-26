import sourcemaps from 'rollup-plugin-sourcemaps';
import closureCompiler from '@ampproject/rollup-plugin-closure-compiler';

export default [{
    // library
    input: 'src/qr-scanner.js',
    output: {
        file: 'dist/qr-scanner-es6.min.js',
        format: 'esm',
        interop: false,
        sourcemap: true,
    },
    plugins: [
        closureCompiler({
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT6',
            rewrite_polyfills: false,
        })
    ]
}, {
    // worker
    input: 'src/worker.js',
    output: {
        file: 'dist/qr-scanner-worker-es6.min.js',
        format: 'iife',
        interop: false,
        sourcemap: true,
    },
    plugins: [
        sourcemaps(),
        closureCompiler({
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT6',
            rewrite_polyfills: false,
        }),
    ]
}, {
    // library
    input: 'src/qr-scanner.js',
    output: {
        file: 'dist/qr-scanner-es5.min.js',
        format: 'esm',
        interop: false,
        sourcemap: true,
    },
    plugins: [
        closureCompiler({
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            rewrite_polyfills: false,
        })
    ]
}, {
    // worker
    input: 'src/worker.js',
    output: {
        file: 'dist/qr-scanner-worker-es5.min.js',
        format: 'iife',
        interop: false,
        sourcemap: true,
    },
    plugins: [
        sourcemaps(),
        closureCompiler({
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            rewrite_polyfills: false,
        }),
    ]
}];
