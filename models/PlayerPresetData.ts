
export interface PlayerPresetData
{
    name:string,
    imageId:string
}

export function getEmptyPlayerPresetData()
{
    return(
    {
        name:"",
        imageId:""
    });
}