import theme from './theme.js'
import keys from './keys.js'
import searchEngines from './search-engines.js'

const hintsCss =
  "font-size: 15pt; font-family: 'JetBrains Mono NL', 'Cascadia Code', 'Helvetica Neue', Helvetica, Arial, sans-serif; border: 0px; color: #e0def4 !important; background: #191724; background-color: #191724"

api.Hints.style(hintsCss)
api.Hints.style(hintsCss, 'text')

export default {
  settings: {
    hintAlign: 'left',
    hintCharacters: 'qwertasdfgzxcvb',
    omnibarSuggestionTimeout: 500,
    richHintsForKeystroke: 1,
    defaultSearchEngine: 'dd',
    theme,
  },

  keys,
  searchEngines,

  // Leader for site-specific mappings
  siteleader: '<Space>',

  // Leader for OmniBar searchEngines
  searchleader: 'a',

  // Array containing zero or more log levels to enable: log, warn, error
  logLevels: [
    // "log",
    // "warn",
    'error',
  ],
}
