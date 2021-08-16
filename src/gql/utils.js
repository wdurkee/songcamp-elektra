import { utils } from 'ethers'

export const getActiveAuction = (nft) => {
    if (!nft?.reserveAuctions?.length) return null

    //TODO FIX 
    // const activeAuction = nft.reserveAuctions.find(
    //     (auction) => auction.status === "Active"
    // )

    return nft.reserveAuctions[0]
}

export const checkAuctionOver = (auction) => {
    if (!auction.currentBid) return false
    return Date.now() >= auction.expectedEndTimestamp * 1000
}

// Is there < 15mins in the auction?
export const checkAuctionEndingSoon = (auction) => {
    return (
        auction.expectedEndTimestamp * 1000 - Date.now() <= 900000 &&
        auction.currentBid
    )
}

export const getAuctionTimeLeft = (auction) => {
    const {
        expectedEndTimestamp
    } = auction
    const auctionEndDateTime = new Date(Number(expectedEndTimestamp * 1000))

    if (expectedEndTimestamp) {
        const now = new Date().getTime()
        const distance = auctionEndDateTime - now
        return distance
    }

    return null
}

const fmt = (num) => {
    if (!num) return '00'
    else if (num < 10) return '0' + num
    else return num
}

export const formatCountdown = (timeUntilEnd) => {
    var hours = Math.floor(
        (timeUntilEnd % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    var minutes = Math.floor((timeUntilEnd % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((timeUntilEnd % (1000 * 60)) / 1000)

    const formattedDate = fmt(hours) + ':' + fmt(minutes) + ':' + fmt(seconds)
    return formattedDate
}

// Args: BigNumber & Integer
// Returns: Number w/ at most 4 decimal places
export const formatAmount = (amountBigNum, numCurrencyDecimals) => {
    let amount = amountBigNum ?
        Number(utils.formatUnits(amountBigNum, numCurrencyDecimals)) :
        null
    if (!amount) return null

    const numMinBidDecimals = amount.toString().split('.')[1]?.length // decimal places

    if (numMinBidDecimals >= 4) {
        // if the minimum bid uses 5+ decimal places, round up
        amount = Math.ceil(Number(amount) * 10000) / 10000
    }

    // return fmt(amount, 4) // * we don't want to commaify everywhere we use formatAmount()
    return Number(amount.toFixed(4))
}