import { useState } from 'react'
import Card from './Card'

function ColumnLayout() {
  return (
    <div className="grid-container">
      <div className="column left-column">
        <Card title="Hello World" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida dolor purus, sit amet convallis diam accumsan at. Sed quis libero interdum, tincidunt arcu ac, accumsan lacus. Proin egestas ex id elit rhoncus, a pellentesque purus pellentesque. Integer hendrerit ligula vitae molestie laoreet. Nulla neque lorem, elementum et elit sed, vehicula fringilla nisi. Vestibulum hendrerit purus dui, et mollis est consequat a. Donec ut consequat orci."/>
        <Card title="Hello World" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida dolor purus, sit amet convallis diam accumsan at. Sed quis libero interdum, tincidunt arcu ac, accumsan lacus. Proin egestas ex id elit rhoncus, a pellentesque purus pellentesque. Integer hendrerit ligula vitae molestie laoreet. Nulla neque lorem, elementum et elit sed, vehicula fringilla nisi. Vestibulum hendrerit purus dui, et mollis est consequat a. Donec ut consequat orci."/>
      </div>
      <div className="column right-column">
        <Card title="Hello World" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida dolor purus, sit amet convallis diam accumsan at. Sed quis libero interdum, tincidunt arcu ac, accumsan lacus. Proin egestas ex id elit rhoncus, a pellentesque purus pellentesque. Integer hendrerit ligula vitae molestie laoreet. Nulla neque lorem, elementum et elit sed, vehicula fringilla nisi. Vestibulum hendrerit purus dui, et mollis est consequat a. Donec ut consequat orci."/>
        <Card title="Hello World" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida dolor purus, sit amet convallis diam accumsan at. Sed quis libero interdum, tincidunt arcu ac, accumsan lacus. Proin egestas ex id elit rhoncus, a pellentesque purus pellentesque. Integer hendrerit ligula vitae molestie laoreet. Nulla neque lorem, elementum et elit sed, vehicula fringilla nisi. Vestibulum hendrerit purus dui, et mollis est consequat a. Donec ut consequat orci."/>
      </div>
    </div>
  )
}

export default ColumnLayout