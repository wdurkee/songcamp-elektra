import { useContext, useState, useMemo } from 'react'
import { formatAmount } from './gql/utils'

import { useAuctionCountdown } from './gql/useAuctionCountdown'

import './AudioPlayer.css'

const AuctionInfo = ({
    auction, num
}) => {
    const {
        countdown,
        auctionEndingSoon,
        auctionIsOver
    } = useAuctionCountdown(auction)

    const showReservePrice = useMemo(() => auction.status === "Active" && !auction.currentBid, [auction])
    const showCurrentBid = useMemo(() => auction.status === "Active" && auction.currentBid && !auctionIsOver, [auction, auctionIsOver])

    const finalBid = useMemo(() => auction.previousBids.find(bid => bid.bidType === "Final"), [auction.previousBids])

    const winningBidAmount = useMemo(() => {
        if (!auctionIsOver) { return null }
        if (auction.status === "Active" && auction.currentBid) return auction.currentBid.amount
        else return finalBid.amount
    },
        [auction, finalBid, auctionIsOver]
    )

    // const winningBidAddress = useMemo(() => {
    //     if (auction.status === "Active" && auction.currentBid) return auction.currentBid.bidder.id
    //     else if (auctionIsOver) return finalBid.bidder.id
    //     else return null
    // },
    //     [auction, finalBid]
    // )
    var winningBidAddress = "0x0"
    var winningBidAddressLink = "https://google.com"
    if (num === 1) {
        winningBidAddress = "FinchParty"
        winningBidAddressLink = "https://www.partybid.app/party/0xa93cbb8658578C09E7aDA3f9d989C2E1B2026342"
    }
    else if (num === 2) {
        winningBidAddress = "BeetsDAO"
        winningBidAddressLink = "https://twitter.com/BeetsDAO"
    }
    else if (num === 3) {
        winningBidAddress = "CampWater"
        winningBidAddressLink = "https://www.partybid.app/party/0x569Eb19845ccB4a536A46b601752000f42D71B96"
    }




    return (
        <div>
            {showReservePrice
                && <div className="price-text">
                    <p>
                        Reserve Price: {formatAmount(auction.reservePrice)} ETH
                    </p>
                </div>
            }
            {showCurrentBid
                && <div className="price-text">
                    <p>
                        Current Bid: {formatAmount(auction.currentBid.amount)} ETH
                    </p>
                    <p>
                        Time Remaining: {countdown}
                    </p>
                    <a className="winning-address" href={winningBidAddressLink} target="_blank" rel="noreferrer">
                        {winningBidAddress}
                    </a>
                </div>
            }
            {auctionIsOver
                && <div className="price-text winner">
                    <p>
                        Winning Bid: {formatAmount(winningBidAmount)} ETH
                    </p>
                    <a className="winning-address" href={winningBidAddressLink} target="_blank" rel="noreferrer">
                        {winningBidAddress}
                    </a>
                </div>
            }

        </div >
    );
}

export default AuctionInfo;