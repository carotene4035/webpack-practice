// import 文を使って sub.js ファイルを読み込む。
import {hello} from './sub';
import axios from 'axios';

const params = {
  email: 'yabumoto@geologic.co.jp',
  password: 'password'
}

axios.post('/api/auth/login', params)
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
// sub.jsに定義されたJavaScriptを実行する。
hello();

