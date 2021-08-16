import {
    GraphQLClient
} from 'graphql-request'
import {
    gql
} from 'graphql-tag'

import getNFTbyID from './getNFTbyID.gql'

const ZORA_SUBGRAPH_ENDPOINT = "https://api.thegraph.com/subgraphs/name/ourzora/zora-v1"

export const zoraGraphql = new GraphQLClient(ZORA_SUBGRAPH_ENDPOINT, {})

export const queryZoraSubgraph = async (query, vars) => {
    try {
        console.log('i am querying the subgraph:)')
        const data = await zoraGraphql.request(query, {
            ...vars
        })
        return data
    } catch (err) {
        console.error('queryZoraSubgraph', {
            err
        })
        throw new Error('queryZoraSubgraph broken ruh roh')
    }
}

export const GET_NFT_BY_ID = `query GetNftByID($zoraId: ID!) {
    media(id: $zoraId) {
      id
      creator {
        id
      }
      contentURI
      contentHash
      metadataURI
      metadataHash
      owner {
        id
      }
      prevOwner {
        id
      }
      creatorBidShare
      ownerBidShare
      prevOwnerBidShare
      createdAtBlockNumber
      createdAtTimestamp
      reserveAuctions {
        id
        approved
        approvedBlockNumber
        approvedTimestamp
        createdAtBlockNumber
        auctionCurrency {
          id
          name
          symbol
        }
        createdAtTimestamp
        curator {
          id
        }
        curatorFeePercentage
        currentBid {
          id
          amount
          bidType
          bidder {
            id
          }
          createdAtTimestamp
        }
        duration
        expectedEndTimestamp
        finalizedAtBlockNumber
        finalizedAtTimestamp
        firstBidTime
        reservePrice
        status
        tokenContract
        tokenId
        tokenOwner {
          id
        }
        previousBids(orderBy: createdAtTimestamp, orderDirection: asc) {
          id
          amount
          bidType
          bidder {
            id
          }
          createdAtTimestamp
          bidInactivatedAtTimestamp
        }
      }
    }
  }
  `