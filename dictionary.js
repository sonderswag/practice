/* 
void AddWord(String word) a-z
bool SearchWord(String pattern) a-z.

. : any single char

AddWord(hello)
AddWord(tokyo)
SearchWord(hell) -> false
SearchWord(h.ll.) -> true
SearchWord(hell..) -> false


{
  h: { 
    a: {
      y: {}
    }
    e: { 
      l: { 
        l: { 
          null: { }
          o: { null: }
        }
      }
    }
}

hello
hell

root -> h -> e -> l -> l -> o -> null

 */


class WordAPI {
  constructor() {
      this.dict = {};
  }

  
  AddWord(word) {
    let level = this.dict;
    for (let char of word) {
      if (!level[char]) {
        level[char] = {};
      }
      level = level[char];
    }
    level[null] = true;
    // console.log(JSON.stringify(this.dict))
  }

  SearchWord(word) {
    
    function search(index, dict) {
      console.log(word[index], JSON.stringify(dict))

      if (index === word.length && dict[null]) {
        return true;
      }
      
      if (!dict[word[index]] && word[index] !== '.') {
        return false;
      }
      
      let rtv; 
      
      // wild 
      if (word[index] === '.') {
        for (let letter of Object.keys(dict)) {
          if(search(index + 1, dict[letter])) {
            return true;
          }
        }
        return false;
      } else {
        rtv = search(index + 1, dict[word[index]])
      }
      return rtv; 
    }
    return search(0, this.dict)
  }
}

const words = new WordAPI();

words.AddWord('hell');
words.AddWord('hay');
words.AddWord('tokyo');
console.log(words.SearchWord('h.l.'));
