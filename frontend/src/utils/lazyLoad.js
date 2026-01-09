import { lazy } from "react";

export function lazy (path, namedExport) {
    const promise = lazy.import(path)
    if (namedExport == null) {
        return promise;
    } else {
        return promise.then(module => ({ default : module[namedExport] }))
    }
}