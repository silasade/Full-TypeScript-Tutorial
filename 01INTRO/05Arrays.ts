const superheroes :string[] =[] //an array of type strings
const heropower :number[]=[] // an array of type number
superheroes.push("spidey")

//another method of defining arrays with type eg const hero:  Array<Type> =[]
const superheroe: Array<number>=[] //An array of type number
const hero: Array<string> =[] // An array of type string

type User ={ //aliases
    name: string
    isActive: boolean
}

const allUsers: User[]=[] // creating an array of different User objects
allUsers.push({name:"silas", isActive:true})
const MLModels: number[][]=[ // defining a 2d array
    [2,3,4],
    [4,5,6]
]
export {}