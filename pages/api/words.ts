import { NextApiRequest, NextApiResponse } from 'next'
import adjectiveJson from '../../static/word-data/adjectives.json'
import adverbJson from '../../static/word-data/adverbs.json'
import nounJson from '../../static/word-data/nouns.json'

type Data = {
  adjectives: string[] 
  adverbs: string[] 
  nouns: string[] 
}

export default (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.statusCode = 200
  res.json({ 
    adjectives: adjectiveJson.adjectives,
    adverbs: adverbJson.adverbs,
    nouns: nounJson.nouns,
  })
}

