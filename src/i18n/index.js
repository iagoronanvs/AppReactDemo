import I18n from 'react-native-i18n';
import ptBr from './languages/pt_br';
import en from './languages/en';

let languageCode = I18n.locale.substr(0, 2);
let lang;

switch (languageCode) {
  case 'en':
    lang = en;
    break
  default:
    lang = ptBr;
}

export default lang;
