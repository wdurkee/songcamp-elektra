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
        [auction, auctionIsOver]
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
                </div>
            }
            {auctionIsOver
                && <div className="price-text">
                    <p>
                        Winning Bid: {formatAmount(winningBidAmount)} ETH
                    </p>
                </div>
            }

        </div>
    );
}

export default AuctionInfo;