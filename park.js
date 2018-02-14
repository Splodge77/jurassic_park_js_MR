const Park = function(){
  this.enclosure = [];
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
};

// Park.prototype.removeOfType = function(dinosaur){
//   const index = this.enclosure.indexOf(dinosaur)
//   for (var i = index.length -1; i >= 0; i--){
//     this.enclosure.splice(index[i], 1)
//   }
// }

Park.prototype.removeOfType = function(type){
  for(type in enclosure){
    this.enclosure.splice(type)
  };
};

module.exports = Park;
