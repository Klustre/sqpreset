# sqpreset

Generate sequence presets for Adobe Premiere Pro (.sqpreset)

## Usage
Use `npx Klustre/sqpreset <input>` in your Terminal

Or clone this repo and use `npm link`

```
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
```
