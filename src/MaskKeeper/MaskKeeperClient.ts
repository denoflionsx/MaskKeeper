
import { InjectCore } from 'modloader64_api/CoreInjection';
import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { ModLoaderAPIInject } from 'modloader64_api/ModLoaderAPIInjector';
import { EventHandler } from 'modloader64_api/EventHandler';
import { IZ64Main } from 'Z64Lib/API/Common/IZ64Main';
import { AgeOrForm, Z64Events } from 'Z64Lib/API/Common/Z64API';

export class MaskKeeperClient {

    @ModLoaderAPIInject()
    ModLoader!: IModLoaderAPI;
    @InjectCore()
    core!: IZ64Main;

    @EventHandler(Z64Events.ON_SCENE_CHANGE)
    onSceneChange(scene: number) {
        if (this.core.OOT!.save.age !== AgeOrForm.CHILD && !this.ModLoader.isModLoaded("ChildGear")) {
            return;
        }
        let c_buttons: Buffer = this.ModLoader.emulator.rdramReadBuffer(global.ModLoader.save_context + 0x0068, 0x4);
        let mask = 0;
        for (let i = 0; i < c_buttons.byteLength; i++) {
            if (c_buttons[i] >= 0x24 && c_buttons[i] <= 0x2B) {
                // This is a mask.
                mask = c_buttons[i] - 0x23;
            }
        }
        this.core.OOT!.link.mask = mask;
    }

}