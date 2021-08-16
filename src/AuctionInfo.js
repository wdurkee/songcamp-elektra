import { useContext, useState, useMemo } from 'react'
import { formatAmount } from './gql/utils'

import { useAuctionCountdown } from './gql/useAuctionCountdown'

import './AudioPlayer.css'

const AuctionInfo = ({
    auction
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
        if (auction.status === "Active" && auction.currentBid) return auction.currentBid.amount
        else return finalBid.amount
    },
        [auction, finalBid]
    )

    const winningBidAddress = useMemo(() => {
        if (auction.status === "Active" && auction.currentBid) return auction.currentBid.bidder.id
        else return finalBid.bidder.id
    },
        [auction, finalBid]
    )


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
                    <p className="winning-address">
                        {winningBidAddress}
                    </p>
                </div>
            }
            {auctionIsOver
                && <div className="price-text">
                    <p>
                        Winning Bid: {formatAmount(winningBidAmount)} ETH
                    </p>
                    <p className="winning-address">
                        {winningBidAddress}
                    </p>
                </div>
            }

        </div>
    );
}

export default AuctionInfo;