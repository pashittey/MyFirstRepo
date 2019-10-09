function Profiler(label) {
  this.label = label;
  this.lastTime = null;
  }

Profiler.prototype.start = function() {
  this.lastTime = process.hrtime();
};

Profiler.prototype.end = function() {
  this.diff = process.hrtime(this.lastTime);
};

Profiler.prototype.logging = function() {
  console.log('Timer '+ this.label +' took' + this.diff[0] + 'seconds and' + this.diff[1] + 'nanoseconds.');
};

// The below code is created so that this code may be exported to other JavaScript files.

module.exports = function(label) {
//  if(process.env.NODE_ENV === 'development'){
    return new Profiler(label);
//  } else if(process.env.NODE_ENV === 'production'){
// return {
//      start: function(){},
//      end: function(){}
//    }
//   } else {
//    throw new Error('Must set NODE_ENV');
//  }
}
