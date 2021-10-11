import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { MaskKeeperClient } from './MaskKeeperClient';
import { SidedProxy, ProxySide } from 'modloader64_api/SidedProxy/SidedProxy';

export default class MaskKeeper {

    ModLoader!: IModLoaderAPI;
    @SidedProxy(ProxySide.CLIENT, MaskKeeperClient)
    clientSide!: MaskKeeperClient;

}