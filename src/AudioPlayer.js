import { useContext, useEffect, useState, useMemo } from 'react'
// import { NFTPreview, MediaConfiguration } from "@zoralabs/nft-components";
import './Portal.css';
import './AudioPlayer.css';



import useSWR from 'swr'
import { queryZoraSubgraph, GET_NFT_BY_ID } from './gql/services'
import { getActiveAuction } from './gql/utils'
import { useAuctionCountdown } from './gql/useAuctionCountdown'

import AuctionInfo from './AuctionInfo'


const nftFetcher = (query, zoraId) => queryZoraSubgraph(query, { zoraId })

const AudioPlayer = () => {
    const [playing, setPlaying] = useState(0)
    const {
        data: zoraData,
        error: fetchNftError,
        mutate: refetchNft,
    } = useSWR([GET_NFT_BY_ID, 664], nftFetcher, {
        refreshInterval: 7000,
    })
    //4543 not kicked off nft

    console.log("zora data: ", zoraData)


    const nft = useMemo(() => zoraData?.media, [zoraData])

    const auction = useMemo(() => getActiveAuction(nft), [nft])

    console.log(auction)


    const pressPlay = (track) => {
        if (playing === track) {
            setPlaying(0);
        }
        else {
            setPlaying(track);
        }
    }


    return (
        <div className="nft-container">
            <div className="nft-card">
                <img src={"https://i.imgur.com/KkI87jw.jpg"} alt="NFT img" className="nft-visuals" />
                <p>Title</p>
                <p>Artist</p>
                {auction && <AuctionInfo auction={auction} />}

                <div className="nft-bottom">
                    <div className="btn-container">
                        <div
                            className={"btn " + (playing === 1 ? 'pause' : 'play')}
                            onClick={() => pressPlay(1)}>
                            <span className="bar bar-1"></span>
                            <span className="bar bar-2"></span>
                            <span className="bar bar-3"></span>
                        </div>
                    </div>
                    <a className='bid-button button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
                        Place Bid
                        </a>
                </div>
            </div>
            <div className="nft-card">
                <img src={"https://i.imgur.com/VT9wr4Z.jpg"} alt="NFT img" className="nft-visuals" />
                <p>Title</p>
                <p>Artist</p>
                {auction && <AuctionInfo auction={auction} />}
                <div className="nft-bottom">
                    <div className="btn-container">
                        <div
                            className={"btn " + (playing === 2 ? 'pause' : 'play')}
                            onClick={() => pressPlay(2)}>
                            <span className="bar bar-1"></span>
                            <span className="bar bar-2"></span>
                            <span className="bar bar-3"></span>
                        </div>
                    </div>
                    <a className='bid-button button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
                        Place Bid
                        </a>
                </div>
            </div>
            <div className="nft-card">
                <img src={"https://i.imgur.com/45GqLmV.jpg"} alt="NFT img" className="nft-visuals" />
                <p>Title</p>
                <p>Artist</p>
                {auction && <AuctionInfo auction={auction} />}
                <div className="nft-bottom">
                    <div className="btn-container">
                        <div
                            className={"btn " + (playing === 3 ? 'pause' : 'play')}
                            onClick={() => pressPlay(3)}>
                            <span className="bar bar-1"></span>
                            <span className="bar bar-2"></span>
                            <span className="bar bar-3"></span>
                        </div>
                    </div>
                    <a className='bid-button button' href='https://www.partybid.app/' target="_blank" rel="noreferrer">
                        Place Bid
                        </a>
                </div>
            </div>
        </div >);



}

export default AudioPlayer;