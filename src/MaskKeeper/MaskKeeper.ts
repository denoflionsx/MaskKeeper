import { IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { MaskKeeperClient } from './MaskKeeperClient';
import { SidedProxy, ProxySide } from 'modloader64_api/SidedProxy/SidedProxy';
import { Z64_GAME } from "Z64Lib/src/Common/types/GameAliases";
import { Z64LibSupportedGames } from "Z64Lib/API/Utilities/Z64LibSupportedGames";

export default class MaskKeeper {

    ModLoader!: IModLoaderAPI;
    @SidedProxy(ProxySide.CLIENT, MaskKeeperClient, "Z64Lib", () => { return Z64_GAME === Z64LibSupportedGames.OCARINA_OF_TIME })
    clientSide!: MaskKeeperClient;

}