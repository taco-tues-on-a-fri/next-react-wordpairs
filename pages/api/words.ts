import { NextApiRequest, NextApiResponse } from 'next'
import adjectiveJson from '../../static/word-data/adjectives.json'
import adverbJson from '../../static/word-data/adverbs.json'
import contextSettingsJson from '../../static/word-data/settings-adjective-noun-location.json'
import contextVerbsNounsJson from '../../static/word-data/context-verbs-applied-nouns.json'
import nounJson from '../../static/word-data/nouns.json'
import prepositionJson from '../../static/word-data/prepositions.json'
import verbJson from '../../static/word-data/verbs.json'

type Data = {
  adjectives: string[];
  adverbs: string[];
  contextSettings: string[];
  contextVerbsAppliedNouns: string[];
  nouns: string[];
  prepositions: string[];
  verbs: string[];
}

export default (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.statusCode = 200
  res.json({ 
    adjectives: adjectiveJson.adjectives,
    adverbs: adverbJson.adverbs,
    contextSettings: contextSettingsJson.settings_adjective_noun_location,
    contextVerbsAppliedNouns: contextVerbsNounsJson.verbs_applied_nouns,
    nouns: nounJson.nouns,
    prepositions: prepositionJson.prepositions,
    verbs: verbJson.verbs,
  })
}