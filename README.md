# sqpreset

Generate sequence presets for Adobe Premiere Pro (.sqpreset)

## Usage
```
npx klustre/sqpreset <input>
```
```
npm i klustre/sqpreset --global
sqpreset <input>
```
```
npm i klustre/sqpreset [--save | --save-dev]
npx sqpreset <input>
```

## Options
```
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
