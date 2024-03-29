// 주어진 단어에 특정 알파벳이 몇 번 들어가는지 세어주는 프로그램을 작성해봅시다.

// 예를 들어 countCharacter('AbaCedEA', 'E') 함수는'AbaCedEA' 에서 E가 몇 번 들어갔는지 세는 함수로 실행결과는 2입니다.
// 여기서 주의해야 할 점은 대소문자를 구분하지 않는 다는 점입니다.

// countA(word) 함수는 단어에 'A'가 몇 번 들어가는지 출력하는 함수입니다. 마찬가지로 대소문자를 구분하지 않습니다.

// 코드를 작성하여 프로그램을 완성해보세요!

// 실행 결과
// 2
// 0
// 3

// 해설
// 먼저 countCharacter 함수를 만들어봅시다. word의 length만큼 반복을 하면서 검사를 해주면 되겠죠?

// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
    var count = 0;

    for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === ch.toUpperCase()) {
            count++;
        }
    }
    return count;
}
// 그리고 이번에는 countA 함수를 만들어봅시다.

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    var count = 0;

    for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === 'A') {
            count++;
        }
    }
    return count;
}
// 하지만 이렇게 쓰면 중복이 많이 되죠? 이미 countCharacter 함수를 만들었기에, 이 함수를 활용하는 방법도 있습니다.

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    return countCharacter(word, 'A');
}
// 이렇게 써도 동일합니다. 이게 훨씬 좋은 코드겠죠?

// 주어진 단어(word)에 특정 알파벳(ch)이 몇 번 들어가는지 세어주는 함수
function countCharacter(word, ch) {
    var count = 0;

    for (var i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() === ch.toUpperCase()) {
            count++;
        }
    }
    return count;
}

// 단어 word에 알파벳 'A'가 몇 번 나오는지 세어주는 함수
function countA(word) {
    return countCharacter(word, 'A');
}

// 테스트 코드
console.log(countCharacter('AbaCedEA', 'E'));
console.log(countCharacter('AbaCedEA', 'X'));
console.log(countA('AbaCedEA'));
// 2
// 0
// 3