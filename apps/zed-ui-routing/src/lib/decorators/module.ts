import { Class } from "@agape/types"
import { ModuleDescriptor } from "../descriptors/module"
import { Component } from "./component"
import { AppComponent } from "../../app/app.component"
import { ModuleImportDescriptor } from "../interfaces/module-import-descriptor"


export interface ModuleParams {
    declares?: Class[]
    provides?: Class[]
    imports?: Array<Class|ModuleImportDescriptor>
    exports?: Class[]
    bootstrap?: Class
}

export function Module( params?: ModuleParams ) {
    return function ( target: any ) {

        const descriptor = Module.descriptor(target, true )

        /* perform some validation */
        if ( params?.imports ) {
            /* validate that import params are modules */
            for ( let importDescriptor of params.imports ) {

                const module = importDescriptor instanceof Function ? importDescriptor : importDescriptor.module
                const moduleDescriptor = Module.descriptor(module)
                /* throw an error if not a module */
                if ( ! moduleDescriptor ) 
                    throw new Error(`Invalid argument to 'imports', ${module.name} is not a Module`)

                const d = importDescriptor as ModuleImportDescriptor
                if ( d.routes ) {
                    descriptor.routes = [...(descriptor.routes || []), ...d.routes ]
                }
            }
        }
        /* perform some validation */
        if ( params?.declares ) {
            /* validate declare params are components  */
            for ( let component of params.declares ) {
                const controllerDescriptor = Component.descriptor(component)
                /* throw an error if not a component */
                if ( ! controllerDescriptor ) 
                    throw new Error(`Invalid argument to 'declares', ${component.name} is not a Component`)
            }
        }

        /* perform some validation */
        if ( params?.bootstrap ) {
            /* validate that constructor params are injectable services */
            let component = params.bootstrap

            const controllerDescriptor = Component.descriptor(component)
            /* throw an error if not a service */
            if ( ! controllerDescriptor ) 
                throw new Error(`Invalid argument to 'bootstrap', ${component.name} is not a Component`)
        }

        /* assign any parameters on the descriptor from the decorator params */
        if ( params ) Object.assign(descriptor, params)

        return target
    }
}

Module.descriptor = function ( target: any, create=false ) {

    let targetClass = target 
    if ( typeof target === "function" ) {
        target = target.prototype
    }
    else {
        targetClass = target.constructor
    }

    let descriptor: ModuleDescriptor = Reflect.getMetadata('ui:module:descriptor', target)

    if ( ! descriptor && create === true ) {
        descriptor = new ModuleDescriptor( targetClass )
        Reflect.defineMetadata("ui:module:descriptor", descriptor, target)
    }

    return descriptor
}