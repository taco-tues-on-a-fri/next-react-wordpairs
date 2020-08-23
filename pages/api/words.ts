import { NextApiRequest, NextApiResponse } from 'next'
import adjectiveJson from '../../static/word-data/adjectives.json'

type Data = {
  adjectives: string[] 
}

export default (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.statusCode = 200
  res.json({ 
    adjectives: adjectiveJson.adjectives
  })
}

