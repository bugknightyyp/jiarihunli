//project entry


var path = require('path');
var express = require('express');
var app = express();
var config = require('./config');

var bodyParser = require('body-parser');
// var expressSession= require('express-session');
// var cookieParser = require('cookie-parser');
/*
**设置
*/

//端口
app.set('port', process.env.PORT || config.app.port);
app.enable('trust proxy');

//设置路由
app.enable('strict routing');


/*
 *加载中间件
 */

app.use(require('serve-favicon')(__dirname + '/public/favicon.ico'));
app.use(require('morgan')('dev'));
app.use(require('method-override')());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

/*
 * static file serivce 
 */
app.use(express.static('bower_components'));
app.use(express.static('public'));


/*
**绑定路由
*/
//require('./routers')(app);

/*
**启动服务
*/
// require('./models')
//   .db
//   .connect(function(err, db){
//     if (err) return;
//     app.listen(app.get('port'), function(){
//       console.log('Express server listening on port ' + app.get('port'));
//     });

//   })

app.listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });