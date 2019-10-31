import { test } from 'tape-modern'
import { map, filter, reduce, compose } from 'ramda'
import capitalizeWords from './lib/capitalize'

const cars = [
  {
    model: 'silverado',
    make: 'chevy',
    engine: 'V8',
    color: 'black',
    year: 1999,
    salesPrice: 29000
  },
  {
    model: 'grand prix',
    make: 'pontiac',
    engine: 'V6',
    color: 'red',
    year: 2001,
    salesPrice: 32000
  },
  {
    model: 'deville',
    make: 'cadillac',
    engine: 'V8',
    color: 'brown',
    year: 2002,
    salesPrice: 36000
  },
  {
    model: 'land cruiser',
    make: 'toyota',
    engine: 'V8',
    color: 'black',
    year: 2001,
    salesPrice: 40000
  },
  {
    model: 'civic',
    make: 'honda',
    engine: 'V4',
    color: 'silver',
    year: 2004,
    salesPrice: 29000
  },
  {
    model: 'sierra',
    make: 'GMC',
    engine: 'V8',
    color: 'navy',
    year: 2006,
    salesPrice: 30000
  }
]

/* Level 3 - Paintings */
export default function() {
  const ex1 =
    'Use map to transform the list of auto models to uppercase the first letter of each word'
  const exercise1 = _ => {
    function modelsUppercase (cars) {
      if(!cars.model.includes(" ")) {
        var firstLetter = cars.model[0].toUpperCase()
      
        return firstLetter + cars.model.slice(1)
      } else {
        var twoWords = cars.model.split(" ")
        var firstLetter2 = twoWords[0][0].toUpperCase() + twoWords[0].slice(1)
        var firstLetter3 = twoWords[1][0].toUpperCase() + twoWords[1].slice(1)
        return (firstLetter2+" " +firstLetter3)
      }  
    }


  return (map(modelsUppercase,cars))
  }

  const ex2 = 'Use filter to return a list of cars made between 2001-2004'
  const exercise2 = _ => {
    function carsMadeBetween (cars) {
      if(cars.year>=2001 && cars.year<=2004) {
        return cars
      }
    }
        
    return filter(carsMadeBetween,cars)
  }

  const ex3 =
    'Use reduce to count the number of cars that were made in the 2000s'
  const exercise3 = _ => {
    function made2000 (acc,cars) {
      if(cars.year>=2000) {
        acc=acc+1
      } return acc
    }
    return reduce(made2000,0,cars)
  }

  const ex4 =
    'Use map, filter and reduce with compose to return the price of the the most expensive car from the 2000s '
  const exercise4 = _ => {
    function cars2000 (cars){
      if(cars.year>=2000 && cars.salesPrice>39000) {
        return cars
      }
    }
    function showPrice(cars) {
      return cars.salesPrice
    }
    function expensive (acc, cars) {
      return cars
    }
    return (compose(reduce(expensive,0),map(showPrice),filter(cars2000))(cars))
    }

  const ex5 = `Use map to transform the salesPrice to USD currency format (ex: $400,000.00)

    ** Hint: Check MDN for the toLocaleString method on the Number Object **
    `
  const exercise5 = _ => {
    function toUSD (cars) {
      var myObj = {
        style: "currency",
        currency: "USD"
      }
      return cars.salesPrice.toLocaleString('en-US', myObj)
    }
    return map(toUSD,cars)
  }

  const ex6 = `Use compose and filter to return cars with V8s, map over them and return the names of the cars with the first letter capitalized.`

  const exercise6 = _ => {
    function modelsUppercase (cars) {
      if(!cars.model.includes(" ")) {
        var firstLetter = cars.model[0].toUpperCase()
      
        return firstLetter + cars.model.slice(1)
      } else {
        var twoWords = cars.model.split(" ")
        var firstLetter2 = twoWords[0][0].toUpperCase() + twoWords[0].slice(1)
        var firstLetter3 = twoWords[1][0].toUpperCase() + twoWords[1].slice(1)
        return (firstLetter2+" " +firstLetter3)
      }  
    }
    function v8s(cars) {
      if(cars.engine==="V8") {
        return cars
      }
    }
    return compose(map(modelsUppercase),filter(v8s))(cars)
  }

  /* tests to validate exercises go here */
  test('test', assert => {
    assert.same(
      exercise1(),
      ['Silverado', 'Grand Prix', 'Deville', 'Land Cruiser', 'Civic', 'Sierra'],
      ex1
    )

    assert.same(
      exercise2(),
      [
        {
          model: 'grand prix',
          make: 'pontiac',
          engine: 'V6',
          color: 'red',
          year: 2001,
          salesPrice: 32000
        },
        {
          model: 'deville',
          make: 'cadillac',
          engine: 'V8',
          color: 'brown',
          year: 2002,
          salesPrice: 36000
        },
        {
          model: 'land cruiser',
          make: 'toyota',
          engine: 'V8',
          color: 'black',
          year: 2001,
          salesPrice: 40000
        },
        {
          model: 'civic',
          make: 'honda',
          engine: 'V4',
          color: 'silver',
          year: 2004,
          salesPrice: 29000
        }
      ],
      ex2
    )
    assert.same(exercise3(), 5, ex3)
    assert.same(exercise4(), 40000, ex4)
    assert.same(exercise5(), [
      '$29,000.00',
      '$32,000.00',
      '$36,000.00',
      '$40,000.00',
      '$29,000.00',
      '$30,000.00'
    ])
    assert.same(
      exercise6(),
      ['Silverado', 'Deville', 'Land Cruiser', 'Sierra'],
      ex6
    )
  })
}
