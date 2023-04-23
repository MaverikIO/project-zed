

/**
 * Menu item actions are just callback functions
 */
export type MenuItemAction = (...args:any[]) => any

/**
 * Menu items parameters can be passed in to the MenuItem constructor
 */
export interface MenuItemParams {
    name?: string;
    indicator?: string;
}

/**
 * Abstraction for describing a menu item
 */
class MenuItem {
    name: string;

    constructor( 
        public label: string, 
        public action?: MenuItemAction, 
        public params?: MenuItemParams ) {
        
        if ( params ) Object.assign( this, params )
    }

    /**
     * Execute the action callback function
     */
    async execute() {
        await this.action.call(undefined)
    }
}

/**
 * Abstraction for describing a menu and it's state
 */
export class Menu {

    items: MenuItem[] = []

    selectedIndex: number = -1

    get selectedItem() {
        if ( this.selectedIndex === -1 ) return undefined
        else return this.items[this.selectedIndex]
    }

    /**
     * Create and add a menu item to the menu
     * @param label Label for the menu item
     * @param action Callback for the menu item
     */
    item( label: string, action: MenuItemAction ): this
    item( label: string, action: MenuItemAction, params: MenuItemParams ): this
    item( label: string ): this
    item( label: string, action?: MenuItemAction, params?: MenuItemParams ): this {
        const item = new MenuItem( label, action, params )
        this.items.push( item )
        return this
    }

    /**
     * Select a menu item
     * @param item The menu item to select
     */
    selectItem( item: MenuItem ): this {
        if ( item === undefined || item === null ) {
            this.selectedIndex = -1
        }
        else {
            const index = this.items.indexOf( item )
            if ( index === -1 ) throw new Error(`Could not find menu item '${item.label}'`)
            this.selectedIndex = index
        }
        return this
    }

    /**
     * Select a menu item by index
     * @param index The menu item index to select
     */
    selectIndex( index: number ): this {
        if ( index > this.items.length - 1) {
            throw new Error(`Could not set selected index to ${index}, exceeds number of menu items`)
        }
        this.selectedIndex = index
        return this
    }

    /**
     * Execute the callback associated with the currently selected menu item
     */
    async execute() {
        await this.selectedItem?.execute()
    }

}