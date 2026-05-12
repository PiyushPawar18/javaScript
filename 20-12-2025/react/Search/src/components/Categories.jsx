import React, { useEffect } from 'react'
import data from './Data'
import { useState } from 'react'

const Categories = () => {
    const [sports , setSports] = useState(false);
    const [company , setCompany] = useState(false);
    const [cars , setCars] = useState(false);
    const [arr , setArr] = useState(data)

    const showCategoryData = () => {
        let a=[],cp=[],c=[]
        if(sports == true){
            a = data.filter((v) => v.category == "sports")
        }
        if(company == true){
            cp = data.filter((v) => v.category == "company")
        }
        if(cars == true){
            c = data.filter((v) => v.category == "cars")
        }
        let all = [...a,...cp,...c]
        console.log(all)
        setArr(all);
    }
    useEffect(() => {
        showCategoryData()
    },[sports,company,cars])

  return (
    <div>
      <div>
        <button onClick={() => setSports(!sports)}>sports</button>
        <button onClick={() => setCompany(!company)}>company</button>
        <button onClick={() => setCars(!cars)}>cars</button>
      </div>
      <div>
        {
            arr.map((v,i) => {
                return (
                    <div key={v.id}>{v.title} ({v.category})</div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Categories

/*
import React, { useState } from 'react'
import data from './Data'

const Categories = () => {
  const [selected, setSelected] = useState([])
  
  const toggleCategory = (cat) => {
    setSelected(prev =>
      prev.includes(cat)
        ? prev.filter(c => c !== cat)
        : [...prev, cat]
    )
  }

  const filteredData =
    selected.length === 0
      ? data
      : data.filter(item => selected.includes(item.category))

  return (
    <div>
      <button onClick={() => toggleCategory("sports")}>Sports</button>
      <button onClick={() => toggleCategory("company")}>Company</button>
      <button onClick={() => toggleCategory("cars")}>Cars</button>

      <div>
        {filteredData.map(item => (
          <div key={item.id}>
            {item.title} ({item.category})
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
*/