
import { ActionDescriptor } from './action';
import { BackendDescriptor } from './backend';
import { ControllerDescriptor } from './controller';
import { AspectDescriptor } from './aspect.descriptor';

import { include } from '@agape/object';
/**
 * Provide a stub descriptor that property decorators can attach to during
 * class construction time; before the actual Backend or Controller descriptors
 * are available.
 */
export interface StubDescriptor extends BackendDescriptor, ControllerDescriptor{ }
@include(BackendDescriptor, ControllerDescriptor)
export class StubDescriptor {

    actions: Map<string, ActionDescriptor> = new Map()

    constructor( public target: any ) {

    }

    static descriptor( target:any, create:boolean=false ) {
        if ( typeof target === "function" ) target = target.prototype

        let descriptor: StubDescriptor = Reflect.getMetadata( "stub:descriptor", target )

        if ( ! descriptor && create===true ) {
            descriptor = new StubDescriptor( target )
            Reflect.defineMetadata("stub:descriptor", descriptor, target)
        }

        return descriptor
    }

    finalize( component: AspectDescriptor ) {

        Reflect.deleteMetadata("stub:descriptor", this.target)
    }

    finalizeBackend( backend: BackendDescriptor ) {
        for ( const [name, operation] of this.operations.entries() ) {
            backend.operations.set(name, operation)
        }
    }

    finalizeController( controller: ControllerDescriptor ) {
        for ( const [name, action] of this.actions.entries() ) {
            controller.actions.set(name, action)
        }
    }


}
