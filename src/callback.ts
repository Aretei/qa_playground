

function getUser(id: number, callback) {
    let user = {id: 2, subscriber: true}
    callback(user)
}
function deliverFee(user) {
    let fee = user.subscriber ? 0 : 3
    console.log(`returning a $${fee} fee`)
    return user.subscriber ? 0 : 3
}

getUser(1,deliverFee)