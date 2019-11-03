// 한국에 처음 방문한 호주인 Sam Hammington은 한국의 호칭에 어려움을 느끼고 있습니다.

// 한국에서는:

// 나이가 같으면 "친구"
// 자신보다 나이가 어릴 경우 "남동생", "여동생"
// 남자의 경우:

// 자신보다 나이가 많은 남자에게 "형"
// 자신보다 나이가 많은 여자에게 "누나"
// 여자의 경우:

// 자신보다 나이가 많은 남자에게 "오빠"
// 자신보다 나이가 많은 여자에게 "언니"
// if문을 활용해서 호칭을 판별해주는 코드를 만들어봅시다.

// 템플릿
// function whatShouldICallYou(myAge, myGender, yourAge, yourGender) {
//     // 나의 나이, 나의 성별, 상대방의 나이, 상대방의 성별
//     // 총 4개의 정보를 활용해서 호칭을 결정해보세요.
// }

// // 테스트 코드
// var result1 = whatShouldICallYou(23, 'male', 25, 'female');
// var result2 = whatShouldICallYou(21, 'female', 21, 'female');
// var result3 = whatShouldICallYou(25, 'female', 22, 'male');

// console.log(result1);
// console.log(result2);
// console.log(result3);
// 누나
// 친구
// 남동생

function whatShouldICallYou(myAge, myGender, yourAge, yourGender) {
    // 나의 나이, 나의 성별, 상대방의 나이, 상대방의 성별
    // 총 4개의 정보를 활용해서 호칭을 결정해보세요.
    if (myAge === yourAge) {
        return "친구";
    } else if (myAge > yourAge && yourGender === 'male') {
        return "남동생";
    } else if (myAge > yourAge && yourGender === 'female') {
        return "여동생";
    } else if (myGender === 'male' && myAge < yourAge) {
        if (yourGender === 'male') {
            return "형";
        } else {
            return "누나";
        }
    } else if (myGender === 'female' && myAge < yourAge) {
        if (yourGender === 'male') {
            return "오빠";
        } else {
            return "언니";
        }
    }
}

// 테스트 코드
var result1 = whatShouldICallYou(23, 'male', 25, 'female');
var result2 = whatShouldICallYou(21, 'female', 21, 'female');
var result3 = whatShouldICallYou(25, 'female', 22, 'male');

console.log(result1);
console.log(result2);
console.log(result3);