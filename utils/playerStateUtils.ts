import { PlayerPresetData, getEmptyPlayerPresetData } from "../models/PlayerPresetData";

abstract class PlayerStateUtils
{
    public static getNewPlayerPresetsFromNewPlayerNumbers(lastPlayerPresets:PlayerPresetData[],newPlayerNumber:number)
    {
        let newPlayerPresets: PlayerPresetData[] = [];
        let diffCount = Math.abs(newPlayerNumber - lastPlayerPresets.length);
        console.log(diffCount);

        if (newPlayerNumber > lastPlayerPresets.length)
        {
            newPlayerPresets = newPlayerPresets.concat(lastPlayerPresets);

            for (let ii = 0; ii < diffCount; ii++)
            {
                newPlayerPresets.push(getEmptyPlayerPresetData());
            }
        }
        else if (newPlayerNumber < lastPlayerPresets.length)
        {
            newPlayerPresets = Array.from(lastPlayerPresets);
            for (let ii = 0; ii < diffCount; ii++)
            {
                newPlayerPresets.pop();
            }
        }
        else
        {
            newPlayerPresets = Array.from(lastPlayerPresets);
        }

        return newPlayerPresets;
    }
}

export default PlayerStateUtils;