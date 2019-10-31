import { test } from 'tape-modern'
import { map, filter, reduce, compose } from 'ramda'

const clients = [
  {
    age: 22,
    eyeColor: 'green',
    name: {
      firstName: 'Horne',
      lastName: 'Hahn'
    },
    gender: 'male',
    email: 'hornehahn@vidto.com',
    phone: '+1 (803) 528-3269',
    address: {
      street: '494 Bayview Place',
      city: 'Chesterfield',
      state: 'Nebraska',
      zip: 84643
    },
    registered: '2014-04-13T12:10:25 +04:00'
  },
  {
    age: 25,
    eyeColor: 'green',
    name: {
      firstName: 'Rhodes',
      lastName: 'Harvey'
    },
    gender: 'male',
    email: 'rhodesharvey@vidto.com',
    phone: '+1 (975) 583-2319',
    address: {
      street: '705 Legion Street',
      city: 'Herald',
      state: 'Idaho',
      zip: 63136
    },
    registered: '2015-03-24T11:02:46 +04:00'
  },
  {
    age: 40,
    eyeColor: 'green',
    name: {
      firstName: 'Concetta',
      lastName: 'Talley'
    },
    gender: 'female',
    email: 'concettatalley@vidto.com',
    phone: '+1 (807) 538-2667',
    address: {
      street: '7245 3rd Ave',
      city: 'Pickens',
      state: 'South Carolina',
      zip: 28745
    },
    registered: '2015-09-19T12:40:05 +04:00'
  },
  {
    age: 26,
    eyeColor: 'green',
    name: {
      firstName: 'Sandra',
      lastName: 'Hogan'
    },
    gender: 'female',
    email: 'sandrahogan@vidto.com',
    phone: '+1 (987) 568-2357',
    address: {
      street: '332 Junius Street',
      city: 'Cheyenne',
      state: 'Wyoming',
      zip: 37564
    },
    registered: '2015-03-18T11:57:49 +04:00'
  },
  {
    age: 27,
    eyeColor: 'blue',
    name: {
      firstName: 'Butler',
      lastName: 'Flynn'
    },
    gender: 'male',
    email: 'butlerflynn@vidto.com',
    phone: '+1 (993) 588-3113',
    address: {
      street: '342 Gelston Avenue',
      city: 'Asheville',
      state: 'North Carolina',
      zip: 28801
    },
    registered: '2017-10-02T06:08:32 +04:00'
  },
  {
    age: 27,
    eyeColor: 'blue',
    name: {
      firstName: 'Hurst',
      lastName: 'Adkins'
    },
    gender: 'male',
    email: 'hurstadkins@vidto.com',
    phone: '+1 (955) 490-2739',
    address: {
      street: '874 Delvana Street',
      city: 'Nanafilda',
      state: 'Wyoming',
      zip: 98647
    },
    registered: '2015-02-01T11:16:26 +05:00'
  }
]

