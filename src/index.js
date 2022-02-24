import axios from 'axios';

axios.get('/react/api/header.json')
.then(res => {
    console.log(res);
})


// esint loader 会影响打包速度
// git eslint 勾子。  自动执行 eslint src