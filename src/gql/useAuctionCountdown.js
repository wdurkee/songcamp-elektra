import {
    useEffect,
    useState,
    useMemo
} from 'react'
import {checkAuctionOver,
    checkAuctionEndingSoon,
    getAuctionTimeLeft,
    formatCountdown
} from './utils'

const TICK_LENGTH = 1000 // 1 second

export function useAuctionCountdown(auction, formatted = true) {
    const expectedEndTimestamp = auction?.expectedEndTimestamp
    const [countdown, setCountdown] = useState(null)
    const [isOver, setIsOver] = useState(false)

    const auctionEndingSoon = useMemo(
        () => checkAuctionEndingSoon(auction),
        [auction]
    ) // ! not updating properly
    const auctionIsOver = useMemo(
        () => checkAuctionOver(auction) || isOver,
        [auction, isOver, countdown]
    )

    // const auctionEndDateTime = useMemo(() => {
    //     return new Date(Number(expectedEndTimestamp * 1000))
    // }, [expectedEndTimestamp])

    const tick = (interval) => {
        const distance = getAuctionTimeLeft(auction)
        if (distance < 0) {
            setCountdown(null)
            setIsOver(true)
            if (interval) return clearInterval(interval)
        }
        if (formatted) setCountdown(formatCountdown(distance))
        else setCountdown(distance)
    }

    // Just for the countdown
    useEffect(() => {
        tick()

        const interval = setInterval(() => {
            tick(interval)
        }, TICK_LENGTH)

        return () => clearInterval(interval)
    }, [expectedEndTimestamp])

    return {
        countdown,
        auctionEndingSoon,
        auctionIsOver
    }
}