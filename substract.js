function substract(a,b){
  if(a == null || b == null){
    return "masukan dua angka"
  }
  else if(isNaN(a) || isNaN(b)){
    return "masukan number"
  }else{
  return a-b
  }
}

module.exports = substract;
