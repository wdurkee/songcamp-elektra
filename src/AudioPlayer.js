// Hooks
import { useState, useMemo, useRef } from 'react'
import { useAuctionCountdown } from './gql/useAuctionCountdown'
// import { NFTPreview, MediaConfiguration } from "@zoralabs/nft-components";

// Components & styles
import './Portal.css';
import './AudioPlayer.css';
import AuctionInfo from './AuctionInfo'

// GQL
import useSWR from 'swr'
import { queryZoraSubgraph, GET_NFT_BY_ID } from './gql/services'

// Utils
import { getActiveAuction } from './gql/utils'

// Constants
import { track1, track2, track3 } from './constants/tracks' // metadata for each catalog record


const nftFetcher = (query, zoraId) => queryZoraSubgraph(query, { zoraId })

const AudioPlayer = () => {
    const [playing, setPlaying] = useState(0)
    const [currentTrack, setCurrentTrack] = useState(null)

    // HTML audio element refs
    const track1Ref = useRef(null)
    const track2Ref = useRef(null)
    const track3Ref = useRef(null)

    // *** FETCH NFT DATA *** 
    const { data: zoraData1, error: fetchNftError1 } = useSWR(
        [GET_NFT_BY_ID, track1.tokenId],
        nftFetcher,
        { refreshInterval: 7000 }
    )
    const { data: zoraData2, error: fetchNftError2 } = useSWR(
        [GET_NFT_BY_ID, track2.tokenId],
        nftFetcher,
        { refreshInterval: 7000 }
    )
    const { data: zoraData3, error: fetchNftError3 } = useSWR(
        [GET_NFT_BY_ID, track3.tokenId],
        nftFetcher,
        { refreshInterval: 7000 }
    )

    const nft1 = useMemo(() => zoraData1?.media, [zoraData1])
    const nft2 = useMemo(() => zoraData2?.media, [zoraData2])
    const nft3 = useMemo(() => zoraData3?.media, [zoraData3])

    const auction1 = useMemo(() => getActiveAuction(nft1), [nft1])
    const auction2 = useMemo(() => getActiveAuction(nft2), [nft2])
    const auction3 = useMemo(() => getActiveAuction(nft3), [nft3])

    const playPauseIcon1 = useMemo(() => playing && currentTrack === track1 ? 'btn pause' : 'btn play', [currentTrack, playing, track1])
    const playPauseIcon2 = useMemo(() => playing && currentTrack === track2 ? 'btn pause' : 'btn play', [currentTrack, playing, track2])
    const playPauseIcon3 = useMemo(() => playing && currentTrack === track3 ? 'btn pause' : 'btn play', [currentTrack, playing, track3])

    const pressPlay = (track) => {
        if (currentTrack === track) { // toggle play/pause on current track
            setPlaying(!playing)
            togglePlaying()
        } else if (!currentTrack) {
            setCurrentTrack(track)
            setPlaying(true)
            const audio = getAudioRef(track).current
            audio.play()
        } else {
            console.log("now playing: " + track.title);
            const currentAudio = getAudioRef(currentTrack).current
            currentAudio.pause()
            setCurrentTrack(track)
            const newAudio = getAudioRef(track).current
            newAudio.play()
            setPlaying(true)
        }
    }

    const togglePlaying = () => {
        const audio = getAudioRef(currentTrack).current
        audio.paused ? audio.play() : audio.pause()
    }

    const getAudioRef = (track) => {
        let audioRef

        if (track === track1) audioRef = track1Ref
        else if (track === track2) audioRef = track2Ref
        else if (track === track3) audioRef = track3Ref

        return audioRef
    }


    return (
        <div className="nft-container">
            <div className="nft-card">
                <a href={track1.catalogUrl} target="_blank" rel="noreferrer" > <img src={track1.imageSrc} alt="NFT img" className="nft-visuals" /> </a>
                <a href={track1.catalogUrl} target="_blank" rel="noreferrer" className="nft-title-text"><p className="nft-title-text">{track1.title}</p></a>
                <a href={track1.artistUrl} target="_blank" rel="noreferrer" className="nft-artist-text">{track1.artist}</a>
                {auction1 && <AuctionInfo auction={auction1} />}

                <audio
                    crossOrigin="anonymous"
                    src={track1.audioSrc}
                    ref={track1Ref}
                    onEnded={() => setPlaying(false)}
                // onLoadStart={onLoadStart}
                // onLoadedMetadata={onLoadedMetadata}
                // onCanPlay={onCanPlay}
                // onPlay={onPlay}
                // onError={onError}
                // onStalled={onStalled}
                />

                <div className="nft-bottom">
                    <div className="btn-container">
                        <div
                            className={playPauseIcon1}
                            onClick={() => pressPlay(track1)}>
                            <span className="bar bar-1"></span>
                            <span className="bar bar-2"></span>
                            <span className="bar bar-3"></span>
                        </div>
                    </div>
                    <a className='bid-button button' href={track1.catalogUrl} target="_blank" rel="noreferrer">
                        View NFT
                    </a>
                    <a className='bid-button party-button-small button' href={track1.partyBidUrl} target="_blank" rel="noreferrer">
                        🥳
                    </a>
                </div>

            </div>
            <div className="nft-card">
                <a href={track2.catalogUrl} target="_blank" rel="noreferrer"> <img src={track2.imageSrc} alt="NFT img" className="nft-visuals" /> </a>
                <a href={track2.catalogUrl} target="_blank" rel="noreferrer" className="nft-title-text"><p className="nft-title-text">{track2.title}</p></a>
                <a href={track2.artistUrl} target="_blank" rel="noreferrer" className="nft-artist-text">{track2.artist}</a>
                {auction2 && <AuctionInfo auction={auction2} />}

                <audio
                    crossOrigin="anonymous"
                    src={track2.audioSrc}
                    ref={track2Ref}
                    onEnded={() => setPlaying(false)}
                />

                <div className="nft-bottom">
                    <div className="btn-container">
                        <div
                            className={playPauseIcon2}
                            onClick={() => pressPlay(track2)}>
                            <span className="bar bar-1"></span>
                            <span className="bar bar-2"></span>
                            <span className="bar bar-3"></span>
                        </div>
                    </div>
                    <a className='bid-button button' href={track2.catalogUrl} target="_blank" rel="noreferrer">
                        View NFT
                    </a>
                    <a className='bid-button party-button-small button' href={track2.partyBidUrl} target="_blank" rel="noreferrer">
                        🥳
                    </a>
                </div>

            </div>
            <div className="nft-card">
                <a href={track3.catalogUrl} target="_blank" rel="noreferrer" > <img src={track3.imageSrc} alt="NFT img" className="nft-visuals" /> </a>
                <a href={track3.catalogUrl} target="_blank" rel="noreferrer" className="nft-title-text"><p className="nft-title-text">{track3.title}</p></a>
                <a href={track3.artistUrl} target="_blank" rel="noreferrer" className="nft-artist-text">{track3.artist}</a>
                {auction3 && <AuctionInfo auction={auction3} />}

                <audio
                    crossOrigin="anonymous"
                    src={track3.audioSrc}
                    ref={track3Ref}
                    onEnded={() => setPlaying(false)}
                />

                <div className="nft-bottom">
                    <div className="btn-container">
                        <div
                            className={playPauseIcon3}
                            onClick={() => pressPlay(track3)}>
                            <span className="bar bar-1"></span>
                            <span className="bar bar-2"></span>
                            <span className="bar bar-3"></span>
                        </div>
                    </div>
                    <a className='bid-button button' href={track3.catalogUrl} target="_blank" rel="noreferrer">
                        View NFT
                    </a>
                    <a className='bid-button party-button-small button' href={track3.partyBidUrl} target="_blank" rel="noreferrer">
                        🥳
                    </a>
                </div>

            </div>
        </div >);



}

export default AudioPlayer;