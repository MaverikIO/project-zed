
import { keypress } from '@lib/terminal'

export class EnterToContinueComponent {

    async run() {
        console.log("\n" + "  ⏎ Press Enter to Continue" + "\n")
        await keypress('return')
    }


}