import { lazy } from "react";

export function lazyLoad (path, namedExport) {
    const promise = lazy.import(path)
    if (namedExport == null) {
        return promise;
    } else {
        return promise.then(module => ({ default : module[namedExport] }))
    }
}