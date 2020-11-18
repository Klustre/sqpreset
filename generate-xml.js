module.exports = function generateXML({
        name = 'Untitled',
        desc = '',
        width = 1920,
        height = 1080,
        fps = 30,
        par = '1,1',
        tracks = 3,
        maxRenderQuality = false,
        maxBitDepth = false,
        allowLinearCompositing = false,
    } = {}) {
    
    desc = desc
        .replace(/\n/g, '&#13;')
        .replace(/&/g, '&amp;')
    
    const ticksPerSecond = 254016000000
    const ticksPerFrame = ticksPerSecond / fps
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<PremiereData Version="3">
    <SequencePreset ObjectRef="1"/>
    <SequencePreset ObjectID="1" ClassID="5e73dd7e-4f86-4917-80eb-08ddb2f4a5f3" Version="9">
        <SequenceGraphicsWhite>100</SequenceGraphicsWhite>
        <SequenceWorkingColorSpace>{"workingSpaceConfigVersion":1,"workingSpaceID":"BT.709 RGB Full","workingSpaceIsLinearized":0}</SequenceWorkingColorSpace>
        <PreviewVideoFrameSize>0,0,${width},${height}</PreviewVideoFrameSize>
        <ImmersiveVideoVRConfiguration>{"ambisonicsHRIR":"","ambisonicsMonitoringType":0,"capturedHorizontalView":0,"capturedVerticalView":0,"fieldOfHorizontalView":108,"fieldOfVerticalView":108,"projectionType":0,"stereoscopicEye":0,"stereoscopicType":0,"version":3}</ImmersiveVideoVRConfiguration>
        <VideoTracks>[]</VideoTracks>
        <AudioTracks>[{"mAssign":0,"mAudioSends":[],"mChannelType":1,"mExpandedHeight":25,"mIsOpen":false,"mIsSubmix":false,"mKeyframeMode":true,"mLocked":false,"mMatrix":[],"mMute":false,"mName":"","mPan":0,"mPannerAssignments":[],"mSolo":false,"mSyncLock":true,"mTargeted":false,"mTrackID":-1,"mVolume":1}]</AudioTracks>
        <InitialNumberOfVideoTracks>${tracks}</InitialNumberOfVideoTracks>
        <AdaptiveNumChannels>2</AdaptiveNumChannels>
        <VideoAllowLinearCompositing>${allowLinearCompositing}</VideoAllowLinearCompositing>
        <VideoUseMaxRenderQuality>${maxRenderQuality}</VideoUseMaxRenderQuality>
        <VideoUseMaxBitDepth>${maxBitDepth}</VideoUseMaxBitDepth>
        <VideoPixelAspectRatio>${par}</VideoPixelAspectRatio>
        <PreviewPresetVideoCodec.Win>1297107278</PreviewPresetVideoCodec.Win>
        <PreviewPresetFileName.Win>I-Frame Only MPEG</PreviewPresetFileName.Win>
        <PreviewPresetVideoCodec.Mac>1297107278</PreviewPresetVideoCodec.Mac>
        <PreviewPresetFileName.Mac>I-Frame Only MPEG</PreviewPresetFileName.Mac>
        <EditingModeGUID.Win>795454d9-d3c2-429d-9474-923ab13b7018</EditingModeGUID.Win>
        <EditingModeGUID.Mac>795454d9-d3c2-429d-9474-923ab13b7018</EditingModeGUID.Mac>
        <Descriptions Version="1">
            <DescriptionItem Version="1" Index="0">
                <Second>${desc}</Second>
                <First>en_US</First>
            </DescriptionItem>
        </Descriptions>
        <Names Version="1">
            <NameItem Version="1" Index="0">
                <Second>${name}</Second>
                <First>en_US</First>
            </NameItem>
        </Names>
        <VideoFieldType>0</VideoFieldType>
        <AudioTimeDisplay>200</AudioTimeDisplay>
        <VideoTimeDisplay>104</VideoTimeDisplay>
        <AudioChannelType>1</AudioChannelType>
        <AudioFrameRate>5292000</AudioFrameRate>
        <VideoFrameSize>0,0,${width},${height}</VideoFrameSize>
        <VideoFrameRate>${ticksPerFrame}</VideoFrameRate>
    </SequencePreset>
</PremiereData>`
}
