"use client"
import React, { useState, useEffect, useRef } from 'react'

export default function Interview() {
  console.log("about console");

  const list = [
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" },
              { "id": "1003", "type": "Blueberry" },
              { "id": "1004", "type": "Devil's Food" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5007", "type": "Powdered Sugar" },
          { "id": "5006", "type": "Chocolate with Sprinkles" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0002",
      "type": "donut",
      "name": "Raised",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0003",
      "type": "donut",
      "name": "Old Fashioned",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    }
  ];

  console.log("-render-");
  const [selectedId, setSelectedId] = useState("");
  const [toppings, setToppings] = useState(Array<{ "id": string, "type": string }>);
  
  useEffect(()=>{
    console.log("-useEffects-");
    // Find the item with the selected ID
    const selectedItem = list.find(item => item.id === selectedId);

    // Extract the toppings from the selected item
    const selectedToppings = selectedItem ? selectedItem.topping : [];
    
    // Update the state with the selected toppings
    setToppings(selectedToppings);

  },[selectedId]);//???????????????
  
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello about -selected ID {selectedId}</h1>
      <select name="" id=""
      onChange={(e)=>{
        console.log(e.target.value);
        setSelectedId(e.target.value);
      }}
      >
        {
          list.map((item, index)=>{
            return (<option key={item.id} value={item.id}>{item.name}</option>)
          })
        }
      </select>
      <select name="" id="">
        {
          toppings.map((topping)=>{
            return (<option key={topping.id} value={topping.id}>{topping.type}</option>)
          })
        }
      </select>
    </main>
    </div>
  )
}


