let age = 20;

function canVote(age) {
    if (age < 18) {
        return "This age " + age+ " can't vote";
    }
    else {
        return "This age " + age+ " can vote";
    }
}

console.log(canVote(age));
