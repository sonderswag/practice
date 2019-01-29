var addBoldTag = function(s, dict) {
  let bold = new Array(s.length).fill(false); // defaults to undefined. 
  for (let word of dict) {
    let startIndex = s.indexOf(word);
    while (startIndex != -1) {
      // console.log(word, startIndex)
      // add to the bold array. 
      for (let i = startIndex; i < startIndex + word.length; i += 1) {
        bold[i] = true;
      }
      startIndex = s.indexOf(word, startIndex + 1); 
    }   
  }
  // now build string from bold array. Want to look for trans 
  // Undefined -> true  === insert a ‘<b>’
  // true -> undefined => insert a ‘</b>
  let last = undefined; 
  let rtv = ''; 
  for (let i = 0 ; i < s.length; i += 1) {
    if (!last && bold[i]) {
      rtv += '<b>';
    } else if (last && !bold[i]) {
      rtv += '</b>';
    }
    rtv += s[i]; 
    last = bold[i];
  }
  if (last) {
    rtv += '</b>';
  }
  return rtv; 
};


module.exports = addBoldTag;