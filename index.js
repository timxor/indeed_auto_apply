var wd = require('wd');
var indeed = "https://www.indeed.com/jobs?as_and=software+engineer&as_phr=&as_any=&as_not=senior&as_ttl=&as_cmp=&jt=all&st=&salary=&radius=100&l=94102&fromage=last&limit=50&sort=date&psf=advsrch";
// var driver = wd.remote(indeed, 80, "tcsiwula@gmail.com", "Indeed1988");
//
// driver.init(function() {
//   driver.get(indeed, function() {
//     driver.title(function(err,title) {
//       console.log(title);
//       console.log(err);
//
//     });
//   });
// });
//http://docs.casperjs.org/en/latest/installation.html
//https://www.youtube.com/watch?v=OqEcn_6GBDI



var casper = require('casper').create();

casper.start(indeed, function() {
    this.echo(this.getTitle());
});

casper.thenOpen(indeed, function() {
    this.echo(this.getTitle());
});

casper.run();