export default function() {
  /* Level 2 - colors */

  const ex1 =
    'Use map to return a concatenated first and last name of each client.'
  const exercise1 = _ => {
    function fullName (clients) {
      return clients.name.firstName+" "+ clients.name.lastName
    }
    return map(fullName,clients)

  }

  const ex2 = 'Use filter to return clients from Wyoming'
  const exercise2 = _ => {
    function clientsWyoming (clients) {
      if(clients.address.state==="Wyoming") {
        return clients
      }
      
    }
    return filter(clientsWyoming,clients)
  }

  const ex3 = 'Use reduce to count the number of people with green eyes '
  const exercise3 = _ => {
    function greenEyes (acc,clients) {
      if(clients.eyeColor==="green") {
        acc=acc+1
      } return acc
    }
    return reduce(greenEyes,0,clients)
  }

  const ex4 = `Use map, filter and reduce with compose to return the full name (as a string) of the female from Wyoming. `
  const exercise4 = _ => {
    function fullName (clients) {
      return clients.name.firstName+" "+ clients.name.lastName
    }
    function stateFemale (clients) {
      if(clients.address.state==="Wyoming" && clients.gender==="female") 
      return clients
    }
  function display (acc,clients) {
    return clients
  }
    
    return compose(reduce(display,0),map(fullName),filter(stateFemale))(clients)
  }

  const ex5 =
    'Use map and filter to return the full address of the clients living in North Carolina'
  const exercise5 = _ => {
    function fullAddress(clients) {
      return clients.address.street+" "+ clients.address.city+", "+ clients.address.state+" "+ clients.address.zip
    }
    function whereTheyLive (clients) {
      if(clients.address.state==="North Carolina")
      return clients
    }
    return compose(map(fullAddress),filter(whereTheyLive))(clients)
  }

  const ex6 = 'use filter to remove anyone over the age of 25'
  const exercise6 = _ => {
    function over25 (clients) {
      if(clients.age<=25){
        return clients
      }
    }
    return filter(over25,clients)
  }

  const ex7 =
    'use reduce to count the number of males, age 22 - 27, who have green eyes'
  const exercise7 = _ => {
    function malesBetween (acc, clients) {
      if(clients.gender==="male" && clients.eyeColor==="green" && (clients.age>=22 &&clients.age<= 27)){
        acc=acc+1;
      } return acc
    }
   return reduce(malesBetween,0,clients)
  }

  /* tests to validate exercises go here */
  test('test', assert => {
    assert.same(
      exercise1(),
      [
        'Horne Hahn',
        'Rhodes Harvey',
        'Concetta Talley',
        'Sandra Hogan',
        'Butler Flynn',
        'Hurst Adkins'
      ],
      ex1
    )
    assert.same(
      exercise2(),
      [
        {
          age: 26,
          eyeColor: 'green',
          name: {
            firstName: 'Sandra',
            lastName: 'Hogan'
          },
          gender: 'female',
          email: 'sandrahogan@vidto.com',
          phone: '+1 (987) 568-2357',
          address: {
            street: '332 Junius Street',
            city: 'Cheyenne',
            state: 'Wyoming',
            zip: 37564
          },
          registered: '2015-03-18T11:57:49 +04:00'
        },
        {
          age: 27,
          eyeColor: 'blue',
          name: {
            firstName: 'Hurst',
            lastName: 'Adkins'
          },
          gender: 'male',
          email: 'hurstadkins@vidto.com',
          phone: '+1 (955) 490-2739',
          address: {
            street: '874 Delvana Street',
            city: 'Nanafilda',
            state: 'Wyoming',
            zip: 98647
          },
          registered: '2015-02-01T11:16:26 +05:00'
        }
      ],
      ex2
    )
    assert.same(exercise3(), 4, ex3)
    assert.same(exercise4(), 'Sandra Hogan', ex4)
    assert.same(
      exercise5(),
      ['342 Gelston Avenue Asheville, North Carolina 28801'],
      ex5
    )
    assert.same(
      exercise6(),
      [
        {
          age: 22,
          eyeColor: 'green',
          name: {
            firstName: 'Horne',
            lastName: 'Hahn'
          },
          gender: 'male',
          email: 'hornehahn@vidto.com',
          phone: '+1 (803) 528-3269',
          address: {
            street: '494 Bayview Place',
            city: 'Chesterfield',
            state: 'Nebraska',
            zip: 84643
          },
          registered: '2014-04-13T12:10:25 +04:00'
        },
        {
          age: 25,
          eyeColor: 'green',
          name: {
            firstName: 'Rhodes',
            lastName: 'Harvey'
          },
          gender: 'male',
          email: 'rhodesharvey@vidto.com',
          phone: '+1 (975) 583-2319',
          address: {
            street: '705 Legion Street',
            city: 'Herald',
            state: 'Idaho',
            zip: 63136
          },
          registered: '2015-03-24T11:02:46 +04:00'
        }
      ],
      ex6
    ),
      assert.same(exercise7(), 2, ex7)
  })
}
