const helpText = `
    Usage
    $ sqpreset <input>

    Options
    --defaults    Generates preset with default values
    --path        Where to save the preset
    
    --name,   -n  Preset name ['Untitled']
    --desc,   -d  Preset description ['']
    --width,  -w  Sequence width [1920]
    --height, -h  Sequence height [1080]
    --fps,    -f  Sequence FPS [30]
    --par,    -p  Pixel Aspect Ratio ['1,1']
    --tracks, -t  Amount of video tracks [3]
    
    --maxRenderQuality        Boolean [false]
    --maxBitDepth             Boolean [false]
    --allowLinearCompositing  Boolean [false]
`
const flags = {
    flags: {
        defaults: {
            type: 'boolean',
        },
        path: {
            type: 'string',
            isRequired: true,
        },
        name: {
            type: 'string',
            alias: 'n'
        },
        desc: {
            type: 'string',
            alias: 'd'
        },
        width: {
            type: 'number',
            alias: 'w'
        },
        height: {
            type: 'number',
            alias: 'h'
        },
        fps: {
            type: 'number',
            alias: 'f'
        },
        par: {
            type: 'string',
            alias: 'p'
        },
        tracks: {
            type: 'number',
            alias: 't'
        },
        maxRenderQuality: {
            type: 'boolean',
        },
        maxBitDepth: {
            type: 'boolean',
        },
        allowLinearCompositing: {
            type: 'boolean',
            default: false,
        },
    }
}
module.exports = {
    helpText,
    flags,
}
