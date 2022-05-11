function findUserByUsername(array, key) {
    return array.find(function(val){
      return val.key === key;
    })
  }
function findUserByUsername(array, key) {
    return array.find(function(val){
      if (val.key !== username){
          return undefined
      }else{
          return val.key
      }
    })
  }