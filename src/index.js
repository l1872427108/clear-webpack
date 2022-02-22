import _ from 'lodash';

import $ from 'jquery';

const dom = $('<div>');
dom.html(_.join(['dell', 'lee', 'hello', 'world']), '----');
$('body').append(dom);

// 旧版本的 webpack ， 两次打包的值也可能是不一样的
