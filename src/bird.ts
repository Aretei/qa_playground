/** 
 * @param will contain all instances of bird
*/
var bread = []

class bird {
    name: string
    canFly: boolean
    feathers: boolean = true

    constructor(name:string, canFly: boolean) {
        this.name = name
        this.canFly = canFly
    }
}
 class aquatic extends bird {
    swim: boolean

    constructor(name:string, canFly: boolean, swim: boolean){
        super(name,canFly)
        this.swim = swim
    }
    fly (){
        if(this.canFly)
        console.log('it do indeed fly') //this wiil log something in the console
        else
        console.log('it do not fly')
    }
 }



//  let penguin = new bird("penguin", false)
// let birdz:Array<aquatic> = [
//     new aquatic("toucan", true, false),
//     new aquatic('penguin', false, true),
//     new aquatic('duck', true, true)
// ]
// birdz.forEach((item:aquatic)=>{
//     item.fly()
// })




// let toucan = new bird("toucan", true)
// let penguin = new bird("penguin", false)
let birdz:Array<aquatic> = [
    new aquatic("toucan", true, false),
    new aquatic('penguin', false, true),
    new aquatic('duck', true, true)
]
birdz.forEach((item:aquatic)=>{
    item.fly()
})
// console.log(toucan)
// console.log(penguin)
// bread.push(toucan)
// bread.push(penguin)
// console.log(bread)

// let birds:Array<bird> = [
//     new bird("toucan", true),
//     new bird("penguin", false),
//     new bird('pidgeon', true)
// ]
// birds.forEach((thing)=> {
//     console.log(thing)
// })

// var obj = {name: 'dog', mammal: true, hypo: false}
// var arr = ['dog', true, false]

// console.log(obj.name)
// console.log(obj["name"])


