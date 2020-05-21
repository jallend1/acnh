export function properCase (word){
    let fixedWord = '';
    fixedWord += word[0].toUpperCase();
    // if(word.includes(' ')){
        for(let i = 1; i < word.length; i++){
            if(word[i - 1] === ' ' || word[i - 1] === '-'){
                fixedWord+= word[i].toUpperCase();
            }else{
                fixedWord+= word[i]
            }
        }
    return fixedWord;
}