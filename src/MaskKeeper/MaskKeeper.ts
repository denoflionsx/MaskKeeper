import { IPlugin, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { MaskKeeperClient } from './MaskKeeperClient';
import { SidedProxy, ProxySide } from 'modloader64_api/SidedProxy/SidedProxy';

class MaskKeeper implements IPlugin {

    ModLoader!: IModLoaderAPI;
    @SidedProxy(ProxySide.CLIENT, MaskKeeperClient)
    clientSide!: MaskKeeperClient;

    preinit(): void {
    }
    init(): void {
    }
    postinit(): void {
    }
    onTick(frame?: number | undefined): void {
    }

}

module.exports = MaskKeeper;